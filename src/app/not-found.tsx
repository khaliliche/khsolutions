import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary-light">404</p>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            This page could not be found
          </h1>
          <p className="mt-4 text-muted leading-relaxed">
            The page you are looking for may have moved or no longer exists.
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm">
            <Link href="/" className="text-primary-light hover:underline">Home</Link>
            <Link href="/services" className="text-primary-light hover:underline">Services</Link>
            <Link href="/portfolio" className="text-primary-light hover:underline">Portfolio</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}