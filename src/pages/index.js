import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import IntegerInput from '@/components/IntegerInput'
import RomanNumeralOutput from '@/components/RomanNumeralOutput'
import convertToRoman  from '@/utils/convertToRoman';

export default function Home() {
    const minIntegerNumber = 1
    const maxIntegerNumber = 1000 

    const [value, setValue] = useState('')
    const [outputRomanValue, setOutputRomanValue] = useState('')
    
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
        setOutputRomanValue(convertToRoman(value))    
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
                <RomanNumeralOutput outputRomanValue={outputRomanValue} />
            </main>
        </>
    )
}
