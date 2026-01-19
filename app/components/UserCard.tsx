import Image from "next/image"
import Link from 'next/link'

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: User,
    pagetype: string,
}

export default function Card({ user, pagetype }: Props) {

    return (
      <div className="card w-full max-w-[400px] bg-primary text-primary-content shadow-xl not-prose">
        <div className="flex h-[126px] flex-col justify-center p-8"><h1 className="text-xl m:text-2xl">{user?.name}</h1></div>
        <div className="card-body bg-base-100">
        <h2 className="card-title text-base">{ user?.email }</h2>
          <Avatar imageSrc={user?.image || ""} />
          <div className="card-actions justify-end pt-4">
            <Link href="/user" className="btn btn-outline">Редактировать</Link>
          </div>
        </div>
      </div>
    )
}

type PropsAvatar = {
    imageSrc: string,
}

function Avatar({imageSrc}: PropsAvatar) {
  return(
    <div className="avatar">
      <div className="w-16 mt-4 mask mask-hexagon">
      <Image className="" width="96" height="96" src={imageSrc} alt="Аватар" />
      </div>
   </div>
  ) 
}
