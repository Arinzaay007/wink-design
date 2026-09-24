import React from "react";

/** A neutral phone frame that holds arbitrary screen content. */
export function PhoneFrame({
  children,
  width = 320,
  height = 660,
  className = "",
}: {
  children: React.ReactNode;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div
      className={`phone-frame ${className}`}
      style={{ width, height }}
    >
      <div className="phone-screen">
        <div className="phone-notch" />
        {children}
      </div>
    </div>
  );
}
