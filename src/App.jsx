import './App.css'
import FilterMenu from './FilterMenu.jsx'
import CoffeeList from './CoffeeList.jsx'

function App() {
  const coffeList =[
    {id: 1, name: "test", type: "Mrożone", description: "yo", isNew: true},
    {id: 2, name: "Cappucishish", type: "Przelewy", description: "I don't know how its spelled", isNew: false},
    {id: 3, name: "test", type: "Espresso", description: "yo", isNew: false},
    {id: 4, name: "test", type: "Espresso", description: "yo", isNew: false},
    {id: 5, name: "test", type: "Mrożone", description: "yo", isNew: false},
    {id: 6, name: "test", type: "Przelewy", description: "yo", isNew: false},
    
  ]

  
  return (
    <>
      <h1>Menu</h1>
      <FilterMenu />
      <CoffeeList data={coffeList}/>
    </>
  )
}

export default App