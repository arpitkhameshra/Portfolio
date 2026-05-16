import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arpit Khameshra — DevOps Engineer | Cloud Infrastructure | CI/CD | IaC",
  description: "DevOps Engineer with 1.5 years of experience in building scalable cloud infrastructure, implementing CI/CD pipelines, and automating deployments using AWS, Kubernetes, Docker, and Terraform. Skilled in monitoring, logging, and optimizing costs while ensuring high system availability and security compliance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-full scroll-smooth">
        {children}
      </body>
    </html>
  );
}
