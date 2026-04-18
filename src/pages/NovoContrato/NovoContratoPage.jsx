import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar    from '../../components/Sidebar/Sidebar';
import InputText  from '../../components/InputText/InputText';
import IconButton from '../../components/IconButton/IconButton';
import Button     from '../../components/Button/Button';
import Radio      from '../../components/Radio/Radio';
import Stepper    from '../../components/Stepper/Stepper';
import {
  LayoutDashboard,
  User,
  DollarSign,
  RefreshCw,
  FileStack,
  Building2,
  Bell,
  Settings,
  Search,
  Moon,
  ChevronLeft,
} from 'lucide-react';
import './NovoContratoPage.css';

const NAV_ITEMS = [
  { label: 'Painel Financeiro', icon: LayoutDashboard },
  { label: 'Clientes',          icon: User,       subItems: [{ label: 'Novo Cliente' }, { label: 'Importar lista' }] },
  { label: 'Recebíveis',        icon: DollarSign },
  { label: 'Conciliações',      icon: RefreshCw },
  { label: 'Solicitações',      icon: FileStack },
  { label: 'Adquirentes',       icon: Building2 },
  { label: 'Notificações',      icon: Bell,       notification: 1 },
  { label: 'Perfil',            icon: User },
  { label: 'Configurações',     icon: Settings },
];

const COMPANY = { name: 'La moda' };

const USER = {
  name:   'Felipe Coelho',
  email:  'felipe.coelho@empresa.com.br',
  avatar: 'https://i.pravatar.cc/150?img=12',
};

const STEPS = ['Método de divisão', 'Seleção de porcentagem', 'Detalhes do contrato'];


export default function NovoContratoPage() {
  const navigate = useNavigate();

  const [collapsed, setCollapsed]   = useState(false);
  const [step, setStep]             = useState(1);

  /* Etapa 1 */
  const [metodo, setMetodo]         = useState('');

  /* Etapa 2 */
  const [selecao, setSelecao]       = useState('');

  /* Etapa 3 */
  const [form, setForm] = useState({
    nomeContrato:     '',
    descricao:        '',
    financiador:      '',
    estabelecimento:  '',
    contaBancaria:    '',
    diaAssinatura:    '',
    tipoContrato:     '',
    porcentagem:      '',
    valorEsperado:    '',
    dataVencimento:   '',
    clienteNome:      '',
    clienteDoc:       '',
    clienteEmail:     '',
    clienteTelefone:  '',
    clienteEndereco:  '',
  });

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  return (
    <div className={['novo-contrato-layout', collapsed && 'novo-contrato-layout--collapsed'].filter(Boolean).join(' ')}>

      <Sidebar
        navItems={NAV_ITEMS}
        activeItem="Recebíveis"
        company={COMPANY}
        collapsed={collapsed}
        onCollapse={setCollapsed}
        onLogout={() => {}}
        onCompany={() => {}}
        onNavigate={() => {}}
      />

      <main className="novo-contrato-content">

        {/* ── TopBar ─────────────────────────────────────────────── */}
        <header className="topbar">
          <button className="topbar__back" onClick={() => navigate('/recebiveis')} aria-label="Voltar">
            <ChevronLeft size={20} />
          </button>
          <h1 className="topbar__title">Novo contrato</h1>

          <div className="topbar__search">
            <InputText placeholder="Pesquisar" icon={<Search />} />
          </div>

          <div className="topbar__actions">
            <IconButton icon={<Bell />}     variant="circle-notification" colorScheme="light" badgeVariant="default" badgeLabel="1" ariaLabel="Notificações" />
            <IconButton icon={<Settings />} variant="circle"              colorScheme="light" ariaLabel="Configurações" />
            <IconButton icon={<Moon />}     variant="circle"              colorScheme="light" ariaLabel="Tema" />
          </div>

          <div className="topbar__user">
            <img src={USER.avatar} alt={USER.name} className="topbar__avatar" />
            <div className="topbar__user-info">
              <span className="topbar__user-name">{USER.name}</span>
              <span className="topbar__user-email">{USER.email}</span>
            </div>
          </div>
        </header>

        {/* ── Stepper ────────────────────────────────────────────── */}
        <div className="novo-contrato-stepper">
          <Stepper steps={STEPS} current={step} />
        </div>

        {/* ── Etapa 1 — Método de divisão ────────────────────────── */}
        {step === 1 && (
          <div className="step-card">
            <h2 className="step-card__title">Método de divisão</h2>
            <p className="step-card__desc">Como os recebíveis serão divididos no contrato?</p>

            <div className="step-card__options">
              <label className={`option-card ${metodo === 'fixo' ? 'option-card--selected' : ''}`}>
                <Radio
                  name="metodo"
                  value="fixo"
                  checked={metodo === 'fixo'}
                  onChange={() => setMetodo('fixo')}
                  label="Valor fixo"
                />
                <p className="option-card__desc">Um valor fixo em reais será reservado por recebível.</p>
              </label>

              <label className={`option-card ${metodo === 'porcentagem' ? 'option-card--selected' : ''}`}>
                <Radio
                  name="metodo"
                  value="porcentagem"
                  checked={metodo === 'porcentagem'}
                  onChange={() => setMetodo('porcentagem')}
                  label="Porcentagem"
                />
                <p className="option-card__desc">Uma porcentagem do valor de cada recebível será reservada.</p>
              </label>
            </div>

            <div className="step-card__actions">
              <Button variant="primary" size="m" disabled={!metodo} onClick={() => setStep(2)}>
                Próximo
              </Button>
            </div>
          </div>
        )}

        {/* ── Etapa 2 — Método de seleção de porcentagem ─────────── */}
        {step === 2 && (
          <div className="step-card">
            <h2 className="step-card__title">Método de seleção de porcentagem</h2>
            <p className="step-card__desc">Como a porcentagem será aplicada?</p>

            <div className="step-card__options">
              <label className={`option-card ${selecao === 'unidade' ? 'option-card--selected' : ''}`}>
                <Radio
                  name="selecao"
                  value="unidade"
                  checked={selecao === 'unidade'}
                  onChange={() => setSelecao('unidade')}
                  label="Por unidade de recebível"
                />
                <p className="option-card__desc">A porcentagem é aplicada individualmente em cada recebível.</p>
              </label>

              <label className={`option-card ${selecao === 'periodo' ? 'option-card--selected' : ''}`}>
                <Radio
                  name="selecao"
                  value="periodo"
                  checked={selecao === 'periodo'}
                  onChange={() => setSelecao('periodo')}
                  label="Por período"
                />
                <p className="option-card__desc">A porcentagem é aplicada sobre o total de recebíveis do período.</p>
              </label>
            </div>

            <div className="step-card__actions">
              <Button variant="secondary" size="m" onClick={() => setStep(1)}>Anterior</Button>
              <Button variant="primary"   size="m" disabled={!selecao} onClick={() => setStep(3)}>Próximo</Button>
            </div>
          </div>
        )}

        {/* ── Etapa 3 — Detalhes do contrato ─────────────────────── */}
        {step === 3 && (
          <div className="step-card step-card--wide">
            <h2 className="step-card__title">Detalhes do contrato</h2>

            <div className="form-grid">

              {/* Coluna principal */}
              <div className="form-col">
                <h3 className="form-section-label">Contrato</h3>
                <div className="form-row">
                  <InputText label="Nome do contrato"  value={form.nomeContrato}    onChange={set('nomeContrato')}   placeholder="Ex: Contrato HRH 2024" />
                  <InputText label="Descrição"          value={form.descricao}        onChange={set('descricao')}      placeholder="Descrição breve" />
                </div>
                <div className="form-row">
                  <InputText label="Financiador"        value={form.financiador}      onChange={set('financiador')}    placeholder="CNPJ ou nome" />
                  <InputText label="Estabelecimento"    value={form.estabelecimento}  onChange={set('estabelecimento')} placeholder="CNPJ ou nome" />
                </div>
                <div className="form-row">
                  <InputText label="Conta bancária do financiador" value={form.contaBancaria} onChange={set('contaBancaria')} placeholder="Ag. / Conta" />
                  <InputText label="Dia da assinatura"  value={form.diaAssinatura}    onChange={set('diaAssinatura')}  placeholder="DD/MM/AAAA" />
                </div>

                <h3 className="form-section-label" style={{ marginTop: 'var(--space-24)' }}>Tipo de contrato</h3>
                <div className="form-radios">
                  <Radio name="tipoContrato" value="troca"    label="Troca de titularidade"  checked={form.tipoContrato === 'troca'}    onChange={() => setForm(f => ({ ...f, tipoContrato: 'troca' }))} />
                  <Radio name="tipoContrato" value="garantia" label="Garantia fiduciária"    checked={form.tipoContrato === 'garantia'} onChange={() => setForm(f => ({ ...f, tipoContrato: 'garantia' }))} />
                </div>

                <div className="form-row" style={{ marginTop: 'var(--space-16)' }}>
                  <InputText label="Porcentagem (%)"    value={form.porcentagem}      onChange={set('porcentagem')}    placeholder="0,00" />
                  <InputText label="Valor esperado"     value={form.valorEsperado}    onChange={set('valorEsperado')}  placeholder="R$ 0,00" />
                </div>
                <div className="form-row">
                  <InputText label="Data de vencimento" value={form.dataVencimento}   onChange={set('dataVencimento')} placeholder="DD/MM/AAAA" />
                </div>
              </div>

              {/* Coluna cliente */}
              <div className="form-col">
                <h3 className="form-section-label">Cliente</h3>
                <InputText label="Nome"       value={form.clienteNome}      onChange={set('clienteNome')}      placeholder="Nome completo ou razão social" />
                <div style={{ marginTop: 'var(--space-12)' }}>
                  <InputText label="CPF / CNPJ"  value={form.clienteDoc}       onChange={set('clienteDoc')}       placeholder="000.000.000-00" />
                </div>
                <div style={{ marginTop: 'var(--space-12)' }}>
                  <InputText label="E-mail"       value={form.clienteEmail}     onChange={set('clienteEmail')}     placeholder="email@empresa.com.br" />
                </div>
                <div style={{ marginTop: 'var(--space-12)' }}>
                  <InputText label="Telefone"     value={form.clienteTelefone}  onChange={set('clienteTelefone')}  placeholder="(00) 00000-0000" />
                </div>
                <div style={{ marginTop: 'var(--space-12)' }}>
                  <InputText label="Endereço"     value={form.clienteEndereco}  onChange={set('clienteEndereco')}  placeholder="Rua, número, cidade" />
                </div>
              </div>

            </div>

            <div className="step-card__actions">
              <Button variant="secondary" size="m" onClick={() => setStep(2)}>Anterior</Button>
              <Button variant="primary"   size="m" onClick={() => navigate('/recebiveis')}>Criar contrato</Button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
