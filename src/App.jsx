import React, { useState} from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { Search } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import FadeLoader from "react-spinners/FadeLoader";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const App = () => {

  const [word, setWord] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
 
  const changeBgColor = () => {
    let inputBox = document.querySelector(".inputBox");
    inputBox.style.borderColor = "#9333ea";
};

const resetColor = () =>{
  let inputBox = document.querySelector(".inputBox");
  inputBox.style.borderColor = "#374151";
}

const ai = new GoogleGenAI({ apiKey: "AIzaSyD6E4qkJTvvbMUxX3DuuD0xIKkqeFZRDGY" });

async function getResult() {
  setLoading(true);
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:  `Considered you are a dictionary AI. we will give to a word and you need to Give all the dictionary details in good form 
      including examples also, Meanings, Definitions, Synonyms , Phonetics etc. The word is ${word}`,
  });
  setResult(response.text);
  setLoading(false);
  
}


  return (
    <>
    <Navbar />
    <div className="searchContainermt-5 p-[250px]">
      <div className="inputBox">
        <Search className='ml-4 cursor-pointer'/>
        <input onKeyUp={((e)=>{
          if(e.key === "Enter"){
            getResult();
          }
        })} onChange={(e)=>{setWord(e.target.value)}} value={word} type="text" onBlur={resetColor} onFocus={changeBgColor} placeholder='Search a word....' />
      </div>
    </div>

    <div className="resultContainer py-[20px] mt-[-360px] min-h-[48vh] mx-[250px]" style={{borderTop: "1px solid #374151", borderBottom:"1px solid #374151" }}>
    <Markdown remarkPlugins={[remarkGfm]}>{result}</Markdown>
      {loading && <FadeLoader color='#9333ea' className='mt-5'/>}
    </div>
    </>
  )
}

export default App
