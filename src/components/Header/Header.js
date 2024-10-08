import { useState } from "react"
import moonIcon from "../../assets/images/moon-icon.svg"
import Modal from "../Modal"
import Button from "../Button"
import emptyImg from '../../assets/images/empty-img.png'
import { Toaster, toast } from "react-hot-toast"



function Header({countries, setCounties,setIsLoading, isOpenModal, setIsOpenModal}){
    
    const [flag, setFlag] = useState(emptyImg)
    const [name, setName] = useState("")
    const [capital, setCapital] = useState("")
    const [population, setPopulation] = useState("")

    
    function handleCancelBtn(){
        setIsOpenModal(false)
        setFlag(emptyImg)
    }

    function handleSubmitCountry(e){
        e.preventDefault()
        const data = {
            id: countries.length ? countries[countries.length - 1].id + 1 : 1,
            name,capital,population,flag,
            isLiked: false,
            isBasket: false
        }
        setIsOpenModal(true)
        setIsLoading(true)
        setTimeout(() => {
            toast.success('Successfully added country!')
            setIsLoading(false)
            setCounties([data,...countries])
        }, 500);

        setIsOpenModal(false)
        setName("")
        setCapital("")
        setPopulation("")
        setFlag(emptyImg)
    }
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <header className="mb-[48px]">
                <div className="py-[23px] shadow-lg px-[80px] flex items-center justify-between">
                    <a href="/" className="font-[600] text-[24px] leading-[32px]">Where in the world?</a>
                    <div className="flex gap-3">
                        <button className="flex gap-[8px] p-1 rounded-md border-[1px] border-transparent hover:border-slate-500 duration-300 hover:text-slate-700 ">
                            <img className="" src={moonIcon} alt="moon icon" width={20} height={20}/>
                            <p className="font-[600] text-[16px] leading-[21px]">Dark Mode</p>
                        </button>
                        <button onClick={() => setIsOpenModal(true)} className="flex gap-[8px] p-1 border-[1px] rounded-md border-black">
                            
                            <p className="font-[600] text-[16px] leading-[21px]"> Add Country </p>
                        </button>
                    </div>
                </div>
            </header>
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                <form onSubmit={handleSubmitCountry} autoComplete="off">
                    <div className="flex justify-between items-center">
                        <label className="w-[49%] ">
                            <input onChange={(e) => setFlag(URL.createObjectURL(e.target.files[0]))} className="hidden" type="file"  />
                            <img className="cursor-pointer h-[175px] rounded-lg" src={flag} alt="choose img" width={"100%"}/>
                        </label>
                        <div className="w-[49%] space-y-3">
                            <input onChange={(e) => setName(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-400" type="text" required placeholder=" Enter country name" name="name" />
                            <input onChange={(e) => setCapital(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-400" type="text" required placeholder=" Enter country capital" name="capital" />
                            <input onChange={(e) => setPopulation(e.target.value)} className="w-full p-2 rounded-md outline-none border-[1px] border-slate-400" type="text" required placeholder=" Enter country population" name="population" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <Button onClick={handleCancelBtn} type={"button"} title={"Cancel"} extraStlye={"w-[49%] bg-red-500 text-white mt-6"}/>
                        <Button type={"submit"} title={"Submit"} extraStlye={"w-[49%] bg-green-500 text-white mt-6"}/>
                    </div>
                </form>
            </Modal>
        </>
    )
}
export default Header