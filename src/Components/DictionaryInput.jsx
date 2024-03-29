import React from 'react'
import { useState } from 'react'
import { ThemeContext } from '../ThemeContext'
import DictionaryOutput from './DictionaryOutput'

const DictionaryInput = ({ darkMode = false }) => {
    const [myInputText, setMyInputText] = useState('keyboard')
    return (
        <ThemeContext.Provider value={darkMode}>

            <input type={'text'} value={myInputText} placeholder="Write.." onChange={(e) => { setMyInputText(e.target.value) }} className={`mt-[51px] outline-none rounded-xl text-xl font-[700] w-full mb-[45px]  p-[20px] ${darkMode ? 'bg-[#1F1F1F] text-white placeholder:text-white' : 'bg-[#F4F4F4] '}`}>
            </input>
            <DictionaryOutput text={myInputText} />
        </ThemeContext.Provider>
    )
}

export default DictionaryInput