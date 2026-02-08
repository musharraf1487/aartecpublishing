import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Packages from "./components/Packages";
import SocialProof from "./components/SocialProof";
import Qualification from "./components/Qualification";
import Affiliate from "./components/Affiliate";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import BookingModal from "./components/BookingModal";
import AffiliateModal from "./components/AffiliateModal";
import Testimonials from "./components/Testimonials";
// import LegacyAdvisor from "./components/LegacyAdvisor";

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAffiliateOpen, setIsAffiliateOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header onBookingClick={() => setIsBookingOpen(true)} />

      <main>
        <Hero onBookingClick={() => setIsBookingOpen(true)} />
        <Problem />
        <Solution onBookingClick={() => setIsBookingOpen(true)} />

        {/*
        <LegacyAdvisor onBookingClick={() => setIsBookingOpen(true)} />
        */}
        <SocialProof />
        <Packages onBookingClick={() => setIsBookingOpen(true)} />
        {/* <Qualification /> */}
        <Testimonials />
        <ComingSoon />
        {/* <Affiliate onApplyClick={() => setIsAffiliateOpen(true)} /> */}
        <Footer />
      </main>

      {/* Persistent UI Elements */}
      <StickyCTA
        visible={showSticky}
        onBookingClick={() => setIsBookingOpen(true)}
      />

      {/* Modals */}
      {/* <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      /> */}
      {/* <AffiliateModal
        isOpen={isAffiliateOpen}
        onClose={() => setIsAffiliateOpen(false)}
      /> */}
    </div>
  );
};

export default App;
