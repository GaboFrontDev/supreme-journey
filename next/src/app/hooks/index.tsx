"use client";

import { useMemo } from "react";

import { useState } from "react";
import { projectCards } from "../projects/consts";

export default function useProjectSearch() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

    const filteredMixedUses = useMemo(() => projectCards.mixedUses.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedCategory.length === 0 ? true : selectedCategory.some(category => project.categories?.includes(category)))
      ), [searchQuery, selectedCategory]);
    
      const filteredHotels = useMemo(() => projectCards.hotels.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedCategory.length === 0 ? true : selectedCategory.some(category => project.categories?.includes(category)))
      ), [searchQuery, selectedCategory]);
    
      const filteredDwellings = useMemo(() => projectCards.dwellings.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedCategory.length === 0 ? true : selectedCategory.some(category => project.categories?.includes(category)))
      ), [searchQuery, selectedCategory]);
    
      const filteredCentrosComerciales = useMemo(() => projectCards.centrosComerciales.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedCategory.length === 0 ? true : selectedCategory.some(category => project.categories?.includes(category)))
      ), [searchQuery, selectedCategory]);
    
      const filteredLatam = useMemo(() => projectCards.latam.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedCategory.length === 0 ? true : selectedCategory.some(category => project.categories?.includes(category)))
      ), [searchQuery, selectedCategory]);
    
      const filteredRetail = useMemo(() => projectCards.retail.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedCategory.length === 0 ? true : selectedCategory.some(category => project.categories?.includes(category)))
      ), [searchQuery, selectedCategory]);

    const projectsToKey = useMemo(() => {
        return {
            mixedUses: filteredMixedUses,
            hotels: filteredHotels,
            dwellings: filteredDwellings,
            centrosComerciales: filteredCentrosComerciales,
            latam: filteredLatam,
            retail: filteredRetail,
        }
    }, [filteredMixedUses, filteredHotels, filteredDwellings, filteredCentrosComerciales, filteredLatam, filteredRetail]);

    const keyToCategory = useMemo(() => {
        return {
            mixedUses: "Usos Mixtos",
            hotels: "Hoteles",
            dwellings: "Vivienda",
            centrosComerciales: "Centros Comerciales",
            latam: "LATAM",
            retail: "Retail",
        } 
    }, []);

    return {
        filteredMixedUses,
        filteredHotels,
        filteredDwellings,
        filteredCentrosComerciales,
        filteredLatam,
        filteredRetail,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        projectsToKey,
        keyToCategory,
    }
}