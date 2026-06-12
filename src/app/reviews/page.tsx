"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="large"
        background="grid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "Reviews",
          id: "/reviews",
        },
        {
          name: "About Us",
          id: "/about",
        },
        {
          name: "FAQ",
          id: "/faq",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Cal Coast Water Heating Repair"
      button={{
        text: "Schedule Service",
        href: "/contact",
      }}
    />
  </div>

  <div id="reviews-all" data-section="reviews-all">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Caleb Morgan",
          role: "Homeowner",
          company: "Agoura Hills",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/old-woman-confronting-alzheimer-disease_23-2149043724.jpg",
        },
        {
          id: "2",
          name: "Ruby Hawthorne",
          role: "Homeowner",
          company: "Agoura Hills",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-wearing-red-bow-tie_1298-359.jpg",
        },
        {
          id: "3",
          name: "Shontel Woodard",
          role: "Local Guide",
          company: "Agoura Hills",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-art-composition-with-happy-female-model_23-2147868279.jpg",
        },
        {
          id: "4",
          name: "John Pinson",
          role: "Homeowner",
          company: "Agoura Hills",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-friends-with-drinks_23-2149128353.jpg",
        },
        {
          id: "5",
          name: "Daniel Davis",
          role: "Homeowner",
          company: "Agoura Hills",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-video-chats-records-vlog-while-sits-kitchen-floor-cute-girl-takes-selfie_1258-200045.jpg",
        },
        {
          id: "6",
          name: "Scarlett Foster",
          role: "Homeowner",
          company: "Agoura Hills",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg",
        },
      ]}
      title="Customer Stories: Why Agoura Hills Chooses Us"
      description="Read unfiltered feedback from satisfied clients across Agoura Hills and surrounding communities who rely on Cal Coast."
    />
  </div>

  <div id="reviews-metrics" data-section="reviews-metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Commitment to Excellence"
      tag="Customer Satisfaction Guaranteed"
      metrics={[
        {
          id: "m1",
          value: "98%",
          description: "Customer Satisfaction Rate",
        },
        {
          id: "m2",
          value: "500+",
          description: "Local Families Served Annually",
        },
        {
          id: "m3",
          value: "20+",
          description: "Years of Local Expertise",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Water Heater Repair",
              href: "/services",
            },
            {
              label: "Installation",
              href: "/services",
            },
            {
              label: "Maintenance",
              href: "/services",
            },
            {
              label: "Tankless Heaters",
              href: "/services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Reviews",
              href: "/reviews",
            },
            {
              label: "Contact Us",
              href: "/contact",
            },
            {
              label: "FAQ",
              href: "/faq",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "Service Areas",
              href: "#",
            },
            {
              label: "Emergency Tips",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Cal Coast Water Heating Repair"
      copyrightText="© 2024 Cal Coast Water Heating Repair. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
