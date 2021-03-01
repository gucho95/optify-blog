import React from "react";
import { Container, Button, Text, Dropdown, Link } from "style-guide";
import { ActiveItemBorder, NotActiveItemBorder } from "./index";
import { TOP_MENU } from "common";

const Desktop = ({
  isActiveMenuItem,
  activeDropdownItem,
  openSignInModal,
  openSignUpModal,
  user,
}) => {
  return (
    <Container.Base>
      <div className="flex items-center justify-between">
        <div>
          <Link.Brand />
        </div>
        <div className="flex">
          <nav className="flex">
            <ul className="flex items-center">
              {TOP_MENU.map((item) => (
                <li
                  className="text-dark md:mr-3 lg:mr-6 xl:mr-8 select-none"
                  key={item.text}
                >
                  {item.isDropdown ? (
                    <Dropdown.Menu text={item.text} options={item.options} />
                  ) : (
                    <Link.Internal to={item.path}>
                      <Text.Menu
                        children={item.text}
                        className={`select-none hover:opacity-75`}
                      />
                      {isActiveMenuItem(item)
                        ? ActiveItemBorder
                        : NotActiveItemBorder}
                    </Link.Internal>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {user ? (
            <Dropdown.LoggedUser user={user} />
          ) : (
            <div className="flex ml-4">
              <Button.SignIn children="Log in" onClick={openSignInModal} />
              <div className="xl:px-2 md:px-1" />
              <Button.SignUp children="Sign up" onClick={openSignUpModal} />
            </div>
          )}
        </div>
      </div>
    </Container.Base>
  );
};

export default Desktop;
