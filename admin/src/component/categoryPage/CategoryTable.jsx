import React from 'react'
import CategoryTansatck from '../common/Table/CategoryTansatck'

const CategoryTable = () => {
  return (
    <div>
      <div className="lg:w-[1210px] max-h-full py-5 shadow-sm px-4 mb-4 rounded-sm flex items-center justify-center lg:justify-start">
      <h1 className="text-2xl font-bold">Category</h1>
      </div>
        <div className="lg:w-[1210px] min-h-90 py-5 shadow-sm px-4 mb-4 rounded-sm">
            <CategoryTansatck />
        </div>
    </div>

  )
}

export default CategoryTable