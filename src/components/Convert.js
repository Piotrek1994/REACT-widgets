import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Convert = ({ languageProp, textProp }) => {
	const [translated, setTranslated] = useState('')
    const [debuncedText, setDebuncedText] = useState(textProp)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebuncedText(textProp)

        }, 500)

         return () => {
             clearTimeout(timerId)
         }
    }, [textProp])

	useEffect(() => {
		const doTranslation = async () => {
			const {data} = await axios.post(
				'https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: debuncedText,
						target: languageProp.value,
						key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
					},
				}
			)
            setTranslated(data.data.translations[0].translatedText)
		}
        doTranslation()
	}, [languageProp, debuncedText])



	return (<div>
        <h1 className='ui header'>{translated}</h1>
    </div>)
}

export default Convert
