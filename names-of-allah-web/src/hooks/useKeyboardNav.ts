"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const TOP_LEVEL_ROUTES = ["/", "/names", "/advisor", "/quiz", "/settings"];

function isDeepRoute(pathname: string) {
  return !TOP_LEVEL_ROUTES.includes(pathname);
}

function isInputTarget(e: KeyboardEvent) {
  const target = e.target as HTMLElement;
  return (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  );
}

export function useKeyboardNav() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (isInputTarget(e)) return;

      switch (e.key) {
        case "Escape":
          if (isDeepRoute(pathname)) {
            router.back();
          }
          break;
        case "1":
          if (!e.metaKey && !e.ctrlKey) router.push("/");
          break;
        case "2":
          if (!e.metaKey && !e.ctrlKey) router.push("/names");
          break;
        case "3":
          if (!e.metaKey && !e.ctrlKey) router.push("/advisor");
          break;
        case "4":
          if (!e.metaKey && !e.ctrlKey) router.push("/quiz");
          break;
        case "5":
          if (!e.metaKey && !e.ctrlKey) router.push("/settings");
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, pathname]);
}
