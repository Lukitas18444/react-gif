interface Props{
  title:string;
  searches: string[];
  onLabelCliecked: (term: string) => void
}



 const previousSearches = ({title, searches, onLabelCliecked}:Props) => {


  return (
    <div className='previous-searches'>
        <h2> {title} </h2>
        <ul className='previous-searches-list'>
          {searches.map((term) => (
            <li key={term} onClick = {() => onLabelCliecked(term) } > {term} </li>
            
          ))}
        </ul>
    </div>
  )
}

export default previousSearches

