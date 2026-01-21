import React from "react";

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  dark = false,
}) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      <h2
        className={`text-3xl md:text-5xl font-bold tracking-tight mb-6 ${dark ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-3xl ${centered ? "mx-auto" : ""} ${dark ? "text-blue-100" : "text-slate-600"} leading-relaxed`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`h-1.5 w-24 bg-blue-600 mt-8 rounded-full ${centered ? "mx-auto" : ""}`}
      ></div>
    </div>
  );
};

export default SectionHeading;
