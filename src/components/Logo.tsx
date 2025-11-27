interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`font-display font-bold text-gradient ${className}`}>
      ASI
    </span>
  );
}
