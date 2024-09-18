import { useState } from "react"
import CityModal from "./CityModal"
import toast, { Toaster } from "react-hot-toast"
import UpdateModal from "./UpdateModal"
import Button from "./Button"




function CountryCard({item, countries, setCounties}){

    const [findId , setFindId] = useState(null)
    const [updateCity, setUpdateCity] = useState(null)
    const [isOpenCityModul, setIsOpenCityModul] = useState(false)
    const [isOpenUpdateModul, setIsOpenUpdateModul] = useState(false)


    const [updateImg, setUpdateImg] = useState("")
    const [updateName, setUpdateName] = useState("")
    const [updateCapital, setUpdateCapital] = useState("")
    const [updatePopulation, setUpdatePopulation] = useState("")
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
        toast.success('Deleted country.', {
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
            iconTheme: {
              primary: '#c71902',
              secondary: '#FFFAEE',
            },
          });
    }


    function handleUpdateBtn(e){
        const findCity = countries.find(item => item.id == e.target.id)
        setIsOpenUpdateModul(true)
        setUpdateCity(findCity)
        setUpdateImg(findCity.flag)
        setUpdateName(findCity.name)
        setUpdateCapital(findCity.capital)
        setUpdatePopulation(findCity.population)

    }
    function handleSubmitUpdateCountry(e){
        e.preventDefault()
        const newData = {
            ...updateCity,
            name:e.target.name.value,
            capital:e.target.capital.value,
            population:e.target.population.value,
            flag:updateImg,
        }
        const updateCities = countries.map(item => item.id == newData.id ? newData : item)
        setCounties(updateCities)
        setIsOpenUpdateModul(false)
        toast.success('Successfully updated country')
    }
    return(
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <Toaster position="top-center" reverseOrder={false}/>
            <li className="w-[264px] rounded-md bg-white pb-[20px] shadow-lg">
                <img className="rounded-t-md  object-cover h-[160px] pb-[24px]" src={item.flag} alt="Flag" width={"100%"}/>
            
                <div className="pl-[24px]">
                    <strong className="font-[700] text-[18px] leading-[26px] ">{item.name}</strong>
                    <p className="font-[300] text-[14px] leading-[16px] mt-[16px]"> <span className="font-[600] text-[14px] leading-[16px]">Population: </span> {item.population}</p>
                    <p className="font-[300] text-[14px] leading-[16px] my-[8px]"><span className="font-[600] text-[14px] leading-[16px]">Region: </span> {item.name}</p>
                    <p className="font-[300] text-[14px] leading-[16px]"><span className="font-[600] text-[14px] leading-[16px]">Capital: </span> {item.capital}</p>
                    <div className="flex gap-4">
                        <button id={item.id} onClick={handleUpdateBtn} className="w-[80px] bg-green-500 py-2 mt-3 rounded-lg text-white hover:opacity-60 duration-300  ">Update</button>
                        <button onClick={() => handleDeleteBtn(item.id)} className="w-[80px] bg-red-500 py-2 mt-3 rounded-lg text-white hover:opacity-60 duration-300  ">delete</button>
                    </div>
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
            <UpdateModal isOpenUpdateModul={isOpenUpdateModul} setIsOpenUpdateModul={setIsOpenUpdateModul}>
                <form onSubmit={handleSubmitUpdateCountry} autoComplete="off">
                    <div className="flex justify-between items-center">
                        <label className="w-[49%] ">
                            <input onChange={(e) => setUpdateImg(URL.createObjectURL(e.target.files[0]))} className="hidden" type="file"  />
                            <img className="cursor-pointer h-[175px] rounded-lg" src={updateImg} alt="choose img" width={"100%"}/>
                        </label>
                        <div className="w-[49%] space-y-3">
                            <input value={updateName} onChange={(e) => setUpdateName(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-400" type="text" required placeholder=" Enter country name" name="name" />
                            <input value={updateCapital} onChange={(e) => setUpdateCapital(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-400" type="text" required placeholder=" Enter country capital" name="capital" />
                            <input value={updatePopulation} onChange={(e) => setUpdatePopulation(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-400" type="text" required placeholder=" Enter country population" name="population" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <Button onClick={() => setIsOpenUpdateModul(false)}  type={"button"} title={"Cancel"} extraStlye={"w-[49%] bg-red-500 text-white mt-6"}/>
                        <Button type={"submit"} title={"Submit"} extraStlye={"w-[49%] bg-green-500 text-white mt-6"}/>
                    </div>
                </form>
            </UpdateModal>
        </>
    )
}
export default CountryCard