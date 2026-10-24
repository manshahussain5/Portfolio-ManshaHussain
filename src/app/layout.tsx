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
  title: "Mansha Hussain | Data Scientist & Full Stack Developer",
  description:
    "Portfolio of Mansha Hussain — Data Scientist & Full Stack Developer specializing in modern data science, machine learning solutions, Next.js, React, and Python.",
  keywords: [
    "Mansha Hussain",
    "Data Scientist",
    "Full Stack Developer",
    "Data Science",
    "Machine Learning",
    "Python",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Mansha Hussain" }],
  creator: "Mansha Hussain",
  openGraph: {
    title: "Mansha Hussain | Data Scientist & Full Stack Developer",
    description:
      "I build intelligent machine learning systems, high-performance web applications, and data science powered solutions that solve real-world problems.",
    url: "https://manshahussain-portfolio.vercel.app",
    siteName: "Mansha Hussain Portfolio",
    images: [
      {
        url: "/images/mansha_portrait.jpg",
        width: 1200,
        height: 1200,
        alt: "Mansha Hussain - Data Scientist & Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mansha Hussain | Data Scientist & Full Stack Developer",
    description:
      "Data Scientist & Full Stack Developer building intelligent ML systems, scalable web apps, and data-driven solutions.",
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
      jobTitle: "Data Scientist & Full Stack Developer",
      image: "https://manshahussain-portfolio.vercel.app/images/mansha_portrait.jpg",
      sameAs: [
        "https://github.com/manshahussain5",
        "https://www.linkedin.com/in/manshahussain5/",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Minhaj University - Lahore",
      },
      knowsAbout: [
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "Python",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Deep Learning",
        "Google Ads",
        "Meta Ads",
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
      description:
        "Portfolio of Mansha Hussain — Data Scientist & Full Stack Developer specializing in modern data science, machine learning solutions, Next.js, React, and Python.",
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
      <head suppressHydrationWarning>
        <script
          id="anti-bis"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var o=new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){if(ms[i].attributeName==='bis_skin_checked'){ms[i].target.removeAttribute('bis_skin_checked');}}});o.observe(document.documentElement,{attributes:true,subtree:true,attributeFilter:['bis_skin_checked']});}catch(e){}})();`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased selection:bg-[#2563EB] selection:text-white"
      >
        <script
          id="structured-data-jsonld"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
