"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
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
          name: "Home",          id: "/"},
        {
          name: "Services",          id: "/services"},
        {
          name: "Reviews",          id: "/reviews"},
        {
          name: "About Us",          id: "/about"},
        {
          name: "FAQ",          id: "/faq"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="Cal Coast Water Heating Repair"
      button={{
        text: "Schedule Service",        href: "/contact"}}
    />
  </div>

  <div id="contact-page-form" data-section="contact-page-form">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get Your Free Estimate & Schedule Service"
      description="Fill out the form below to connect with a Cal Coast expert. We offer fast, reliable service across Agoura Hills.\n\nAddress: 5695 Kanan Rd, Agoura Hills, CA 91301\nPhone: (818) 724-7814\nHours: Open 24 hours"
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Your Phone Number",          required: true,
        },
        {
          name: "address",          type: "text",          placeholder: "Your Address (Optional)"},
      ]}
      textarea={{
        name: "message",        placeholder: "Tell us about your water heating needs...",        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/customer-service-cute-woman-white-shirt-with-headset-computer-looking-up-thinking_140725-164358.jpg"
      imageAlt="Clean home interior with contact form elements"
      mediaAnimation="none"
      mediaPosition="right"
      buttonText="Submit Request"
    />
  </div>

  <div id="contact-page-metrics" data-section="contact-page-metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Why Choose Cal Coast Water Heating Repair?"
      tag="Reliability & Expertise You Can Trust"
      metrics={[
        {
          id: "cm1",          value: "24/7",          description: "Emergency Service Availability"},
        {
          id: "cm2",          value: "Certified",          description: "Expert Technicians"},
        {
          id: "cm3",          value: "Transparent",          description: "Upfront Pricing"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Water Heater Repair",              href: "/services"},
            {
              label: "Installation",              href: "/services"},
            {
              label: "Maintenance",              href: "/services"},
            {
              label: "Tankless Heaters",              href: "/services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "/about"},
            {
              label: "Reviews",              href: "/reviews"},
            {
              label: "Contact Us",              href: "/contact"},
            {
              label: "FAQ",              href: "/faq"},
          ],
        },
        {
          title: "Resources",          items: [
            {
              label: "Blog",              href: "#"},
            {
              label: "Service Areas",              href: "#"},
            {
              label: "Emergency Tips",              href: "#"},
            {
              label: "Privacy Policy",              href: "#"},
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