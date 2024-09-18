import { useState } from "react"
import CityModal from "./CityModal"




function CountryCard({item, countries, setCounties}){

    const [findId , setFindId] = useState(null)

    const [isOpenCityModul, setIsOpenCityModul] = useState(false)

    function handleDeleteBtn(id){
        setIsOpenCityModul(true)
        setFindId(id)
    }

    function handleDeleteClickBtn(e){
        const findedCity = countries.findIndex(item => item.id == findId )
        console.log(findedCity);
        
        countries.splice(findedCity, 1)
        setCounties([...countries])
        setIsOpenCityModul(false)
    }
    return(
        <>
            <li className="w-[264px] rounded-md bg-white pb-[20px] shadow-lg">
                <img className="rounded-t-md  object-cover h-[160px] pb-[24px]" src={item.flag} alt="Flag" width={"100%"}/>
            
                <div className="pl-[24px]">
                    <strong className="font-[700] text-[18px] leading-[26px] ">{item.name}</strong>
                    <p className="font-[300] text-[14px] leading-[16px] mt-[16px]"> <span className="font-[600] text-[14px] leading-[16px]">Population: </span> {item.population}</p>
                    <p className="font-[300] text-[14px] leading-[16px] my-[8px]"><span className="font-[600] text-[14px] leading-[16px]">Region: </span> {item.name}</p>
                    <p className="font-[300] text-[14px] leading-[16px]"><span className="font-[600] text-[14px] leading-[16px]">Capital: </span> {item.capital}</p>
                    <button onClick={() => handleDeleteBtn(item.id)} className="w-[80px] bg-red-500 py-2 mt-3 rounded-lg text-white hover:opacity-60 duration-300  ">delete</button>
                </div>
                
            </li>   
            <CityModal isOpenCityModul={isOpenCityModul} setIsOpenCityModul={setIsOpenCityModul}>
            <div>
                <h2 className="text-[30px] font-bold text-zinc-600 text-center my-[10px]">Do you want to delete it ?</h2>
                <div className="flex justify-between">
                    <button onClick={() => setIsOpenCityModul(false)} className="add-btn w-[49%] py-2 rounded-[30px] bg-slate-500 font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-slate-500 hover:text-slate-500 border-[2px] border-transparent duration-300">Cancel</button>
                    <button onClick={handleDeleteClickBtn} className="add-btn w-[49%] py-2 rounded-[30px] bg-red-500 font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-red-500 hover:text-red-500 border-[2px] border-transparent duration-300">Yes</button>
                </div>
            </div>
            </CityModal>
        </>
    )
}
export default CountryCard