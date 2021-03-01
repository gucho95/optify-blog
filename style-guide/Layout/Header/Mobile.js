import React, { Fragment, useEffect } from "react";
import { Container, Icon, Link } from "style-guide";

const disableScroll = () => (document.body.style.overflowY = "hidden");
const enableScroll = () => (document.body.style.overflowY = "auto");

const Mobile = ({ pathname, openSidebar, closeSidebar }) => {
  // enable/disable scroll on collapse toggle
  const sidebarOpened = false;
  useEffect(() => {
    if (sidebarOpened) disableScroll();
    else enableScroll();
  }, [sidebarOpened]);

  // // close menu on path change
  // useEffect(() => {
  //   sidebarOpened && closeSidebar();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pathname, closeSidebar]);

  const IconToShow = sidebarOpened ? Icon.Close : Icon.Hamburger;

  return (
    <Fragment>
      <Container.Base>
        <div className="flex justify-between">
          <Link.BrandSidebar />
          <IconToShow
            onClick={sidebarOpened ? closeSidebar : openSidebar}
            className="cursor-pointer fill-primary text-7xl"
          />
        </div>
      </Container.Base>
    </Fragment>
  );
};

export default Mobile;
