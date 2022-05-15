import React, {useEffect, useState} from "react";

const Convert = ({languageProp, textProp}) => {
    useEffect(() =>  {
        console.log('ok');
    }, [languageProp, textProp])


    return (
        <div></div>
    )
}

export default Convert ;