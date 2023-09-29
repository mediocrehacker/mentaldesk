import Link from 'next/link'


    // <Link href="/copyright" className="link link-hover">Правообладателям</Link> 
    // <Link href="/terms" className="link link-hover">Пользовательское соглашение</Link> 
export const Footer = () => (
<footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <svg width="50" height="50" className="fill-current" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2C15.0675 2 18.426 5.03562 18.9337 8.96494L21.1842 12.5037C21.3324 12.7367 21.3025 13.0847 20.9593 13.2317L19 14.071V17C19 18.1046 18.1046 19 17 19H15.001L15 22H6L6.00025 18.3061C6.00033 17.1252 5.56351 16.0087 4.7555 15.0011C3.65707 13.6313 3 11.8924 3 10C3 5.58172 6.58172 2 11 2ZM11 4C7.68629 4 5 6.68629 5 10C5 11.3849 5.46818 12.6929 6.31578 13.7499C7.40965 15.114 8.00036 16.6672 8.00025 18.3063L8.00013 20H13.0007L13.0017 17H17V12.7519L18.5497 12.0881L17.0072 9.66262L16.9501 9.22118C16.5665 6.25141 14.0243 4 11 4ZM10.4697 7.76256L11 8.29289L11.5303 7.76256C12.2137 7.07915 13.3218 7.07915 14.0052 7.76256C14.6886 8.44598 14.6886 9.55402 14.0052 10.2374L11 13.2426L7.9948 10.2374C7.31138 9.55402 7.31138 8.44598 7.9948 7.76256C8.67821 7.07915 9.78625 7.07915 10.4697 7.76256Z"></path></svg>
    <p>2023 © Mental Desk<br/>Инструменты для профессионалов</p>
  </aside> 
  <nav>
    <header className="footer-title">Инструменты</header> 
    <Link href="/worksheets" className="link link-hover">Рабочие листы</Link> 
    <Link href="/oprosniki" className="link link-hover">Опросники</Link> 
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
  
