import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export function GoogleAdsense() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4204444212752267"
        data-ad-slot="9330505239"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
