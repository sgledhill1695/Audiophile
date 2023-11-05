import InputLabel from "./inputLabel";
import { useState } from "react";

export default function checkoutForm(){

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState({
        error: false,
        errorMessage: ''
    });

    return(
        <>

            <div className="bg-[white] px-[48px] py-[54px] rounded-[8px] mb-[141px]">

                <h1 className="text-[2rem] text-[#000]  manrope-semibold tracking-[1.1px]">CHECKOUT</h1>

                <h2 className="manrope-reg text-[#D87D4A] lg:text-start text-[0.8rem] font-bold tracking-[0.9px] mt-[41px] ">BILLING DETAILS</h2>

                <form>




                    <div className="flex gap-[16px] mt-[16px]">
    
                        <div className="flex flex-col gap-[9px]  w-[100%] max-w-[310px]">
                            <InputLabel
                                label={'Name'}
                                htmlFor={'name'}
                            />
                            <input id="name" type="text" placeholder="Alexei Ward" className="border-[1px] rounded-[8px] border-[#CFCFCF] focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A]" />
                        </div>
    
                        <div className="flex flex-col gap-[9px]  w-[100%] max-w-[310px]">
                            <InputLabel
                                label={'Email Address'}
                                htmlFor={'email'}
                            />
                            <input id="email" type="email" placeholder="alexei@mail.com" className="border-[1px] rounded-[8px] border-[#CFCFCF] focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%] max-w-[310px]" />
                        </div>
    
                    </div>




                    <div className="flex flex-col gap-[9px]  w-[100%] mt-[24px]">
                        <InputLabel
                            label={'Phone Number'}
                            htmlFor={'phone'}
                        />
                        <input id="phone" type="text" placeholder="+44" className="border-[1px] rounded-[8px] border-[#CFCFCF] focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%]" />
                    </div>


                    <h3 className="manrope-reg text-[#D87D4A] lg:text-start text-[0.8rem] font-bold tracking-[0.9px] mt-[53px] ">SHIPPING INFO</h3>


                    <div className="flex flex-col gap-[9px]  w-[100%] mt-[24px]">
                        <InputLabel
                            label={'Address'}
                            htmlFor={'adress'}
                        />
                        <input id="address" type="text" placeholder="13 Williams Aveneu" className="border-[1px] rounded-[8px] border-[#CFCFCF] focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%]" />
                    </div>




                    <div className="flex gap-[16px] mt-[16px]">

                        <div className="flex flex-col gap-[9px]  w-[100%] max-w-[310px]">
                            <InputLabel
                                label={'Postcode'}
                                htmlFor={'postcode'}
                            />
                            <input id="postcode" type="text" placeholder="LS1 1HH" className="border-[1px] rounded-[8px] border-[#CFCFCF] focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A]" />
                        </div>

                        <div className="flex flex-col gap-[9px]  w-[100%] max-w-[310px]">
                            <InputLabel
                                label={'City'}
                                htmlFor={'city'}
                            />
                            <input id="city" type="text" placeholder="Leeds" className="border-[1px] rounded-[8px] border-[#CFCFCF] focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%] max-w-[310px]" />
                        </div>

                    </div>




                    <div className="flex flex-col gap-[9px]  w-[100%] max-w-[310px] mt-[24px]">
                        <InputLabel
                            label={'Country'}
                            htmlFor={'country'}
                        />
                        <input id="country" type="text" placeholder="United Kingdom" className="border-[1px] rounded-[8px] border-[#CFCFCF] focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%] max-w-[310px]" />
                    </div>


                    <h4 className="manrope-reg text-[#D87D4A] lg:text-start text-[0.8rem] font-bold tracking-[0.9px] mt-[53px] ">PAYMENT INFO</h4>

                    <div className="mt-[16px]">
                        <InputLabel
                            label={'Payment Method'}
                            htmlFor={''}
                        />

                        <div className="flex flex-col items-end gap-[16px]">

                            <div className="border-[1px] rounded-[8px] border-[#CFCFCF] focus:border-[#D87D4A] focus:outline-none  py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%] max-w-[310px]">
                                <input id="e-money" type="radio" placeholder="United Kingdom" className="me-[20px] text-[pink] accent-[#D87D4A]" />
                                <InputLabel
                                    label={'e-Money'}
                                    htmlFor={'e-money'}
                                />
                            </div>

                            <div className="border-[1px] rounded-[8px] border-[#CFCFCF] focus:border-[#D87D4A] focus:outline-none  py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%] max-w-[310px]">
                                <input id="cash" type="radio" placeholder="United Kingdom" className="me-[20px] text-[pink] accent-[#D87D4A]" />
                                <InputLabel
                                    label={'Cash On Delivery'}
                                    htmlFor={'cash'}
                                />
                            </div>


                        </div>




                        <div className="flex gap-[16px] mt-[24px]">

                            <div className="flex flex-col gap-[9px]  w-[100%] max-w-[310px]">
                                <InputLabel
                                    label={'e-Money Number'}
                                    htmlFor={'e-number'}
                                />
                                <input id="e-number" type="text" placeholder="238521993" className="border-[1px] rounded-[8px] border-[#CFCFCF] focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A]" />
                            </div>

                            <div className="flex flex-col gap-[9px]  w-[100%] max-w-[310px]">
                                <InputLabel
                                    label={'e-Money PIN'}
                                    htmlFor={'e-pin'}
                                />
                                <input id="e-pin" type="text" placeholder="6891" className="border-[1px] rounded-[8px] border-[#CFCFCF] focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%] max-w-[310px]" />
                            </div>

                        </div>







                    </div>























                </form>


            </div>
        
        </>
    )
}