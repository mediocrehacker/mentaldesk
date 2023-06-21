"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@carbon/react';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Программное обеспечение для проведения психологических опросников</h1>
        <h3>Отслеживание результатов, информирование о лечении Для психиатрических служб, психологов, психиатров и консультантов</h3>
        <Button>Бесплатная регистрация</Button>
      </div>
    </main>
  )
}
