import Link from "next/link"
import { Logout, Notification, UserAvatar } from "@carbon/icons-react";

export default function Navbar() {
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Mental Desk</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/about">О Проекте</Link></li>
      <li><Link href="/worksheets">Рабочие листы</Link></li>
      <li><Link href="/api/auth/signin">Регистрация</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn" href="/api/auth/signin">Вход</Link>
  </div>
</div>

  )
}

function Navbar1() {
  return (
    <div className="cds--g100 cds--layer-one">
      <header className="cds--header" aria-label="Mental Desk">
        <Link className="cds--header__name" href="/"><span>Mental [Desk]</span></Link>
        <nav className="cds--header__nav">
          <ul className="cds--header__menu-bar">
            <li><Link className="cds--header__menu-item" href="/about"><span className="cds--text-truncate--end">О Проекте</span></Link></li>
            <li><Link className="cds--header__menu-item" href="/worksheets"><span className="cds--text-truncate--end">Рабочие листы</span></Link></li>
            <li><Link className="cds--header__menu-item" href="/api/auth/signin"><span className="cds--text-truncate--end">Регистрация</span></Link></li>
          </ul>
        </nav>
        <div className="cds--header__global">
          <div className="cds--tooltip-trigger__wrapper">
            <button className="cds--btn--icon-only cds--header__action cds--btn cds--btn--primary cds--btn--icon-only cds--btn cds--btn--primary">
              <Link href="/profile">
                <UserAvatar size={20} />
              </Link>
            </button>
            <button className="cds--btn--icon-only cds--header__action cds--btn cds--btn--primary cds--btn--icon-only cds--btn cds--btn--primary">
              <Notification size={20} />
            </button>
            <button className="cds--btn--icon-only cds--header__action cds--btn cds--btn--primary cds--btn--icon-only cds--btn cds--btn--primary">
              <Link href="/api/auth/signout?callbackUrl=/">
                <Logout size={20} />
              </Link>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
