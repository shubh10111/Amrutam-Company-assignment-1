import React from "react";

const sizes = {
  s: "text-base font-semibold",
  md: "text-xl font-bold",
  xs: "text-sm font-semibold",
  lg: "text-[32px] font-bold md:text-3xl sm:text-[28px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-green-800 font-nunito ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
