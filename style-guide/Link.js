import React from "react";
import WORDS from "common/words/general";
import Link from "next/link";
import Img from "./Img";
import Text from "./Text";
import { PATHS } from "common";

const Brand = () => (
  <Link href={PATHS.HOMEPAGE} passHref>
    <a className="flex items-center">
      <Img.Static src="/logo.png" className="xs:w-12 xs:mr-1 md:mr-0 xl:w-16" />
      <Text.Brand children={WORDS.brand_name} />
    </a>
  </Link>
);

const BrandSidebar = () => (
  <Link href={PATHS.HOMEPAGE}>
    <a className="flex items-center xl:mr-28 md:mr-0">
      <Img.Static src="/logo.png" className="w-12 mr-1" />
      <Text.Brand children={WORDS.brand_name} />
    </a>
  </Link>
);

const Internal = ({ to = "/", children, className }) => (
  <Link href={to} children={<a children={children} className={className} />} />
);
const External = ({ path, children, ...props }) => (
  <a
    href={path}
    target="_blank"
    rel="noopener noreferrer"
    children={children}
    {...props}
  />
);

const NavLink = {
  Brand,
  Internal,
  External,
  BrandSidebar,
};
export default NavLink;
