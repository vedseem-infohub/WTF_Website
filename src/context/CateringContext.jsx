"use client";
import React, { createContext, useContext, useState } from "react";

const CateringContext = createContext(undefined);

export function CateringProvider({ children }) {
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [selectedCity, setSelectedCityState] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Initialize city from localStorage
  React.useEffect(() => {
    const savedCity = localStorage.getItem("catering_selected_city");
    if (savedCity) {
      setSelectedCityState(savedCity);
    }
  }, []);

  const setSelectedCity = (city) => {
    setSelectedCityState(city);
    if (city) {
      localStorage.setItem("catering_selected_city", city);
    } else {
      localStorage.removeItem("catering_selected_city");
    }
  };

  const openDetailModal = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedMenuItem(null);
  };

  const value = {
    selectedOccasion,
    setSelectedOccasion,
    selectedService,
    setSelectedService,
    selectedCategory,
    setSelectedCategory,
    selectedMenuItem,
    selectedCity,
    setSelectedCity,
    isDetailModalOpen,
    openDetailModal,
    closeDetailModal,
  };

  return (
    <CateringContext.Provider value={value}>
      {children}
    </CateringContext.Provider>
  );
}

export function useCatering() {
  const context = useContext(CateringContext);
  if (context === undefined) {
    throw new Error("useCatering must be used within a CateringProvider");
  }
  return context;
}
