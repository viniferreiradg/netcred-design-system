import './Table.css';

/**
 * Table — tabela de dados flexível
 *
 * Props:
 *  columns   array   [ { key, label, width?, align?, render? } ]
 *            - key:    chave do objeto de dados
 *            - label:  texto do cabeçalho
 *            - width:  largura em px (opcional)
 *            - align:  'left' | 'center' | 'right' (default: 'left')
 *            - render: fn(value, row) → ReactNode — célula customizada
 *
 *  data      array   lista de objetos — cada objeto é uma linha
 *  rowKey    string  chave única por linha (default: 'id')
 *  onRowClick fn(row) callback ao clicar na linha (opcional)
 *  emptyText string  texto quando não há dados (default: 'Nenhum dado encontrado')
 */
export default function Table({
  columns  = [],
  data     = [],
  rowKey   = 'id',
  onRowClick,
  emptyText = 'Nenhum dado encontrado',
}) {
  return (
    <div className="table-wrap">
      <table className="table">

        {/* Cabeçalho */}
        <thead className="table__head">
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                className="table__th"
                style={{ width: col.width ? `${col.width}px` : undefined }}
                data-align={col.align ?? 'left'}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Corpo */}
        <tbody className="table__body">
          {data.length === 0 ? (
            <tr>
              <td className="table__empty" colSpan={columns.length}>
                {emptyText}
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={row[rowKey] ?? i}
                className={['table__row', onRowClick && 'table__row--clickable'].filter(Boolean).join(' ')}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map(col => (
                  <td
                    key={col.key}
                    className="table__td"
                    data-align={col.align ?? 'left'}
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
}
