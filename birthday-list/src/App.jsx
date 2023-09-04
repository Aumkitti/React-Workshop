import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './list'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)
  const clearAll = () =>{
    setPeople([])
  }

  return (
    <div>
      <h1>
        Workshop 1: Birthday list
      </h1>
      <main>
        <section className='container'>
          <h3>{people.length} Birthdays today</h3>
          <List people = {people} />
          <button onClick={clearAll}>Clear All</button>
        </section>
      </main>
    </div>
  )
}

export default App
