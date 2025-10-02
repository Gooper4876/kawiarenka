// import CoffeeList from './CoffeeList.jsx'


function CoffeeCard({id,name,type,desc,isNew}){
    return(
        <div className='card' key={id}>
          <h2>{name}</h2>
          <h3>Type: {type}</h3>
          <p>{desc}</p>
          <p><b>{isNew ? "Nowość!" : ""}</b></p>
        </div>
    )
}



export default CoffeeCard