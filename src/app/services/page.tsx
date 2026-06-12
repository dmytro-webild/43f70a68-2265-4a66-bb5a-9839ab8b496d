"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

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

  <div id="services-detailed" data-section="services-detailed">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      features={[
        {
          title: "Emergency Water Heater Repair",
          description: "Rapid response to burst tanks, no hot water, and leaks. Available 24/7 for urgent situations.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990735.jpg",
          imageAlt: "Emergency water heater repair in progress",
          titleImageSrc: "http://img.b2bpic.net/free-photo/side-view-man-working-as-plumber_23-2150746294.jpg",
          buttonText: "Request Service",
          buttonHref: "/contact",
        },
        {
          title: "New Water Heater Installation",
          description: "Professional installation of traditional tank, tankless, and hybrid electric models. We help you choose the best fit.",
          imageSrc: "http://img.b2bpic.net/free-photo/service-man-adjusting-house-heating-system_1303-26545.jpg",
          imageAlt: "New water heater being installed",
          titleImageSrc: "http://img.b2bpic.net/free-photo/male-car-mechanic-working-car-repair-shop_23-2150367580.jpg",
          buttonText: "Get a Quote",
          buttonHref: "/contact",
        },
        {
          title: "Routine Maintenance & Tune-ups",
          description: "Extend your water heater's lifespan and efficiency with annual flushing, anode rod checks, and system inspections.",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-checking-car-report_329181-11812.jpg",
          imageAlt: "Technician performing water heater maintenance",
          titleImageSrc: "http://img.b2bpic.net/free-photo/man-drinking-hot-beverage-energy-crisis_23-2150061897.jpg",
          buttonText: "Schedule Maintenance",
          buttonHref: "/contact",
        },
        {
          title: "Tankless Water Heater Specialists",
          description: "Installation, repair, and maintenance for on-demand tankless systems. Enjoy endless hot water and energy savings.",
          imageSrc: "http://img.b2bpic.net/free-photo/barbells-gym_23-2147671885.jpg",
          imageAlt: "Tankless water heater installed on a wall",
          titleImageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-nurse-with-crossed-arms_23-2149341555.jpg",
          buttonText: "Explore Tankless",
          buttonHref: "/contact",
        },
      ]}
      title="Our Comprehensive Water Heating Services"
      description="Offering a full spectrum of solutions from emergency repairs to efficient installations and preventative maintenance for all types of water heaters."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Standard Tank Water Heater (40-Gallon)",
          price: "Starting at $800",
          variant: "Gas / Electric",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-looking-into-solid-fuel-boiler-working-with-biofuels-economical-heating_169016-15375.jpg",
          imageAlt: "Standard 40-gallon tank water heater",
        },
        {
          id: "p2",
          name: "Tankless Water Heater (On-Demand)",
          price: "Starting at $1200",
          variant: "Gas / Electric",
          imageSrc: "http://img.b2bpic.net/free-photo/electrical-technician-looking-focused-while-working-switchboard-with-fuses_169016-23718.jpg",
          imageAlt: "Compact tankless water heater",
        },
        {
          id: "p3",
          name: "Hybrid Electric Water Heater",
          price: "Starting at $1500",
          variant: "Heat Pump Technology",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-heat-pump-outside-home_23-2149250261.jpg",
          imageAlt: "Hybrid electric heat pump water heater",
        },
        {
          id: "p4",
          name: "Smart Water Heater",
          price: "Starting at $1100",
          variant: "Wi-Fi Enabled",
          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-smartphone-with-home-automation-app_23-2149036833.jpg",
          imageAlt: "Smart water heater with digital display",
        },
        {
          id: "p5",
          name: "Commercial Water Heater",
          price: "Custom Quote",
          variant: "High Capacity",
          imageSrc: "http://img.b2bpic.net/free-photo/sets-cooling-towers-data-center-building_1127-3438.jpg",
          imageAlt: "Large commercial water heater",
        },
        {
          id: "p6",
          name: "Water Heater Accessories",
          price: "Various",
          variant: "Parts & Upgrades",
          imageSrc: "http://img.b2bpic.net/free-photo/person-working-building-construction_23-2149184938.jpg",
          imageAlt: "Water heater parts and accessories",
        },
      ]}
      title="Top-Rated Water Heater Products"
      description="Explore our selection of energy-efficient water heaters, including traditional and tankless models, tailored for your home or business."
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
