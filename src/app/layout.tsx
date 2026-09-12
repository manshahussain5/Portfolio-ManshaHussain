import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manshahussain-portfolio.vercel.app"),
  title: "Mansha Hussain | Full Stack Developer & Data Scientist",
  description:
    "Portfolio of Mansha Hussain — Full Stack Developer & Data Scientist specializing in Next.js, React, Node.js, and modern data science & machine learning solutions.",
  keywords: [
    "Mansha Hussain",
    "Full Stack Developer",
    "Data Scientist",
    "Data Science",
    "Next.js Developer",
    "React Developer",
    "MERN Stack",
    "Machine Learning",
    "Portfolio",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Mansha Hussain" }],
  creator: "Mansha Hussain",
  openGraph: {
    title: "Mansha Hussain | Full Stack Developer & Data Scientist",
    description:
      "I build intelligent, high-performance web applications and data science powered solutions that solve real-world problems and deliver exceptional user experiences.",
    url: "https://manshahussain-portfolio.vercel.app",
    siteName: "Mansha Hussain Portfolio",
    images: [
      {
        url: "/images/mansha_portrait.jpg",
        width: 1200,
        height: 1200,
        alt: "Mansha Hussain - Full Stack Developer & Data Scientist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mansha Hussain | Full Stack Developer & Data Scientist",
    description:
      "Full Stack Developer & Data Scientist building scalable web apps and data-driven systems.",
    images: ["/images/mansha_portrait.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://manshahussain-portfolio.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://manshahussain-portfolio.vercel.app/#person",
      name: "Mansha Hussain",
      url: "https://manshahussain-portfolio.vercel.app",
      jobTitle: "Full Stack Developer & Data Scientist",
      image: "https://manshahussain-portfolio.vercel.app/images/mansha_portrait.jpg",
      sameAs: [
        "https://github.com/manshahussain5",
        "https://www.linkedin.com/in/manshahussain5/",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "Pakistan",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://manshahussain-portfolio.vercel.app/#website",
      url: "https://manshahussain-portfolio.vercel.app",
      name: "Mansha Hussain Portfolio",
      publisher: {
        "@id": "https://manshahussain-portfolio.vercel.app/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased selection:bg-[#2563EB] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
