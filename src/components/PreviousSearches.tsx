interface Props{
  title:string;
  item?:string[];

  onLabelCliecked: (term: string) => void
}



 const previousSearches = ({title,item, onLabelCliecked}:Props) => {

 

  return (
    <div className='previous-searches'>
        <h2> {title} </h2>
        <ul className='previous-searches-list'>
          {item.map((term) => (
            <li onClick = {() => onLabelCliecked(term) } key={term}> {term} </li>
            
          ))}
        </ul>
    </div>
  )
}

export default previousSearches

