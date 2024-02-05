import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEST",
};

export default function TestComponentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
