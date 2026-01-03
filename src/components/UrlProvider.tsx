// components/UrlProvider.tsx
"use client"
import { usePathname } from "next/navigation";

export default function UrlProvider() {
  const pathname = usePathname();
  console.log(pathname);
  return null;
}
