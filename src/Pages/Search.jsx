import { useState, useEffect } from "react";

function Search(){
    const [text, setText]=useState("");
    const [suggestion, setSuggestion]=useState([]);
    const [timer, setTimer]=useState(null);
    const getSuggestion= async (word)=>{
        const res= await fetch(`https://api.datamuse.com/sug?s=${word}`);
        const data=await res.json();
        setSuggestion(data);
    }
    useEffect(()=>{
        if(text.length<2){
            setSuggestion([]);
            return;
        }
         if (timer) clearTimeout(timer);

         const newTimer= setTimeout(()=>{
            getSuggestion(text);
         }, 400)
         setTimer(newTimer);
    }, [text]);
    return (
        <>
          <div className="search-container">
            <input
               type="text"
               value={text}
               onChange={(e)=>setText(e.target.value)}
               placeholder="search any word"
               className="search-input"
            />
            {suggestion.length >0 &&(
                <ul className="suggestion-box">
                    {suggestion.map((item, index)=>(
                        <li
                          key={index}
                          onClick={()=>{
                            setText(item.word);
                            setSuggestion([]);
                          }}
                          className="search-item"
                        >
                            {item.word}
                        </li>
                    ))}
                </ul>
            )}
          </div>
        </>
    )
}
export default Search;