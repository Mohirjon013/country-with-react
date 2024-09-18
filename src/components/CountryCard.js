import Modal from "./Modal"


function CountryCard({item,  isOpenModal, setIsOpenModal}){
    return(
        <>
            <li className="w-[264px] rounded-md bg-white pb-[20px] shadow-lg">
                <img className="rounded-t-md  object-cover h-[160px] pb-[24px]" src={item.flag} alt="Flag" width={"100%"}/>
            
                <div className="pl-[24px]">
                    <strong className="font-[700] text-[18px] leading-[26px] ">{item.name}</strong>
                    <p className="font-[300] text-[14px] leading-[16px] mt-[16px]"> <span className="font-[600] text-[14px] leading-[16px]">Population: </span> {item.population}</p>
                    <p className="font-[300] text-[14px] leading-[16px] my-[8px]"><span className="font-[600] text-[14px] leading-[16px]">Region: </span> {item.name}</p>
                    <p className="font-[300] text-[14px] leading-[16px]"><span className="font-[600] text-[14px] leading-[16px]">Capital: </span> {item.capital}</p>
                    <button className="w-[80px] bg-red-500 py-2 mt-3 rounded-lg text-white hover:opacity-60 duration-300  ">delete</button>
                </div>
                
            </li>   
            {/* <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                <div>
                    <h2 class = "text-[30px] font-bold text-zinc-600 text-center my-[10px]">Do you want to delete it ?</h2>
                    <div class = "flex justify-between">
                        <button className="add-btn w-[49%] py-2 rounded-[30px] bg-amber-500 font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-amber-500 hover:text-amber-500 border-[2px] border-transparent duration-300">Cancel</button>
                        <button className="add-btn w-[49%] py-2 rounded-[30px] bg-red-500 font-bold text-[25px] leading-[29px] text-white hover:bg-transparent hover:border-red-500 hover:text-red-500 border-[2px] border-transparent duration-300">Yes</button>
                    </div>
                </div>
            </Modal> */}
        </>
    )
}
export default CountryCard