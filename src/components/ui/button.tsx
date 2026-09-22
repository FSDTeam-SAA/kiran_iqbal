import React from "react";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  showIcon?: boolean;
  icon?: React.ReactNode;
  href?: string;
}

const Button = ({
  variant = "primary",
  children,
  onClick,
  className = "",
  showIcon = true,
  icon,
  type = "button",
  href,
  ...props
}: ButtonProps) => {
  const isPrimary = variant === "primary";

  const content = (
    <>
      {showIcon && (icon || <FiPhone className={`size-4 shrink-0 stroke-[1.8] transition-colors duration-200`} />)}

      <span className={`text-center text-xl font-bold font-['Barlow_Condensed'] uppercase leading-5 tracking-wide transition-colors duration-200 ${isPrimary ? "text-white" : "text-green-600 group-hover:text-white"}`}>
        {children}
      </span>
    </>
  );

  const combinedClassName = `group inline-flex justify-center items-center gap-3.5 px-6 py-3.5 rounded-[10px] transition-all duration-200 ease-out hover:-translate-y-1 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:translate-y-0 ${
    isPrimary
      ? "bg-green-600 shadow-[0px_6px_0px_0px_rgba(6,120,6,1)] hover:shadow-[0px_8px_0px_0px_rgba(6,120,6,1)] disabled:shadow-[0px_6px_0px_0px_rgba(6,120,6,0.4)] text-white"
      : "bg-white outline outline-2 outline-offset-[-2px] outline-green-600 text-green-600 hover:bg-green-600 hover:text-white"
  } ${className}`;

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={combinedClassName}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName} {...props}>
      {content}
    </button>
  );
};

export default Button;