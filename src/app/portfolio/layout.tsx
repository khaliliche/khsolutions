import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Portfolio", template: "%s" },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}