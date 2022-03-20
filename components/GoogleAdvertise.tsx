import React, { useEffect } from "react";

declare const window: any;
export const GoogleAdvertise = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") 
      try { 
        (window.adsbygoogle = window.adsbygoogle || []).push({}); 
        console.log("Advertise is pushed"); 
      } catch (e) {
        console.error("AdvertiseError", e); 
      }

  }, []);
  if (process.env.NODE_ENV === "production") 
    return (
      <ins
        className={'adsbygoogle'}
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          display: "block",
          textAlign: "center"
        }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-5272530858446599"
        data-ad-slot="5522507613"
      />
    );
};


