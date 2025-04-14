import React, { useState } from 'react'
import Fashion from './Fashion'
import Electronic from './Electronic'
import Furniture from './Furniture'

const CategoryTab = () => {

  const [tabIndex, setTabIndex] = useState(0)

  const tab = [{
    name: "Fashion",
    component: Fashion,
  },
  {

    name: "Electronic",
    component: Electronic,
  },
  {
    name: "Furniture",
    component: Furniture,
  }
  ]
  const ActiveComponent = tab[tabIndex].component

  return (
    <div className='container-fluid'>
      <div className='mt-4 d-flex gap-4'>
        {
          tab.map((item, index) => (
            <button type='button' className={`border-0 bg-transparent fs-3 ${tabIndex === index ? 'hover-danger active' : ''} hover-danger`} onClick={() => setTabIndex(index)}>{item.name}</button>
          ))
        }

      </div>
      <ActiveComponent />
    </div>
  )
}

export default CategoryTab