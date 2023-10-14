export default function addToCart(){

    return(
        <>

             <div className=" flex gap-[16px]">

                 <div className="flex justify-between items-center h-[55px] w-[120px] bg-[#F1F1F1]">

                     <button className="ps-[15px] pe-[15px] h-[100%] w-[1/3]">
                         <span className="opacity-50">-</span>
                     </button>

                    <div className="manrope justify-center items-center w-[1/3] ">
                         1
                     </div>

                    <button className="pe-[15px] ps-[15px] h-[100%] w-[1/3]">
                        <span className="opacity-50">+</span>
                     </button>


                 </div>


                 <button className='px-[31.5px] py-[15px]  brand-orange-background hover:bg-[#FBAF85] text-white manrope-semibold text-[0.8rems]'>ADD TO CART</button>

                 </div>
             </>
    )
}