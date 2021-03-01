import React, { useCallback } from "react";
import { useWindowResize } from "hooks";
import DesktopHeader from "./Desktop";
import MobileHeader from "./Mobile";

export const ActiveItemBorder = (
  <div className="bg-selectedItem w-8 h-1 rounded-sm" />
);
export const NotActiveItemBorder = <div className="bg-transparent w-8 h-1" />;

export const isActiveMenuItem = ({ item, pathname }) =>
  pathname === item.path ||
  (item.isDropdown && item.options.find((opt) => opt.path === pathname));

export const activeDropdownItem = ({ item, pathname, t }) => {
  const activeItem = item.options.find((opt) => opt.path === pathname);
  const activeItemTkey = activeItem?.t_key;
  return activeItemTkey;
};

const Header = () => {
  // hooks
  const { isMobile } = useWindowResize();
  // const { pathname } = useLocation();
  // actions
  const openSignInModal = () => alert("sign in ");
  const openSignUpModal = () => alert("sign up ");
  const openSidebar = () => alert("open sidebar");
  const closeSidebar = useCallback(() => alert("close sidebar"), []);

  const childProps = {
    openSidebar,
    closeSidebar,
    isActiveMenuItem: (item) => isActiveMenuItem({ item }),
    activeDropdownItem: (item) => activeDropdownItem({ item }),
    openSignInModal,
    openSignUpModal,
    user: null,
  };

  return (
    <header className="py-4 shadow-layout rounded-br-22 bg-white rounded-bl-22 sticky top-0 z-header">
      {isMobile ? (
        <MobileHeader {...childProps} />
      ) : (
        <DesktopHeader {...childProps} />
      )}
    </header>
  );
};

export default Header;
