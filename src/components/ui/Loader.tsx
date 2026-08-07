"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#08090B",
        animation: "khsFadeOut 0.5s ease-in-out 1.2s forwards",
        pointerEvents: "none",
      }}
    >
      <style>{`@keyframes khsFadeOut { to { opacity: 0; visibility: hidden; } }`}</style>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <span style={{ fontFamily: "sans-serif", fontSize: "24px", fontWeight: 600, color: "#F5F5F7" }}>
          KH<span style={{ color: "#E5283F" }}>Solutions</span>
        </span>
      </div>
    </div>
  );
}