export default function StatusDev({ size = 24, color = 'currentColor', strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0215 22.0256C17.5443 22.0256 22.0215 17.5484 22.0215 12.0256C22.0215 6.50273 17.5443 2.02557 12.0215 2.02557C6.49864 2.02557 2.02148 6.50273 2.02148 12.0256C2.02148 17.5484 6.49864 22.0256 12.0215 22.0256Z" stroke={color} strokeWidth={strokeWidth} strokeMiterlimit="10"/>
      <path d="M14.1414 5.88557C13.4814 5.65557 12.7614 5.52557 12.0214 5.52557L12.0214 11.6956L9.69141 18.0856C10.4114 18.3756 11.2014 18.5256 12.0214 18.5256C15.6114 18.5256 18.5214 15.6156 18.5214 12.0256C18.5214 9.17557 16.6914 6.76557 14.1414 5.88557Z" fill={color}/>
    </svg>
  );
}
