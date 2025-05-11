import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Badge({ children }: Props) {
  return (
    <div className="text-xs py-1 px-2 rounded-2xl bg-white/20 border-white border w-fit">
      {children}
    </div>
  );
}
