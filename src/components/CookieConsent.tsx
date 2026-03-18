'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if consent is already stored
    const storedConsent = localStorage.getItem('cookie-consent');
    if (storedConsent === null) {
      setShowBanner(true);
    } else {
      setHasConsent(storedConsent === 'accepted');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setHasConsent(true);
    setShowBanner(false);
    
    // Hook for loading analytics/ads scripts
    // This would be where you initialize third-party scripts
    console.log('Consent accepted - scripts can be loaded');
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setHasConsent(false);
    setShowBanner(false);
    
    console.log('Consent declined - scripts will not be loaded');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t shadow-lg">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm">
              Diese Website verwendet Cookies für Analysen und personalisierte Werbung. 
              Durch die Nutzung stimmen Sie unserer{' '}
              <Link href="/datenschutz" className="text-emerald-600 hover:underline">
                Datenschutzerklärung
              </Link>{' '}
              zu.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hook to check consent status
export function useConsent() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookie-consent');
    setHasConsent(storedConsent === 'accepted');
  }, []);

  return hasConsent;
}
