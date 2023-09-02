'use client'

import Link from 'next/link'
import React from "react";
import { Logout, Notification, UserAvatar } from "@carbon/icons-react";
import { render } from "react-dom";
import {
  Header,
  HeaderName,
  HeaderSideNavItems,
  HeaderNavigation,
  HeaderContainer,
  HeaderMenu,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  Theme
} from "@carbon/react";

export const Nav = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
    <Theme theme="g100">
      <Header aria-label="Mental Desk">
        <SkipToContent />
        <HeaderMenuButton
          aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
          aria-expanded={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="Mental">
          [Desk]
        </HeaderName>
        <HeaderNavigation aria-label="IBM [Platform]">
          <li><Link className="cds--header__menu-item" href="/about"><span className="cds--text-truncate--end">О Проекте</span></Link></li>
          <li><Link className="cds--header__menu-item" href="/worksheets"><span className="cds--text-truncate--end">Рабочие листы</span></Link></li>
          <HeaderMenu aria-label="Профессионалам" menuLinkName="Профессионалам">
            <li><Link className="cds--header__menu-item" href="/worksheets"><span className="cds--text-truncate--end" href="/worksheets">Рабочие листы</span></Link></li>
            <li><Link className="cds--header__menu-item" href="/calculator"><span className="cds--text-truncate--end">Калькулятор</span></Link></li>
          </HeaderMenu>
          <li><Link className="cds--header__menu-item" href="/api/auth/signin"><span className="cds--text-truncate--end">Регистрация</span></Link></li>
        </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Вход" >
              <Link href="/profile">
                <UserAvatar size={20} />
              </Link>
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Уведомления" >
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Выход" >
              <Link href="/api/auth/signout?callbackUrl=/">
                <Logout size={20} />
              </Link>
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
          onSideNavBlur={onClickSideNavExpand}>
          <SideNavItems>
            <HeaderSideNavItems>
              <li><Link className="cds--header__menu-item" href="/about"><span className="cds--text-truncate--end">О Проекте</span></Link></li>
              <li><Link className="cds--header__menu-item" href="/worksheets"><span className="cds--text-truncate--end">Рабочие листы</span></Link></li>
              <HeaderMenu aria-label="Профессионалам" menuLinkName="Профессионалам">
                <li><Link className="cds--header__menu-item" href="/worksheets"><span className="cds--text-truncate--end" href="/worksheets">Рабочие листы</span></Link></li>
                <li><Link className="cds--header__menu-item" href="/calculator"><span className="cds--text-truncate--end">Калькулятор</span></Link></li>
              </HeaderMenu>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
      </Header>
    </Theme>
    )}
  />
)
