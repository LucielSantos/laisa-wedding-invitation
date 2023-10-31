import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ className?: string; href?: string }>;

export const Button = ({ children, className, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`bg-indigo-500 rounded-full p-2.5 cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
};
