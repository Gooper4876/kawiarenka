import './App.css'
import CoffeeCard from './CoffeeCard.jsx'
function App() {
  const coffeList =[
    {id: 1, name: "test", type: "none", description: "", isNew: true},
  ]

  
  return (
    <>
      <h1>Menu</h1>
      <div className='coffe-list'>
        {coffeList.map(
          (coffee)=>(
            <CoffeeCard id={coffee.id} name={coffee.name} type={coffee.type} desc={coffee.description} isNew={coffee.isNew}/>
          )
        )}
      </div>
    </>
  )
}

export default App