import { cookies } from 'next/headers';
import { getCsrfToken } from "next-auth/react";

export default async function Signout() {
  const cookieVals = cookies().getAll().find((item)=> item.name.includes('next-auth.csrf-token'))
  const csrfToken = decodeURI(cookieVals?.value || "").split('|')[0]

  return (
    <div>
      <h3>Выйти </h3>
      <p>Вы уверены, что хотите выйти</p>
      <form method="post" action="/api/auth/sigout">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Выйти</button>
        </div>
      </form>
    </div>
  )
}
