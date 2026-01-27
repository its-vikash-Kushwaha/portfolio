import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Vikash Kushwaha • Backend Software Engineer",
    description: "Portfolio of Vikash Kushwaha, an Aspiring Backend Developer specialized in Java, Spring Boot, and REST APIs. Showcasing projects in full-stack development and database management.",
    keywords: ["Vikash Kushwaha", "Backend Developer", "Java Developer", "Spring Boot", "Portfolio", "Software Engineer"],
    authors: [{ name: "Vikash Kushwaha" }],
    openGraph: {
        title: "Vikash Kushwaha | Backend Developer",
        description: "Explore the professional portfolio of Vikash Kushwaha.",
        url: "https://vikash-kushwaha.vercel.app", // Placeholder for deployment
        siteName: "Vikash Kushwaha Portfolio",
        locale: "en_US",
        type: "website",
    },
    icons: {
        icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><linearGradient id=%22g%22 x1=%220%%22 y1=%220%%22 x2=%22100%%22 y2=%22100%%22><stop offset=%220%%22 style=%22stop-color:%2300f2ff;stop-opacity:1%22 /><stop offset=%22100%%22 style=%22stop-color:%237000ff;stop-opacity:1%22 /></linearGradient></defs><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%230a0a0a%22/><text x=%2250%%22 y=%2255%%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2260%22 font-family=%22Outfit, sans-serif%22 font-weight=%22900%22 fill=%22url(%23g)%22>VK</text></svg>',
        apple: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><linearGradient id=%22g%22 x1=%220%%22 y1=%220%%22 x2=%22100%%22 y2=%22100%%22><stop offset=%220%%22 style=%22stop-color:%2300f2ff;stop-opacity:1%22 /><stop offset=%22100%%22 style=%22stop-color:%237000ff;stop-opacity:1%22 /></linearGradient></defs><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%230a0a0a%22/><text x=%2250%%22 y=%2255%%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2260%22 font-family=%22Outfit, sans-serif%22 font-weight=%22900%22 fill=%22url(%23g)%22>VK</text></svg>',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="dark">
            <body className={inter.className}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
