import React from "react";
interface LayoutProps {
  className?: string;
  children?: JSX.Element | JSX.Element[] | string;
  others?: React.Attributes;
}
const Layout = ({ className, children, others }: LayoutProps): JSX.Element => {
  return (
    <section
      className={`w-full md:my-5 md:items-start flex flex-col  overflow-x-hidden ${className}`}
      {...others}
    >
      {children}
    </section>
  );
};

export default Layout;
