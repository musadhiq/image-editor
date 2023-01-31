import React, { useEffect, useState } from 'react'
import {FaMagic} from "react-icons/fa"
import {GoTextSize} from "react-icons/go"
import { useDispatch, useSelector } from 'react-redux'
import { changeFilters, changeOverlay } from '../../actions/FilterActions'
function Editor() {

  const dispatch = useDispatch()
  const Settings = useSelector((state)=> state.filterReducer)
  // setting states
  const [filterData, setFilterData] = useState(useSelector((state)=> state.filterReducer))

  const HandleChange = (e)=>{
    dispatch(changeFilters(e.target.value,e.target.name))
  }

  return (
    <div className=' bg-light-bg z-50 lg:w-full md:w-1/2 h-full w-full'>
      <div className="editor  p-4">
        <div className="header flex items-center justify-between gap-4">
          <div className='flex items-center gap-4'>
          <FaMagic className=''/>
          <h1 className="text-xl font-bold text-md">Filters</h1>
          </div>
          <button className='text-blue-600 underline' onClick={() => dispatch({type:'RESET_FILTERS'})}>Reset</button>
        </div>
        <div className="settings grid lg:grid-cols-2 grid-cols-1 justify-around mt-5 gap-5">
          {filterData.Filters.map((filter)=>(
          <div className="setting" key={filter.id}>
            <div className="top flex justify-between">
            <p className="text-md font-bold capitalize">{filter.property}</p>
            <p className='border-2 px-2 bg-white rounded-md'>{filter.percent}%</p>
            </div>
            <input type="range" className='w-full slider' name={filter.property} min={filter.min} max={filter.max} value={filter.value} step={filter.step || 1} 
            onChange={(e)=> HandleChange(e)}
            />
          </div>
          ))}
        </div>
      </div>
      <div className="overlay mt-6 p-4"  >
      <div className='flex items-center gap-4'>
          <GoTextSize className=''/>
          <h1 className="text-xl font-bold text-md">Text</h1>
      </div>
      <div className="setting mt-2" >
            <div className="top">
            <p className="text-md font-bold capitalize">Content</p>
            </div>
            <input type="text" className='w-52 mt-2 h-10 border-2 border-dark p-2 font-bold' name='overlay' defaultValue={filterData.overlay}  
            onChange={(e)=> dispatch(changeOverlay(e.target.value))}
            />
          </div>
      </div>
    </div>
  )
}

export default Editor