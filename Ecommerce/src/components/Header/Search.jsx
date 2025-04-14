import React from 'react'

const Search = () => {
    return (
        <div className='justify-content-end d-flex align-items-center'>
            <input type="text" className='form-control' placeholder='Search produts here...' />
            <button className='theme-button ms-2'>Search</button>
        </div>

    )
}

export default Search