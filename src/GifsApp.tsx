
import HeaderGif from './components/HeaderGif'
import SearchGif from './components/SearchGif'
import PreviousSearches from './components/PreviousSearches'
import './index.css'
import {ContainerGif} from './gifs/ContainerGif'
import { mockGifs } from './mock-data/gifs.mock'
import { useState } from 'react'




export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handleTermClicked = (term:string) => {
    console.log({term})
  }

  const handleSearch = (query:string) => {
    console.log({query})
  }

  return (
    <>
        <HeaderGif title='Buscador de Gifs' description='Descubre y comparte el Gif perfecto'/>
    
        <SearchGif descripcionBoton='Buscar' placeholder='Buscar Gifs' onQuery = {handleSearch} />

        <PreviousSearches title='Busquedas previas' item={previousTerms} onLabelCliecked={handleTermClicked} />
        
        <ContainerGif gifs = {mockGifs} />
    
    
    </>
  )
}
