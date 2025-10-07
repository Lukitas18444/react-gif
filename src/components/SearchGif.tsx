
interface Props {
    descripcionBoton: string;
    placeholder?: string
}

export default function SearchGif({descripcionBoton, placeholder}: Props) {
  return (
    <div className='search-container'>
        <input type="text" placeholder= {placeholder} />
        <button> {descripcionBoton} </button>
    </div>
  )
}
