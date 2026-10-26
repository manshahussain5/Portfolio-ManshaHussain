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
  title: "Mansha Hussain | Software Engineer & Full-Stack Developer",
  description:
    "Software Engineering graduate specializing in Full stack Web Development, Shopify stores, and AI solutions. Building responsive, scalable, and user-focused digital products.",
  keywords: [
    "Mansha Hussain",
    "Mansha Hussain Software Engineer",
    "Software Engineer",
    "Full-Stack Developer",
    "Full Stack Web Developer",
    "Shopify Developer",
    "Shopify Store Expert",
    "Web Development",
    "Next.js Developer",
    "React Developer",
    "AI-Powered Solutions",
    "Machine Learning",
    "Python AI",
    "Google Ads",
    "Meta Ads",
    "Portfolio",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Mansha Hussain", url: "https://manshahussain-portfolio.vercel.app" }],
  creator: "Mansha Hussain",
  openGraph: {
    title: "Mansha Hussain | Software Engineer & Full-Stack Developer",
    description:
      "Software Engineering graduate specializing in Full stack Web Development, Shopify stores, and AI solutions. I build responsive, scalable, and user-focused digital products.",
    url: "https://manshahussain-portfolio.vercel.app",
    siteName: "Mansha Hussain Portfolio",
    images: [
      {
        url: "/images/mansha_portrait.jpg",
        width: 1200,
        height: 1200,
        alt: "Mansha Hussain - Software Engineer & Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mansha Hussain | Software Engineer & Full-Stack Developer",
    description:
      "Software Engineering graduate specializing in Full stack Web Development, Shopify stores, and AI solutions.",
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
      jobTitle: "Software Engineer & Full-Stack Developer",
      image: "https://manshahussain-portfolio.vercel.app/images/mansha_portrait.jpg",
      sameAs: [
        "https://github.com/manshahussain5",
        "https://www.linkedin.com/in/manshahussain5/",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Minhaj University - Lahore",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Information Technology Specialist in JavaScript",
          credentialCategory: "Professional Certification",
          recognizedBy: {
            "@type": "Organization",
            name: "Certiport (A Pearson VUE Business)",
          },
          url: "https://www.certiport.com/portal/pages/credentialverification.aspx",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Full Stack MERN Web Development (Grade A+)",
          credentialCategory: "Government Vocational Certification",
          recognizedBy: {
            "@type": "GovernmentOrganization",
            name: "National Vocational and Technical Training Commission (NAVTTC)",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Python for Artificial Intelligence & Machine Learning",
          credentialCategory: "Professional Training Certification",
          recognizedBy: {
            "@type": "EducationalOrganization",
            name: "DigiSkills Training Program / Virtual University",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "IELTS Academic English Language Proficiency (CEFR B2)",
          credentialCategory: "International Language Proficiency",
          recognizedBy: {
            "@type": "Organization",
            name: "British Council",
          },
        },
      ],
      knowsAbout: [
        "Full-Stack Web Development",
        "Shopify Stores & E-Commerce Development",
        "AI-Powered Solutions & Automation",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express",
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Data Science",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
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
        "Portfolio of Mansha Hussain — Software Engineer & Full-Stack Developer specializing in Full stack Web Development, Shopify stores, and AI solutions.",
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
