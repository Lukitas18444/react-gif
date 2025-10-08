import { useEffect, useState } from "react";

interface Props {
    descripcionBoton: string;
    placeholder?: string;

    onQuery: (query:string) => void
}

export default function SearchGif({descripcionBoton, placeholder, onQuery}: Props) {
  
  const [query, setQuery] = useState('');


  useEffect (() => {

    const timeOutId = setTimeout(() => {
      onQuery(query)
    },700)

    /* onQuery(query); */
    return () => {
      clearTimeout(timeOutId)
    }
  },[query, onQuery])


  const handleSearch = () => {
    onQuery(query);
    setQuery('')
  }
  const handleKeyDown =(event: React.KeyboardEvent<HTMLInputElement>) =>{
      if(event.key === 'Enter'){
        handleSearch()
      }
  }
  
  return (
    <div className='search-container'>
      
        <input 
        type="text" 
        placeholder= {placeholder}
        value={ query }
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown = {handleKeyDown}
        />
        <button onClick = {handleSearch}> {descripcionBoton} </button>
    </div>
  )
}
