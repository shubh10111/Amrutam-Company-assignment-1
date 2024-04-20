import React from "react";

const sizes = {
  xs: "text-base font-normal",
  s: "text-xl font-medium",
  md: "text-[32px] font-normal md:text-3xl sm:text-[28px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700_01 font-nunito ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
