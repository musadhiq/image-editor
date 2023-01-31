import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Draggable from 'react-draggable';
import { changeOverlayPosition } from '../../actions/FilterActions';




function ImageContainer() {
  // dispatch
  const Dispatch = useDispatch()
  // manage drag
  const [position, setPosition] = useState({ x: 0, y: 0 });

//  apply filters
const [currentSettings,setCurrentSettings] = useState()
  const Settings = useSelector((state)=> state.filterReducer)
  const [filters,setFilters]= useState(Settings?.Filters)

  // manage image
  const [selectedImage, setSelectedImage] = useState({url:"https://images.unsplash.com/photo-1672426565093-5e5e20458c2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTE3NzkxMw&ixlib=rb-4.0.3&q=80&w=1080"})
  const [saved, setSaved] =useState()
  const RecentImages = useSelector(state => state.ImageSaveReducer)
  const [fetchNew , setFetchNew] = useState(true)


  const OpenNew = ()=>{ 
    fetch("https://source.unsplash.com/random").then((res)=>{
      setSelectedImage(res)
    })
  }
  // open saved
  const saveImage = ()=>{
    Dispatch({type:"SAVE_IMAGE",payload:{id: Math.floor(Math.random() * 1000000000),url:selectedImage.url,settings:Settings}})
  }
  const OpenSaved = (data)=>{
    RecentImages.map((image)=>{
      if(image.id === data.id){
        Dispatch({type:"UPDATE_SETTINGS",payload:image.settings})
        setSelectedImage(image)
      }
    })
  }

  // handle overlay
  const HandleDrag= (data)=>{
    setPosition({ x: data.x , y: data.y });
    
  }
  const updatePos =(data)=>{
    Dispatch(changeOverlayPosition(data))
  }

  const imgStyle = {
    filter: `
      brightness(${filters?.filter(filter => filter.property === "brightness")[0].value || 1})
      saturate(${filters?.filter(filter => filter.property === "saturate")[0].value || 1}%)
      contrast(${Settings.Filters?.filter(filter => filter.property === "contrast")[0].value || 1}%)
      sepia(${filters?.filter(filter => filter.property === "sepia")[0].value || 0})
      grayscale(${filters?.filter(filter => filter.property === "black/white")[0].value || 1}%)
    `
  };
  return (
      <div className=' grid mt-4 px-4'>
      <div className="main-container flex flex-col gap-3">
        <div className="new-image flex items-center justify-between w-full">
          <p className="image-title border-2 p-2 rounded-md">{selectedImage?.name || "Untitled-image"}</p>
          <button className='bg-blue-600 text-white text-md px-7 py-2 rounded-md' onClick={OpenNew}>New</button>
        </div>
        <div className="image-container md:w-[500px] sm:w-full h-72 border-2 border-black py-2 mt-4 relative overflow-hidden">
          <img src={selectedImage?.url} alt="random"  className={`z-10 w-full h-full object-contain image`}
          style={imgStyle}
          />
          <Draggable onDrag={(e, data) => HandleDrag(data)} onStop={(data)=> updatePos(data)}>
          <h1 draggable className='absolute top-2 left-12 text-2xl text-white font-bold z-20 cursor-move'>{Settings?.overlay}</h1>
          </Draggable>
        </div>
        <button className="save px-4 py-2 bg-blue-600 text-white rounded-md" onClick={saveImage}>SaveImage</button>
          <p className='mt-3 font-bold'>Recent</p>
        <div className="images grid grid-cols-4 gap-2 items-start content-between mt-1">
        {RecentImages?.map((image)=>(
           <img key={image.id} src={image?.url} alt="random" className='w-24 h-20 object-contain cursor-pointer'  onClick={(e)=> OpenSaved(image)}/>  
        ))}
        </div>
      </div>
      </div>
)}

export default ImageContainer