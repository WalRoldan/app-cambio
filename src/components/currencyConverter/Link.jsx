import React from "react";

const Link = ({ href, children, className, ...props }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-blue-600 hover:underline ${className}`}
    {...props}
  >
    {children}
  </a>
);

export default Link;
