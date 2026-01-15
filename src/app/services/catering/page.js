"use client";
import React from "react";
import Header from "../../../components/sections/Header";
import Footer from "../../../components/sections/Footer";
import CateringPage from "../../../components/sections/CateringPage";

export default function Catering() {
  return (
    <div className="overflow-hidden">
      <Header />
      <CateringPage />
      <Footer />
    </div>
  );
}
