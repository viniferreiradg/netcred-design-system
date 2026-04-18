export default function ChartSpline2({ size = 24, color = 'currentColor', strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.0127 2.01282L2.0127 19.7906C2.0127 20.38 2.24682 20.9452 2.66357 21.3619C3.08032 21.7787 3.64555 22.0128 4.23492 22.0128L22.0127 22.0128M6.45714 16.4573C6.43869 11.4383 9.77203 4.77161 18.6609 4.77161" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
