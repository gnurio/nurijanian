import React, { useState, useEffect } from 'react';
import VariantA from './variants/VariantA';
import VariantB from './variants/VariantB';
import VariantC from './variants/VariantC';
import VariantD from './variants/VariantD';

// Map of available variants (excluding E which user didn't like)
const variants = {
  A: VariantA,
  B: VariantB,
  C: VariantC,
  D: VariantD,
} as const;

type VariantKey = keyof typeof variants;

function App() {
  const [selectedVariant, setSelectedVariant] = useState<VariantKey | null>(null);

  useEffect(() => {
    // 1. Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const urlVariant = urlParams.get('variant')?.toUpperCase() as VariantKey;

    if (urlVariant && urlVariant in variants) {
      // URL param is valid - use it and update session
      sessionStorage.setItem('portfolio-variant', urlVariant);
      setSelectedVariant(urlVariant);
      return;
    }

    // 2. Check sessionStorage
    const sessionVariant = sessionStorage.getItem('portfolio-variant') as VariantKey;

    if (sessionVariant && sessionVariant in variants) {
      setSelectedVariant(sessionVariant);
      return;
    }

    // 3. Random selection as fallback
    const variantKeys = Object.keys(variants) as VariantKey[];
    const randomVariant = variantKeys[Math.floor(Math.random() * variantKeys.length)];
    sessionStorage.setItem('portfolio-variant', randomVariant);
    setSelectedVariant(randomVariant);
  }, []);

  // Show loading state while we determine the variant
  if (!selectedVariant) {
    return null; // or a loading spinner if you prefer
  }

  // Render the selected variant
  const SelectedComponent = variants[selectedVariant];
  return <SelectedComponent />;
}

export default App;
