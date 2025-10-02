import CoffeeCard from './CoffeeCard.jsx'

function CoffeeList({data}) {
    return(
        <div className='coffe-list'>
            {data.map(
                (coffee)=>(
                    <CoffeeCard id={coffee.id} name={coffee.name} type={coffee.type} desc={coffee.description} isNew={coffee.isNew}/>
                )
            )}
        </div>
    )
    
}


export default CoffeeList