"use client";

import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <Header />
      {children}
      <Footer />
    </ClerkProvider>
  );
}
