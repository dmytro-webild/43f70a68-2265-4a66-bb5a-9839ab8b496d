"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Clock, FileText, ShieldCheck, Star, Wrench } from "lucide-react";

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

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      imagePosition="right"
      title="Fast, Reliable Water Heating Repair in Agoura Hills"
      description="Expert technicians available same-day. Trusted by 500 local families. Call now for a free estimate."
      buttons={[
        {
          text: "Schedule Service Today",
          href: "/contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/service-man-adjusting-house-heating-system_1303-26529.jpg"
      imageAlt="Technician repairing a water heater"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-view-attractive-adult-male-with-beard-sitting-open-terrace-typing-laptop-looking-screen-with-interested-smile-using-wi-fi-communicate-online-while-away-vacations_273609-6597.jpg",
          alt: "Satisfied customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-home_23-2149412549.jpg",
          alt: "Happy homeowner",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",
          alt: "Pleased client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-travelling-by-city-bus_23-2148958101.jpg",
          alt: "Local resident",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-pointing-with-index-figners-camera-happy-cheerful-smiling-broadly_141793-55370.jpg",
          alt: "Customer profile",
        },
      ]}
      avatarText="Serving Agoura Hills for 20+ Years"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Emergency Repairs",
          icon: Wrench,
        },
        {
          type: "text-icon",
          text: "Certified Technicians",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Same-Day Service",
          icon: Clock,
        },
        {
          type: "text-icon",
          text: "Free Estimates",
          icon: FileText,
        },
        {
          type: "text-icon",
          text: "Customer Satisfaction",
          icon: Star,
        },
      ]}
    />
  </div>

  <div id="about-home" data-section="about-home">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Your Local Water Heating Experts in Agoura Hills"
      description={[
        "At Cal Coast Water Heating Repair, we've proudly served Agoura Hills homeowners and businesses for over two decades. Our commitment to prompt, reliable, and transparent service ensures your comfort and peace of mind.",
        "We understand the urgency of water heater issues. Our certified technicians are equipped with the latest tools and expertise to handle any repair, installation, or maintenance need efficiently and effectively.",
      ]}
    />
  </div>

  <div id="features-overview" data-section="features-overview">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Emergency Repairs",
          description: "Fast response for unexpected breakdowns to restore your hot water quickly.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-working-as-plumber_23-2150746421.jpg",
          imageAlt: "Technician performing emergency repair",
          titleImageSrc: "http://img.b2bpic.net/free-photo/side-view-man-working-as-plumber_23-2150746309.jpg",
          buttonText: "Learn More",
          buttonHref: "/services",
        },
        {
          title: "New Installations",
          description: "Expert installation of traditional and tankless water heaters for optimal performance.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-autonomous-heating-system-boiler-room_169016-51929.jpg",
          imageAlt: "Installing a new water heater",
          titleImageSrc: "http://img.b2bpic.net/free-photo/worker-repairing-water-heater_23-2149334232.jpg",
          buttonText: "Learn More",
          buttonHref: "/services",
        },
        {
          title: "Routine Maintenance",
          description: "Preventative services to extend the life of your water heater and ensure efficiency.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-working-as-plumber_23-2150746394.jpg",
          imageAlt: "Performing routine water heater maintenance",
          titleImageSrc: "http://img.b2bpic.net/free-photo/worker-repairing-water-heater_23-2149334228.jpg",
          buttonText: "Learn More",
          buttonHref: "/services",
        },
      ]}
      title="Comprehensive Water Heating Solutions"
      description="From emergency repairs to routine maintenance and new installations, we cover all your water heating needs with professionalism and care."
    />
  </div>

  <div id="testimonials-home" data-section="testimonials-home">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Caleb Morgan",
          role: "Homeowner",
          company: "Agoura Hills",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-cheerful-woman-enjoying-weekend_1262-20550.jpg",
        },
        {
          id: "2",
          name: "Ruby Hawthorne",
          role: "Homeowner",
          company: "Agoura Hills",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-smiling-cheerfully-pointin-with-thumbs-back_141793-55345.jpg",
        },
        {
          id: "3",
          name: "Shontel Woodard",
          role: "Local Guide",
          company: "Agoura Hills",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/impressed-girl-admiring-great-music-taste-friend-showing-thumbs-up-smiling-excited-astoni_1258-142264.jpg",
        },
        {
          id: "4",
          name: "John Pinson",
          role: "Homeowner",
          company: "Agoura Hills",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-woman-holding-her-her_23-2148631401.jpg",
        },
        {
          id: "5",
          name: "Daniel Davis",
          role: "Homeowner",
          company: "Agoura Hills",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-african-american-woman-smiling-cheerful-friendly-face-laughing-confident_839833-29956.jpg",
        },
        {
          id: "6",
          name: "Scarlett Foster",
          role: "Homeowner",
          company: "Agoura Hills",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/thoughtful-caucasian-man-looking-aside-empty-space-thinking-standing-pensive-blue-backgrou_1258-152564.jpg",
        },
      ]}
      title="What Our Agoura Hills Customers Say"
      description="Hear directly from local homeowners and businesses who trust us with their water heating needs."
    />
  </div>

  <div id="social-proof-home" data-section="social-proof-home">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Local Families",
        "Property Managers",
        "Small Businesses",
        "Residential Clients",
        "Commercial Clients",
        "Real Estate Partners",
        "Community Organizations",
      ]}
      title="Trusted by Hundreds of Local Families"
      description="Our commitment to quality service has earned us the trust of the Agoura Hills community and surrounding areas."
    />
  </div>

  <div id="contact-home" data-section="contact-home">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Request a Free Estimate Today"
      description="Contact us for prompt, reliable water heater repair, installation, or maintenance services. We're here to help!"
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
        {
          name: "phone",
          type: "tel",
          placeholder: "Your Phone Number",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Describe your water heater issue or service request...",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/young-businesswoman-relaxing-while-using-mobile-phone-listening-music-earphones-office_637285-5392.jpg"
      imageAlt="Customer service representative on the phone"
      mediaAnimation="none"
      mediaPosition="left"
      buttonText="Send Message"
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
