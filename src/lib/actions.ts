// @ts-nocheck
'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from "next/cache"
import { PrismaClient } from "@prisma/client";

export async function addJob(data: FormData) {
  
    const email= data.get("email")
    const name = data.get("name")
    const job  = data.get("job")
    const prisma = new PrismaClient()
    await prisma.$connect()

    const updateUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        name: name,
        job: job,
      },
    })

    redirect('/profile')
}
