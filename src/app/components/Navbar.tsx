import Link from "next/link"
import { Logout, Notification, UserAvatar } from "@carbon/icons-react";

export default function Navbar() {
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
