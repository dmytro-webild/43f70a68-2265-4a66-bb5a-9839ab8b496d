"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

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

  <div id="faq-main" data-section="faq-main">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How often should I have my water heater serviced?",
          content: "We recommend annual maintenance for most water heaters to ensure optimal performance, extend lifespan, and prevent unexpected breakdowns. This includes flushing the tank, checking the anode rod, and inspecting all components.",
        },
        {
          id: "q2",
          title: "What are the signs I need water heater repair?",
          content: "Common signs include no hot water, inconsistent water temperature, strange noises (rumbling, popping), leaks around the tank's base, rusty or discolored hot water, and foul-smelling hot water. If you notice any of these, call us immediately.",
        },
        {
          id: "q3",
          title: "What's the difference between a tankless and a traditional water heater?",
          content: "Traditional tank heaters store and pre-heat a limited supply of water. Tankless heaters heat water on demand, providing a continuous supply and saving energy. Tankless systems typically have a higher upfront cost but lower operating costs.",
        },
        {
          id: "q4",
          title: "Do you offer emergency water heater services?",
          content: "Yes, we provide 24/7 emergency repair services for critical water heater issues. Don't hesitate to call us anytime, day or night, for fast and reliable assistance in Agoura Hills.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about water heater repair, installation, and maintenance services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="faq-contact-cta" data-section="faq-contact-cta">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Still Have Questions? We're Here to Help!"
      description="If your question isn't answered above, please reach out to our friendly team for personalized assistance and expert advice."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Type your question here...",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/call-center-team-agents-wearing-headset-assisting-customers_482257-125962.jpg"
      imageAlt="Customer service answering calls"
      mediaAnimation="none"
      mediaPosition="right"
      buttonText="Ask Your Question"
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
