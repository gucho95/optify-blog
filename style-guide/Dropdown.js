import React, { useState, useEffect } from "react";
import { Link, Icon, Text, Input } from "style-guide";
// import { useLocation } from "react-router-dom";
import { useWindowResize } from "hooks";
import { PATHS } from "common";

const Menu = ({ text, options, afterText }) => {
  // const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const { isMobile } = useWindowResize();

  // useEffect(() => {
  //   setVisible(false);
  // }, [pathname]);

  return isMobile ? (
    <div>
      <ul>
        <li onClick={() => setVisible(!visible)}>
          <span
            className="flex items-center cursor-pointer w-full"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setVisible(!visible)}
          >
            <Text.Menu>{text}</Text.Menu>
            <Icon.ArrowDown
              className={`w-4 hover:border-gray-300 border-transparent transform ml-1 ${
                visible ? "-rotate-180" : ""
              }`}
            />
          </span>
          {afterText}
        </li>
        <li
          className={`overflow-hidden transition-all duration-300 ${
            visible ? "h-auto" : "h-0"
          }`}
        >
          <ul>
            {options.map((opt, idx) => (
              <li className="text-left hover:bg-gray-200 pl-6" key={idx}>
                <Link.Internal to={opt.path}>
                  <Text.Menu
                    children={opt.text}
                    className={`block w-full py-3 ${idx ? "mt-1 " : ""}`}
                  />
                </Link.Internal>
              </li>
            ))}
          </ul>
        </li>
        {/* ) : null} */}
      </ul>
    </div>
  ) : (
    <div className="relative inline-block text-left cursor-pointer">
      <div>
        <span
          className="flex items-center hover:opacity-75"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setVisible(!visible)}
        >
          <Text.Menu>{text}</Text.Menu>
          <Icon.ArrowDown
            className={`w-4 hover:border-gray-300 border-transparent transform ml-1 ${
              visible ? "-rotate-180" : ""
            }`}
          />
        </span>
        {afterText}
      </div>
      {visible ? (
        <div className="origin-top-right absolute left-0 mt-2 w-48 shadow-layout rounded-tr-22 rounded-br-22 rounded-bl-22 overflow-hidden bg-body transition-all animate-swing duration-1000">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <ul className="w-full">
              {options.map((opt, idx) => (
                <li
                  className="text-center hover:bg-gray-200"
                  key={idx}
                  onClick={() => setVisible(false)}
                >
                  <Link.Internal to={opt.path}>
                    <Text.Menu
                      children={opt.text}
                      className="block xl:py-4 md:py-3 sm:py-2"
                    />
                  </Link.Internal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const LoggedUser = ({ user }) => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  const options = [
    { t_key: "profile", path: PATHS.PROFILE },
    { t_key: "sign_out", path: PATHS.SIGN_OUT },
  ];

  return (
    <div className="relative inline-block text-left md:ml-16 cursor-pointer animate-swing">
      <div
        className="flex items-center ml-4 border-2 border-secondary rounded-22 hover:bg-secondary hover:shadow-layout transition-all cursor-pointer select-none"
        onClick={() => setVisible(!visible)}
      >
        <Icon.Avatar />
        <Text.SM
          children={user?.firstName}
          className="xs:hidden md:block xs:px-0 md:px-3"
        />
      </div>
      {visible ? (
        <div className="origin-top-right absolute right-0 mt-2 w-48 shadow-layout rounded-tr-0 rounded-bl-22 rounded-br-22 rounded-tl-22 overflow-hidden bg-body transition-all animate-swing duration-1000">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <ul className="w-full">
              {options.map((opt, idx) => (
                <li
                  className="text-center hover:bg-gray-200"
                  key={idx}
                  onClick={() => setVisible(false)}
                >
                  <Link.Internal to={opt.path}>
                    <Text.Menu
                      children={opt.t_key}
                      className="block xl:py-4 md:py-3 xs:py-2"
                    />
                  </Link.Internal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const Dropdown = {
  Menu,
  LoggedUser,
};

export default Dropdown;
