



function CountryCard({item}){
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
        </>
    )
}
export default CountryCard