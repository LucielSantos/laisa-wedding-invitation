import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ className?: string }>;

export const Button = ({ children, className }: Props) => {
  return (
    <div
      className={`bg-indigo-500 rounded-full p-2.5 cursor-pointer w-[62px] h-[62px] ${className}`}
    >
      {children}
    </div>
  );
};
