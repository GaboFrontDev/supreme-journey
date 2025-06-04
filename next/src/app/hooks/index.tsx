'use client';
import { useState } from 'react';

export default function useProjectSearch() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
  };
}
