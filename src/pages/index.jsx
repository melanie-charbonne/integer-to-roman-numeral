import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import IntegerInput from '@/components/IntegerInput'
import RomanNumeralOutput from '@/components/RomanNumeralOutput'
import convertToRoman from '@/utils/convert-to-roman'
import ErrorMessage from '@/components/ErrorMessage'

export default function IntegerToRomanNumeralConverter() {
    const [value, setValue] = useState('')
    const [romanValue, setRomanValue] = useState('')
    const [isEmptyValue, setIsEmptyValue] = useState(true)
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        let userInputValue = e.target.value
        let parsedUserInputValue = parseInt(userInputValue)

        setValue(userInputValue)

        if (userInputValue == '') {
            setError(false)
            setIsEmptyValue(true)
            return
        }

        if (
            Number.isInteger(Number(userInputValue)) &&
            isValidValue(parsedUserInputValue)
        ) {
            setRomanValue(convertToRoman(parsedUserInputValue))
            setError(false)
            setIsEmptyValue(false)
        } else {
            setError(true)
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
                <div
                    className={styles.wrapper}
                    style={error ? { paddingBottom: 0 } : {}}
                >
                    <h1> Integer to Roman Numeral Calculator </h1>
                    <IntegerInput
                        value={value}
                        onChangeHandler={handleChange}
                    />
                    {!error && !isEmptyValue && (
                        <RomanNumeralOutput romanValue={romanValue} />
                    )}
                    {error && <ErrorMessage />}
                </div>
            </main>
        </>
    )
}
const isValidValue = (value) => {
    const MIN_INT_NUMBER = 1
    const MAX_INT_NUMBER = 1000

    return value >= MIN_INT_NUMBER && value <= MAX_INT_NUMBER
}
