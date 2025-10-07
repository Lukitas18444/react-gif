
import HeaderGif from './components/HeaderGif'
import SearchGif from './components/SearchGif'
import PreviousSearches from './components/PreviousSearches'
import './index.css'
import {ContainerGif} from './gifs/ContainerGif'
import { mockGifs } from './mock-data/gifs.mock'


export const GifsApp = () => {
  return (
    <>
        <HeaderGif title='Buscador de Gifs' description='Descubre y comparte el Gif perfecto'/>
    
        <SearchGif descripcionBoton='Buscar' placeholder='Buscar Gifs'/>

        <PreviousSearches title='Busquedas previas' item={['Goku', 'Saitama']} />
        
        <ContainerGif gifs = {mockGifs} />
    
    
    </>
  )
}
