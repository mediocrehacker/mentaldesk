// @ts-nocheck
'use client'

import { branding } from "../../../../lib/branding"
import { redirect } from 'next/navigation'
import { options } from '../../../api/auth/[...nextauth]/options'
import { useRouter } from 'next/router'
import { use, useState } from 'react'

export default function BrandingPage({
  params,
}:{
  params: { slug: string }
})
{
  if (true){
  // const data = tex(params.slug);
  // const uri = 'data:application/pdf;base64,' + data;
  // <object type="application/pdf" data={uri} width="1056" height="1496"></object>

  return (
    <BrandingPdf slug={params.slug} />
  )
  } else {
    return redirect("/api/auth/signin")
  }
}

type Props = {
    slug: string,
    uri: string,
}

const delay = ms => new Promise(res => setTimeout(res, ms));
  
function BrandingPdf({slug} : Props) {
  const [formData, setFormData] = useState({
    clinicName : 'Название Вашей Клиники',
    therapist : 'Фамилия Имя Специалиста',
    email : 'email@mail.ru',
    phone : '+7-999-333-22-11',
    client : 'Фамилия Имя Клиента',
    uri : 'asdfsafd',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    let brandingParams = {
      cls: "27742bb317dffe1fece3003ec7b2fe8ce0c66b8b62dbf1bcbc19ec90c26bc235",
      tex: "https://raw.githubusercontent.com/mediocrehacker/mentaldesk/main/src/app/content/worksheets/povedencheskij-ehksperiment-list/worksheet.tex",
      customization: formData
    }
  
    const endpoint = "45.91.8.168"
    // const endpoint = "api.mentaldesk.ru"
    // two times to bring background
    const body = await fetch(`http://${endpoint}:8081/api/v1/conversion`, {
      method: "POST",
      body: JSON.stringify(brandingParams),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((resp) => resp.json())
  
    const fileName = body?.contents?.fileName;
    const pdfLink = `http://${endpoint}:8081/api/v1/static/${fileName}`

    await delay(2000);
    const buf = await fetch(pdfLink).then( resp => resp.arrayBuffer())
    const data = Buffer.from(buf).toString("base64");
    
    formData.uri = 'data:application/pdf;base64,' + data;

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return(
    <div className="container">
    <div className="flex flex-col gap-8">
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex justify-between gap-24">
        <div className="w-3/5 flex flex-row">
        <div className="avatar self-center">
        <div className="w-24 rounded">
        <svg width="70" height="70" className="fill-current" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2C15.0675 2 18.426 5.03562 18.9337 8.96494L21.1842 12.5037C21.3324 12.7367 21.3025 13.0847 20.9593 13.2317L19 14.071V17C19 18.1046 18.1046 19 17 19H15.001L15 22H6L6.00025 18.3061C6.00033 17.1252 5.56351 16.0087 4.7555 15.0011C3.65707 13.6313 3 11.8924 3 10C3 5.58172 6.58172 2 11 2ZM11 4C7.68629 4 5 6.68629 5 10C5 11.3849 5.46818 12.6929 6.31578 13.7499C7.40965 15.114 8.00036 16.6672 8.00025 18.3063L8.00013 20H13.0007L13.0017 17H17V12.7519L18.5497 12.0881L17.0072 9.66262L16.9501 9.22118C16.5665 6.25141 14.0243 4 11 4ZM10.4697 7.76256L11 8.29289L11.5303 7.76256C12.2137 7.07915 13.3218 7.07915 14.0052 7.76256C14.6886 8.44598 14.6886 9.55402 14.0052 10.2374L11 13.2426L7.9948 10.2374C7.31138 9.55402 7.31138 8.44598 7.9948 7.76256C8.67821 7.07915 9.78625 7.07915 10.4697 7.76256Z"></path></svg>
        </div>
        </div>
      <div className="w-full flex flex-col gap-2">
      <div className="form-control w-full">
        <input
          type="text"
          name="clinicName"
          id="clinicName"
          className="input input-bordered input-sm w-full"
          value={formData.clinicName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-control w-full">
        <input
          type="text"
          name="therapist"
          id="therapist"
          className="input input-bordered input-sm w-full"
          value={formData.therapist}
          onChange={handleInputChange}
        />
      </div>
        <input
          type="text"
          name="email"
          id="email"
          className="input input-bordered input-xs w-full"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          id="phone"
          className="input input-bordered input-xs w-full"
          value={formData.phone}
          onChange={handleInputChange}
        />
        </div>
      </div>
      <div className="w-2/5 flex flex-col self-center gap-4">
      <div className="form-control w-full">
      <label className="label">
      <span className="label-text">Клиент:</span>
      </label>
        <input
          type="text"
          name="client"
          id="client"
          className="input input-bordered input-sm w-full"
          value={formData.client}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <div className="form-control ">
          <button type="submit" className="btn btn-primary">Обновить</button>
          <label className="label">
            <span className="label-text-alt"></span>
          </label>
        </div>
      </div>
      </div>
      </div>
    </form>
    <object type="application/pdf" data={formData.uri} width="1056" height="1496"></object>
    </div>
    </div>
  )
}

function tex(slug) {
  const pdfLink = `https://raw.githubusercontent.com/mediocrehacker/mentaldesk/main/src/app/content/worksheets/${slug}/worksheet.pdf`
  const buf = use(fetch(pdfLink).then( resp => resp.arrayBuffer()))
  const pdf = Buffer.from(buf).toString("base64");

  return pdf
}

function Greeting({ pdf }) {
  return createElement(
    'h1',
    { className: '' },
    '1asdf'
  );
}

