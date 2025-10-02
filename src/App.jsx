import './App.css'
import CoffeeCard from './CoffeeCard.jsx'
function App() {
  const coffeList =[
    {id: 1, name: "test", type: "none", description: "yo", isNew: true},
    {id: 2, name: "Cappucishish", type: "I dunno", description: "I don't know how its spelled", isNew: false},
    {id: 3, name: "test", type: "none", description: "yo", isNew: false},
    {id: 4, name: "test", type: "none", description: "yo", isNew: false},
    {id: 5, name: "test", type: "none", description: "yo", isNew: false},
    {id: 6, name: "test", type: "none", description: "yo", isNew: false},
    
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