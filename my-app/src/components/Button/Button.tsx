interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "card" | "review" | "order"; 
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({ children, onClick, variant = "primary", className = "", type = "button", disabled = false }: ButtonProps) {
  const baseClasses = "px-7 py-3 rounded-full transition border border-black ";
  const primaryClasses = "bg-white text-black hover:bg-[#F0A6D6] hover:text-white hover:border-0 dark:hover:text-black";
  const secondaryClasses = "bg-transparent border border-white hover:bg-white hover:bg-opacity-10";
  const cardClasses = "bg-[#E6528A] px-9 text-white font-semibold border-0 hover:bg-[#FFA6D6]";
  const reviewClasses = "bg-[#E6528A] border-0 text-white px-6"; 
  const orderClasses = "bg-[#E6528A] text-white px-6 border-0 hover:bg-[#FFA6D6]";

  const classes = `${baseClasses} ${
    variant === "review" ? reviewClasses :
    variant === "card" ? cardClasses :
    variant === "order" ? orderClasses :
    variant === "primary" ? primaryClasses :
    secondaryClasses
  } ${className}`;

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
