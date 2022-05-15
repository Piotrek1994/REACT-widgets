import React, { useState } from "react";
import Dropdown from './Dropdown'
import Convert from "./Convert";


const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    { 
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]


const Translate = () => {
const [language, setLanguage] = useState(options[0])
const [text, setText] = useState("")

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Entet text</label>
                </div>
            </div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <Dropdown 
            labelProp="Select a language"
            selectedProp={language} 
            setSelectedProp={setLanguage} 
            optionsProp={options}/>
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert textProp={text} languageProp={language}/>
        </div>
    )
}





export default Translate;