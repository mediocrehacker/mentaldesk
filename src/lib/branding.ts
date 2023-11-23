// @ts-nocheck
'use client'

import { redirect } from 'next/navigation';

export async function branding(data: any) {
  const clinicName = data.get("clinicName") 
  const therapist = data.get("therapist")
  const email = data.get("email")
  const phone = data.get("phone")
  const client = data.get("client")

  let brandingParams = {
    cls: "27742bb317dffe1fece3003ec7b2fe8ce0c66b8b62dbf1bcbc19ec90c26bc235",
    tex: "https://raw.githubusercontent.com/mediocrehacker/mentaldesk/main/src/app/content/worksheets/povedencheskij-ehksperiment-list/worksheet.tex",
    customization: { clinicName : clinicName,
                     therapist : therapist,
                     email : email,
                     phone : phone,
                     client : client,
                   }
  }

  // const url = "45.91.8.168"
  const endpoint = "api.mentaldesk.ru"

  // two times to bring background
  const body_ = await fetch(`http://${endpoint}:8081/api/v1/conversion`, {
    method: "POST",
    body: JSON.stringify(brandingParams),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((resp) => resp.json())
  const body = await fetch(`http://${endpoint}:8081/api/v1/conversion`, {
    method: "POST",
    body: JSON.stringify(brandingParams),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((resp) => resp.json())


  const fileName = body?.contents?.fileName;
  const pdfLink = `http://api.mentaldesk.ru:8081/api/v1/static/${fileName}`

  const buf = await fetch(pdfLink).then( resp => resp.arrayBuffer())
  const pdf = Buffer.from(buf).toString("base64");
  return pdf
}
