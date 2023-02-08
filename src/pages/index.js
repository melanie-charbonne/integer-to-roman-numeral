import { useState } from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import IntegerInput from '@/components/IntegerInput'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const minIntegerNumber = 1
    const maxIntegerNumber = 1000 

    const [value, setValue] = useState('')
    
    const handleChange = (e) => {
        let value = e.target.value
        if (!isNaN(value)) {
            value = parseInt(value)
            if (value > maxIntegerNumber) value = maxIntegerNumber
            if (value < minIntegerNumber) value = minIntegerNumber
            setValue(Number(value))
        } else {
            setValue('')
        }
       
    }
    return (
        <>
            <Head>
                <title>Integer to Roman Numeral</title>
                <meta
                    name='description'
                    content='Convert an Integer to Roman Numeral'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <IntegerInput value={value} handleChange={handleChange} />
            </main>
        </>
    )
}
