interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}

export default Button;
