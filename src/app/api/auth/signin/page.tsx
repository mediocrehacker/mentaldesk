import { cookies } from 'next/headers';
import { getCsrfToken } from "next-auth/react"

export default async function Signin() {
  const cookieVals = cookies().getAll().find((item)=> item.name.includes('next-auth.csrf-token'))
  const csrfToken = decodeURI(cookieVals?.value || "").split('|')[0]

  return (
<div className="hero h-full">
  <div className="hero-content flex-col lg:flex-row-reverse w-full gap-8">
    <div className="w-full text-center lg:text-left">
      <h1 className="text-5xl font-bold">Войдите в</h1>
      <h1 className="text-5xl font-bold">Mental Desk!</h1>
      <p className="py-6">Через Яндекс ID или с помощью волшебной ссылки. Введите ваш адрес электронной почты, нажмите &ldquo;Отправить ссылку&rdquo;, а затем нажмите на ссылку в электронном письме, которое мы отправим на ваш почтовый ящик.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form action="/api/auth/signin/yandex" method="post">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <Yandex />
      </form>
      <div className="divider">ИЛИ</div>
      <form method="post" action="/api/auth/signin/email">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="form-control">

          <label className="label">
            <span className="label-text">Адрес электронной почты</span>
          </label>
          <input type="email" id="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Отправить ссылку</button>
          <label className="label">
            <span className="label-text-alt"> на мою электронную почту</span>
          </label>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

function Yandex() {
  return (
    <div className="form-control">
      <button type="submit" className="btn">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" id="yandex_circle_color_6aa7--react"><path fill="#FC3F1D" d="M2.25 12c0-5.385 4.366-9.75 9.75-9.75 5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75c-5.384 0-9.75-4.365-9.75-9.75Z"></path><path fill="#fff" d="M13.249 7.774h-.901c-1.652 0-2.52.837-2.52 2.07 0 1.394.6 2.049 1.834 2.885l1.018.686-2.928 4.376H7.566l2.627-3.914c-1.512-1.084-2.36-2.135-2.36-3.915 0-2.23 1.556-3.754 4.505-3.754h2.928V17.78h-2.016V7.774Z"></path></svg>
      <span>Войти через Яндекс ID</span>
      </button>
    </div>
  )
}
