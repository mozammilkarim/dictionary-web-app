import { useEffect, useState } from 'react'
import './App.css'
import logo from "../assets/images/logo.svg";
import dropdown from "../assets/images/icon-arrow-down.svg";
import DictionaryInput from './Components/DictionaryInput';
const textModeArray = ['Sans-serif', 'Serif', 'mono']
function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [dropDown, setDropDown] = useState(false)

  const [textMode, setTextMode] = useState(0)
  useEffect(() => {
    const main=document.getElementById('main')
    if(textMode===0){
      main.style.fontFamily='sans-serif'
    }
    else if(textMode===1){
      main.style.fontFamily='serif'
    }
    else if(textMode===2){
      main.style.fontFamily='monospace'
    }
  }, [textMode])
  
  return (
    <div id='main' className={`px-[24px] py-[24px] xl:px-[351px] sm:px-[40px] sm:py-[40px] xl:py-[58px] ${darkMode ? 'bg-[black] text-[white]' : 'bg-[white] text-[black]'} `}>
      <div className='flex justify-between '>
        <img src={logo} alt="booklogo" className='my-auto' />
        <div className='flex justify-center items-center '>
          {/* //drop down */}
          <div className='flex gap-[16px] sm:gap-[18px] relative w-full'>
            <h2 className='text-[14px] text'>{textModeArray[textMode]}</h2>
            <img src={dropdown} alt="drop down toggle" className='cursor-pointer'  onClick={() => { setDropDown(true) }} />
            {/* <select className='bg-inherit outline-none'>
              <option value="0">Sans1</option>
              <option value="1">Sans1</option>
              <option value="2">Sans1</option>

            </select> */}
            {dropDown &&
              <div className='flex flex-col absolute top-5 w-full break-keep' onClick={() => { setDropDown(false) }}>
                {textMode!==0?<h2 onClick={() => { setTextMode(0) }}>{textModeArray[0]}</h2>:null}
                {textMode!==1?<h2 onClick={() => { setTextMode(1) }}>{textModeArray[1]} </h2>:null}
                {textMode!==2?<h2 onClick={() => { setTextMode(2) }}>{textModeArray[2]}</h2>:null}
                
              </div>}
          </div>
          <div className={`w-[1px] h-[32px]  ${darkMode ? 'bg-[white]' : 'bg-[#E9E9E9]'} mx-[16px]  sm:mx-[26px]`}></div>
          <div className='flex gap-[12px] sm:gap-[20px]'>
            {/* //toggle button */}
            <div className={`relative cursor-pointer rounded-xl w-[40px] h-[20px] p-1  ${darkMode ? 'bg-[#A445ED]' : 'bg-[#757575]'}`} onClick={() => { setDarkMode((t) => !t) }}>
              <div className={`rounded-full  h-[14px] w-[14px] bg-white absolute  ${darkMode ? 'right-1' : 'left-1'}`}></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill='none' stroke={darkMode ? '#A445ED' : '#757575'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" /></svg>
          </div>
        </div>
      </div>
      <DictionaryInput darkMode={darkMode} />
    </div>
  )
}

export default App
