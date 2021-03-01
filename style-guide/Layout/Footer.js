import React from "react";
import { Link, Container, Text } from "style-guide";
import { SOCIALS } from "common";
import WORDS from "common/words/general";
import { BOTTOM_MENU } from "common";

const getFooterLinks = () => {
  const firstCol = BOTTOM_MENU.filter((r, idx) => idx < 3);
  const secondCol = BOTTOM_MENU.filter((r, idx) => idx >= 3);
  return { firstCol, secondCol };
};

const Footer = () => {
  const { firstCol, secondCol } = getFooterLinks();

  return (
    <footer className="shadow-layout pt-5 pb-4 xs:mt-10 md:mt-0">
      <Container.Base>
        <div className="flex">
          <Link.Brand />
        </div>
        <div className="flex flex-wrap">
          <div className="lg:w-5/12 md:w-4/12 lg:pr-32 md:pr-8 xs:w-full"></div>
          <div className="lg:w-2/12 md:w-3/12 xs:w-6/12">
            <ul className="flex flex-col">
              {firstCol.map((item) => (
                <li className="text-dark md:mt-3 xs:mt-5" key={item.text}>
                  <Link.Internal to={item.path}>
                    <Text.SM children={item.text} />
                  </Link.Internal>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-2/12 md:w-3/12 xs:w-6/12">
            <ul className="flex flex-col">
              {secondCol.map((item) => (
                <li className="text-dark md:mt-3 xs:mt-5" key={item.text}>
                  <Link.Internal to={item.path}>
                    <Text.SM children={item.text} />
                  </Link.Internal>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-2/12 md:w-2/12 xs:w-6/12">
            <ul className="flex flex-col">
              <li className="text-dark md:mt-3 xs:mt-8">
                <Text.SM children={WORDS.follow_us} />
              </li>
              <li className="flex flex-row mt-3">
                {SOCIALS.map((item) => (
                  <Link.External
                    path={item.path}
                    className="mr-4"
                    key={item.path}
                  >
                    <item.icon className=" fill-primary text-primary hover:opacity-75" />
                  </Link.External>
                ))}
              </li>
            </ul>
          </div>
          <div className="md:w-full xs:w-6/12 xs:flex xs:items-end">
            <p className="">
              <Text.XS children={WORDS.copyright} />
            </p>
          </div>
        </div>
      </Container.Base>
    </footer>
  );
};

export default Footer;
