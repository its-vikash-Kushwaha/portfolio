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
        icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><linearGradient id=%22g%22 x1=%220%%22 y1=%220%%22 x2=%22100%%22 y2=%22100%%22><stop offset=%220%%22 style=%22stop-color:%235b6af5;stop-opacity:1%22 /><stop offset=%22100%%22 style=%22stop-color:%2300d4aa;stop-opacity:1%22 /></linearGradient></defs><rect width=%22100%22 height=%22100%22 rx=%2224%22 fill=%22url(%23g)%22/><text x=%2250%%22 y=%2254%%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2256%22 font-family=%22system-ui, sans-serif%22 font-weight=%22900%22 fill=%22%23ffffff%22>VK</text></svg>',
        apple: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><linearGradient id=%22g%22 x1=%220%%22 y1=%220%%22 x2=%22100%%22 y2=%22100%%22><stop offset=%220%%22 style=%22stop-color:%235b6af5;stop-opacity:1%22 /><stop offset=%22100%%22 style=%22stop-color:%2300d4aa;stop-opacity:1%22 /></linearGradient></defs><rect width=%22100%22 height=%22100%22 rx=%2224%22 fill=%22url(%23g)%22/><text x=%2250%%22 y=%2254%%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2256%22 font-family=%22system-ui, sans-serif%22 font-weight=%22900%22 fill=%22%23ffffff%22>VK</text></svg>',
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
