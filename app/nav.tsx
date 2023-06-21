'use client'

import React from "react";
import { Notification, Login} from "@carbon/icons-react";
import { render } from "react-dom";
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  Theme
} from "@carbon/react";

export const Nav = () => (
  <div className="container">
    <Theme theme="g100">
      <Header aria-label="Mental Desk">
        <HeaderName href="#" prefix="Mental">
          [Desk]
        </HeaderName>
        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem href="#">О Проекте</HeaderMenuItem>
          <HeaderMenuItem href="#">Рабочие листы</HeaderMenuItem>
          <HeaderMenu aria-label="Link 4" menuLinkName="Профессионалам">
            <HeaderMenuItem href="#">Рабочие Листы</HeaderMenuItem>
            <HeaderMenuItem href="#">Калькулятор</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
            <Notification />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Login" onClick={() => {}}>
            <Login />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </Theme>
  </div>
);

