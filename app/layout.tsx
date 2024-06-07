import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "./providers/ThemeProvider";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Yernur",
	description: "Created by Yernur",
	icons: {
		icon: "/logo.svg",
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
					<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
