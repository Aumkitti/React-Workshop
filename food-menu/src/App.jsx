import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Categories from './component/Categories'
import Menu from './component/Menu'

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const allCategories = ['All', ...new Set(data.map((item) => {
    return item.category;
  })
  ),
];

  const filterItems = (category) => {
    if(category === 'All'){
      setMenuItems(data);
    }else{
      const newItems = data.filter((item)=> item.category === category)
      setMenuItems(newItems);
    }
  };
  return (
    <div>
      <h2>Workshop 2: Food Menu</h2>
      <main>
        <section className="Menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className='underline'></div>
          </div>
          <Categories allCategories={allCategories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </div>
  )
}

export default App;
