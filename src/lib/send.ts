// @ts-nocheck
'use server'

import { redirect } from 'next/navigation';
// import * as FormData from 'form-data';
import Mailgun from 'mailgun.js';
import fs from 'fs';

export async function sendPDF(data: FormData) {
  const fromEmail = process.env.EMAIL_FROM;

  const emailTitle = data.get("emailTitle")
  const clientName = data.get("clientName")
  const clientEmail = data.get("clientEmail")
  const pdfSrc = data.get("pdfSrc")
  const pdfName= data.get("pdfName")

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'coddeys',
    key: process.env.MAILGUN_API_KEY,
    url: 'https://api.eu.mailgun.net'
  }); 

  let messageParams = {
    from: fromEmail,
    to: [clientEmail],
    subject: emailTitle,
    text: emailTitle,
    html: emailTitle
  }

  const buf= await fetch(pdfSrc).then( resp => resp.arrayBuffer())
  const pdf = Buffer.from(buf)

  const file = {
    filename: "test.pdf",
    data: pdf
  };

  messageParams.attachment = file;

  mg.messages.create("mg.mentaldesk.ru", messageParams).then(msg => console.log(msg)).catch(err => console.error(err));
}
