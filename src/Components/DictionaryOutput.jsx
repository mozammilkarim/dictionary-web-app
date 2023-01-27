import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import newWindow from "../../assets/images/icon-new-window.svg";
import { ThemeContext } from '../ThemeContext';
import "./myCss.css";
const app_id = "982e4594"
const app_key = "35f8214406b97c41b45d1877c4f35456"
const endpoint = "entries"
const language_code = "en-us"
// word_id = "example"

const DictionaryOutput = ({ text = "hello" }) => {
    const darkMode=useContext(ThemeContext)
    // console.log(darkMode2)
    const [pronounciation, setPronounciation] = useState('/ˈkiːbɔːd/')
    const [playHover, setPlayHover] = useState(false)

    let url = "https://od-api.oxforddictionaries.com/api/v2/" + endpoint + "/" + language_code + "/" + text.toLowerCase()
    const fetchMeaning = async () => {
        // const meaning=await fetch(url,{'mode':'no-cors','headers' : {"app_id": app_id, "app_key": app_key}})
        // console.log("meaning is",meaning)
        const meaning=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`,{mode:'cors'})
        console.log("meaning is",meaning)
    }
    useEffect(() => {
        fetchMeaning()
    }, [text])
    return (
        <div>
            <div className='mb-[40px] justify-between items-start sm:items-center flex sm:flex-row flex-col'>
                <div>

                    <h1 className='font-[700] text-[32px] sm:text-[64px]'>{text}</h1>
                    <p className='font-medium text-lg sm:text-2xl text-[#A445ED]'>{pronounciation}</p>
                </div>
                <div className='relative cursor-pointer' onMouseEnter={()=>{setPlayHover(true)}} onMouseLeave={()=>{setPlayHover(false)}}>
                    {/* <div className='bg-[#A445ED] rounded-full opacity-25 w-[75px] h-[75px]'>
                    </div> */}
                    <svg className='opacity-100 ' xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill={playHover?"#ffffff":"#A445ED"} fillRule="evenodd"><circle fill={"#A445ED"} cx="37.5" cy="37.5" r="37.5" opacity={playHover?"1":".25"} /><path d="M29 27v21l21-10.5z" /></g></svg>
                </div>
            </div>
            <>
                <div className='flex justify-between mb-[40px]'>
                    <h3 className='font-[700] text-2xl'>noun</h3>
                    <div className='bg-[#E9E9E9] h-[1px] w-[70%] sm:w-[80%] m-auto'></div>
                </div>
                <h3 className='font-medium text-xl text-[#757575]'>Meaning</h3>
                <ul className={`mt-[25px] font-medium text-lg  pl-[22px] list-disc ${darkMode ? 'text-white' : 'text-[#2D2D2D]'}`}>
                    <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                    <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
                    <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
                </ul>
            </>

            <div className='flex justify-start my-[40px]'>
                <h3 className='font-medium text-xl text-[#757575]'>Synonyms</h3>
                <h3 className='font-[700] my-auto text-xl text-[#A445ED] ml-[22px]'>electronic keyboard</h3>
            </div>
            <>
                <div className='flex justify-between mb-[40px]'>
                    <h3 className='font-[700] text-2xl'>verb</h3>
                    <div className='bg-[#E9E9E9] h-[1px] w-[70%] sm:w-[80%] m-auto'></div>
                </div>
                <h3 className='font-medium text-xl text-[#757575]'>Meaning</h3>
                <ul className={`mt-[25px] font-medium text-lg  pl-[22px] list-disc ${darkMode ? 'text-white' : 'text-[#2D2D2D]'}`}>
                    <li>To type on a computer keyboard.</li>
                    <p className='text-[#757575]'>“Keyboarding is the part of this job I hate the most.”</p>
                </ul>
            </>
            <div className='flex flex-col md:flex-row gap-5 justify-start mt-[40px] mb-[124px] '>
                <h3 className='font-medium text-xl text-[#757575] decoration-[#757575] underline underline-offset-8'>Source</h3>
                <div className='flex  gap-[9px]'>

                    <h3 className='font-[700] text-xs sm:text-base  lg:text-xl  decoration-[#757575] lg:ml-[22px] underline underline-offset-8'>https://en.wiktionary.org/wiki/keyboard</h3>
                    <a href="http://karimji.tech" target="_blank" rel="noopener noreferrer" className='cursor-pointer my-auto' >

                        <img src={newWindow} alt="check source" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default DictionaryOutput