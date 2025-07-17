import React from "react";

const Logo = ({ variant = "default", size = "medium" }) => {
  const logoSizes = {
    small: { width: "80px", fontSize: "14px" },
    medium: { width: "120px", fontSize: "18px" },
    large: { width: "160px", fontSize: "24px" },
  };

  const logoStyle = {
    display: "inline-block",
    ...logoSizes[size],
  };

  const bubbleStyle = {
    background: variant === "white" ? "#ffffff" : "#f8f8f8",
    borderRadius: "25px",
    padding: "8px 16px",
    position: "relative",
    display: "inline-block",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  };

  const textStyle = {
    color: "#422680",
    fontWeight: "bold",
    fontSize: logoSizes[size].fontSize,
    margin: 0,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const tailStyle = {
    position: "absolute",
    bottom: "-8px",
    left: "20px",
    width: 0,
    height: 0,
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderTop: `10px solid ${variant === "white" ? "#ffffff" : "#f8f8f8"}`,
  };

  return (
    <div style={logoStyle}>
      <div style={bubbleStyle}>
        <span style={textStyle}>Indika</span>
        <div style={tailStyle}></div>
      </div>
    </div>
  );
};

export default Logo;
