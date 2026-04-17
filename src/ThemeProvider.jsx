import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Wraps next-themes for Vite + React (class on <html>: .dark = dark mode).
 */
export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="portfolio-ui-theme"
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
