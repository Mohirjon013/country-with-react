import React from 'react'

function CityModal({children, isOpenCityModul, setIsOpenCityModul}) {
    
    return (
      <div onClick={(e) => e.target.id == "modal" ? setIsOpenCityModul(false) : ""} className={`fixed top-0 bottom-0 left-0 right-0 duration-300 z-40 backdrop-blur ${isOpenCityModul ? "scale-1" : "scale-0"}`} id='modal'>
          <div className='w-[600px] h-[200px] z-50 p-5 rounded-md bg-slate-300 absolute inset-0 m-auto'>{children}</div>
      </div>
    )
  }

export default CityModal
