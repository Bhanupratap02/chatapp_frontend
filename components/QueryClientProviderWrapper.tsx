/** @format */

// components/QueryClientProviderWrapper.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
// const queryClient = new QueryClient();

export function QueryClientProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
   const [client] = useState(new QueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
