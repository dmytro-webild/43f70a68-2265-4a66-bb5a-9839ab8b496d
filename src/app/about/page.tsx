"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

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

  <div id="about-long" data-section="about-long">
      <TextSplitAbout
      useInvertedBackground={true}
      title="About Cal Coast Water Heating Repair"
      description={[
        "Established over two decades ago, Cal Coast Water Heating Repair has grown to become Agoura Hills' trusted partner for all water heating solutions. Our journey began with a simple mission: to provide unparalleled service, combining technical expertise with genuine care for our community.",
        "We believe in honest work, transparent pricing, and rapid response times. Our team of highly trained and certified technicians is dedicated to ensuring your home or business always has reliable hot water. We pride ourselves on building lasting relationships with our clients through exceptional service and unwavering reliability.",
      ]}
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "t1",
          name: "Michael Davis",
          role: "Lead Technician",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-car-mechanic-car-repair-shop_23-2150367539.jpg",
          imageAlt: "Michael Davis, Lead Technician",
        },
        {
          id: "t2",
          name: "Sarah Chen",
          role: "Senior Plumber",
          imageSrc: "http://img.b2bpic.net/free-photo/mature-woman-blue-t-shirt-propping-chin-hand-looking-merry_176474-32606.jpg",
          imageAlt: "Sarah Chen, Senior Plumber",
        },
        {
          id: "t3",
          name: "David Rodriguez",
          role: "Service Coordinator",
          imageSrc: "http://img.b2bpic.net/free-photo/fired-businessman-holding-his-belongings-screaming-from-frustration-office_637285-6837.jpg",
          imageAlt: "David Rodriguez, Service Coordinator",
        },
      ]}
      title="Meet Our Expert Team"
      description="Our certified technicians are the backbone of Cal Coast, bringing years of experience and a friendly approach to every service call."
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
