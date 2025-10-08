
import HeaderGif from './components/HeaderGif'
import SearchGif from './components/SearchGif'
import PreviousSearches from './components/PreviousSearches'
import './index.css'
import {ContainerGif} from './gifs/ContainerGif'
import { mockGifs } from './mock-data/gifs.mock'
import { useState } from 'react'




export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['']);


  const handleTermClicked = (term:string) => {
    console.log({term})
  }

  const handleSearch = (query:string = '') => {
    query = query.trim().toLowerCase()
    if(query.length === 0){
      return;
    }

    if(previousTerms.includes(query)){return}

    const currenTerms = previousTerms.slice(0,6);
    currenTerms.unshift(query)
    setPreviousTerms( currenTerms )



  }

  return (
    <>
        <HeaderGif title='Buscador de Gifs' description='Descubre y comparte el Gif perfecto'/>
    
        <SearchGif descripcionBoton='Buscar' placeholder='Buscar Gifs' onQuery = {handleSearch} />

        <PreviousSearches title='Busquedas previas' searches={previousTerms} onLabelCliecked={handleTermClicked} />
        
        <ContainerGif gifs = {mockGifs} />
    
    
    </>
  )
}
