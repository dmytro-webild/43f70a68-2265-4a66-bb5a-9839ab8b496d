import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Cal Coast Water Heating Repair | Agoura Hills Expert Services',
  description: 'Fast, reliable water heating repair, installation, and maintenance services in Agoura Hills. Certified technicians for all your residential and commercial needs. Get a free estimate!',
  keywords: ["water heater repair Agoura Hills, water heating installation, tankless water heater, emergency plumbing, hot water repair, Agoura Hills plumber, water heater maintenance"],
  openGraph: {
    "title": "Cal Coast Water Heating Repair | Agoura Hills Expert Services",
    "description": "Fast, reliable water heating repair, installation, and maintenance services in Agoura Hills. Certified technicians for all your residential and commercial needs.",
    "url": "https://www.calcoastwaterheating.com",
    "siteName": "Cal Coast Water Heating Repair",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/service-man-adjusting-house-heating-system_1303-26529.jpg",
        "alt": "Technician repairing a water heater"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Cal Coast Water Heating Repair | Agoura Hills Expert Services",
    "description": "Fast, reliable water heating repair, installation, and maintenance services in Agoura Hills.",
    "images": [
      "http://img.b2bpic.net/free-photo/service-man-adjusting-house-heating-system_1303-26529.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
