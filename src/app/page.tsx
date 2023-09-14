import Link from "next/link"

export default async function Home() {
  return (
    <div className="hero h-full g-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Привет</h1>
          <p className="py-6">Программное обеспечение для проведения психологических опросников</p>
          <Link href="/api/auth/signin" className="btn btn-primary">Начните использовать бесплатно!</Link>
        </div>
      </div>
   </div>
  )
}
