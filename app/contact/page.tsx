import Navbar from '@/app/components/Navbar';
import { Footer } from '@/app/Footer';

export default function ContactPage() {
  return (
      <>
          <Navbar />
          <main className="wrapper">
              <div className="prose max-w-none lg:pr-[19.5rem]">
                  <h1>Контакты</h1>
                  <div>
                      <p>Мы всегда рады услышать обратную связь. Оставьте свой отзыв в <a href="https://t.me/mentaldesk">телеграмме</a>.</p>
                  </div>
              </div>
          </main>
          <Footer />
      </>
  ) 
}
 
