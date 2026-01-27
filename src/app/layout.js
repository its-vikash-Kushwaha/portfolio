import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Vikash Kushwaha | Backend Developer Portfolio",
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
