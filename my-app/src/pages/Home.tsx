
import React from "react";
import Layout from "../components/Layout/Layout";
import FlowersDecoration from "../components/FlowersDecoration/FlowersDecoration";
import Banner from "../components/Banner/Banner";
import AboutSection from "../components/AboutSection/AboutSection";
import CatalogSection from "../components/CatalogSection/CatalogSection";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
import ContactsSection from "../components/ContactsSection/ContactsSection";

export default function Home() {
  return (
    <Layout>
      <FlowersDecoration />
      <Banner />
      <AboutSection />
      <CatalogSection />
      <ReviewsSection />
      <ContactsSection />
    </Layout>
  );
}