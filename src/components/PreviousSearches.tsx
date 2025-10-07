interface Props{
  title:string;
  item?:string[];
}



 const previousSearches = ({title,item}:Props) => {

 

  return (
    <div className='previous-searches'>
        <h2> {title} </h2>
        <ul className='previous-searches-list'>
          {item.map((term) => (
            <li key={term}> {term} </li>
          ))}
        </ul>
    </div>
  )
}

export default previousSearches

