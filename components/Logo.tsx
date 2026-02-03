import React from "react";

interface LogoProps {
  className?: string;
  withText?: boolean;
  textColorClass?: string;
}

const Logo: React.FC<LogoProps> = ({
  className = "w-10 h-10",
  withText = false,
  textColorClass = "text-aartec-charcoal",
}) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="" className="w-full h-full">
        {/* Left stroke (Teal) */}
        <path
          d="M30 85L50 15L65 55L50 45L30 85Z"
          fill="#1e747b"
          fillRule="evenodd"
        />
        {/* Right stroke (Amber) */}
        <path
          d="M70 85L50 15L35 55L50 45L70 85Z"
          fill="#d97e1a"
          fillRule="evenodd"
          style={{ mixBlendMode: "multiply", opacity: 0.9 }}
        />
      </svg>
      {withText && (
        <div className="flex flex-col">
          <span
            className={`font-bold text-xl tracking-tight leading-none serif ${textColorClass}`}
          >
            AARTEC
          </span>
          <span
            className={`text-[8px] tracking-[0.3em] font-medium uppercase ${textColorClass} opacity-80`}
          >
            PUBLISHING
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
