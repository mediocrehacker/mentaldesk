import Link from 'next/link'


    // <Link href="/copyright" className="link link-hover">Правообладателям</Link> 
    // <Link href="/terms" className="link link-hover">Пользовательское соглашение</Link> 
export const Footer = () => (
<footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <img width="64" src="icon.png" />
    <p>2026 © Mental Desk<br/>Инструменты для профессионалов</p>
  </aside> 
  <nav>
    <header className="footer-title">Инструменты</header> 
    <Link href="/worksheets" className="link link-hover">Рабочие листы</Link> 
    <Link href="/oprosniki" className="link link-hover">Опросники</Link> 
    <Link href="/api/auth/signout" className="link link-hover">Выход</Link>
  </nav> 
  <nav>
    <header className="footer-title">О Проекте</header> 
    <Link href="/about" className="link link-hover">О Нас</Link> 
    <Link href="/contact" className="link link-hover">Контакты</Link> 
    <Link href="/jobs" className="link link-hover">Вакансии</Link> 
  </nav> 
  <nav>
    <header className="footer-title">Право</header> 
    <Link href="/disclaimer" className="link link-hover">Дисклеймер</Link> 
    <Link href="/privacy" className="link link-hover">Обработка персональных данных</Link>
  </nav>
      </footer>)
  
