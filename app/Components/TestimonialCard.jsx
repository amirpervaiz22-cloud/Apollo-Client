"use client";
import React, { useState } from "react";

const TestimonialCard = ({ t }) => {
  const [readMore, setreadMore] = useState(false);
  return (
    <div className="bg-white/5 backdrop-blur-sm p-10 h-fit rounded-3xl border border-white/10 hover:border-blue-500 transition-all duration-300 relative group">
      <div className="text-blue-500 mb-6 font-black text-xl">{t.metric}</div>
      <h1 className="text-blue-100 italic mb-10 text-lg leading-relaxed relative z-10">
        {readMore ? (
          <p>
            {t.quote}{" "}
            <span
              onClick={() => {
                setreadMore((e) => {
                  return !e;
                });
              }}
              className="cursor-pointer text-blue-500 hover:text-gray-100 transition-colors"
            >
              Show Less
            </span>
          </p>
        ) : (
          <p>
            {t.quote.substring(0, 130)}{" "}
            <span
              onClick={() => {
                setreadMore((e) => {
                  return !e;
                });
              }}
              className="cursor-pointer text-blue-500 hover:text-gray-100 transition-colors"
            >
              Read more...
            </span>
          </p>
        )}
      </h1>
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 bg-blue-700/50 rounded-2xl flex items-center justify-center font-bold text-xl border border-white/10">
          {t.author[0]}
        </div>
        <div>
          <p className="font-bold text-white text-lg">{t.author}</p>
          <p className="text-sm text-blue-400 font-medium">{t.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
