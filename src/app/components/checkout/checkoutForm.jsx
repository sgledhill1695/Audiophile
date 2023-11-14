import InputLabel from "./inputLabel";
import { useState, useEffect } from "react";
import {useForm, Controller} from 'react-hook-form';

export default function checkoutForm({watch, errors, handleSubmit, handleFormSubmit, register, formState}){




    const watchPaymentMethod = watch("paymentMethod");


    return(
        <>

            <div className="bg-[white] px-[24px] py-[24px] sm:px-[48px] sm:py-[54px] rounded-[8px] xl:mb-[141px]">

                <h1 className="text-[2rem] text-[#000]  manrope-semibold tracking-[1.1px]">CHECKOUT</h1>

                <h2 className="manrope-reg text-[#D87D4A] lg:text-start text-[0.8rem] font-bold tracking-[0.9px] mt-[41px] ">BILLING DETAILS</h2>


                    <div className="flex flex-col sm:flex-row gap-[24px] sm:gap-[16px] mt-[16px]">

                        {/* NAME */}
                        <div className="flex flex-col gap-[9px] w-[100%] lg:max-w-[310px]">

                            <div className="flex justify-between">

                                <InputLabel
                                    label={'Name'}
                                    htmlFor={'name'}
                                />

                                {errors.name?.type === "required" && (
                                    <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Please provide your name</p>
                                )}

                            </div>

                            <input 
                                id="name" 
                                type="text" 
                                placeholder="Alexei Ward" 
                                className={`${errors.name ? 'border-[2px] border-[#CD2C2C]' : 'border-[1px] border-[#CFCFCF]' }  rounded-[8px]  focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A]`}
                                {...register("name" , {required: 'Please provide your name'})}
                                 />

                        </div>


                        {/* EMAIL */}
                        <div className="flex flex-col gap-[9px] w-[100%] lg:max-w-[310px]">

                            <div className="flex justify-between">

                                <InputLabel
                                    label={'Email Address'}
                                    htmlFor={'email'}
                                />

                                {errors.email?.type === "required" && (
                                    <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Please provide your email</p>
                                )}

                                {errors.email?.type === "pattern" && (
                                    <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Wrong format</p>
                                )}


                            </div>

                            <input
                                id="email" 
                                type="email" 
                                placeholder="alexei@mail.com" 
                                className={`${errors.email ? 'border-[2px] border-[#CD2C2C]' : 'border-[1px] border-[#CFCFCF]' } rounded-[8px]  focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%]`}
                                {...register("email", { 
                                    required: 'Please provide your email',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Wrong format',
                                    } 
                                
                                })} 
                                />
                        </div>
    
                    </div>

                    {/* PHONE NUMBER */}
                    <div className="flex flex-col gap-[9px]  w-[100%] mt-[24px]">

                        <div className="flex justify-between">

                            <InputLabel
                                label={'Phone Number'}
                                htmlFor={'phone'}
                            />
    
                            {errors.phone?.type === "required" && (
                                <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Please provide your number</p>
                            )}
    
                            {errors.phone?.type === "pattern" && (
                                <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Wrong format</p>
                            )}

                        </div>


                        <input 
                        id="phone" 
                        type="text" 
                        placeholder="+44" 
                            className={`${errors.phone ? 'border-[2px] border-[#CD2C2C]' : 'border-[1px] border-[#CFCFCF]' } rounded-[8px]  focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%]`}
                            {...register("phone", {
                                required: true,
                                pattern: {
                                    value: /^[0-9]*$/,
                                    message: 'Wrong format',
                                }

                            })} 

                        />
                    </div>


                    <h3 className="manrope-reg text-[#D87D4A] lg:text-start text-[0.8rem] font-bold tracking-[0.9px] mt-[32px] sm:mt-[53px] ">SHIPPING INFO</h3>

                    {/* ADDRESS */}
                    <div className="flex flex-col gap-[9px]  w-[100%] mt-[16px] sm:mt-[24px]">

                        <div className="flex justify-between">

                            <InputLabel
                                label={'Address'}
                                htmlFor={'adress'}
                            />
    
                            {errors.address?.type === "required" && (
                                <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Please provide your address</p>
                            )}

                        </div>


                        <input
                            id="address" 
                            type="text" 
                            placeholder="13 Williams Aveneu" 
                            className={`${errors.address ? 'border-[2px] border-[#CD2C2C]' : 'border-[1px] border-[#CFCFCF]'} border-[1px] rounded-[8px] focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%]`}
                            {...register("address", { required: true})}
                        />
                    </div>




                    <div className="flex flex-col sm:flex-row gap-[24px] mt-[24px] sm:gap-[16px]">
                        
                        {/* POSTCODE */}
                        <div className="flex flex-col gap-[9px] w-[100%] lg:max-w-[310px]">

                            <div className="flex justify-between">

                                <InputLabel
                                    label={'Postcode'}
                                    htmlFor={'postcode'}
                                />

                                {errors.postcode?.type === "required" && (
                                    <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Please provide your postcode</p>
                                )}

                                {errors.postcode?.type === "pattern" && (
                                    <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Wrong format</p>
                                )}

                            </div>

                            <input 
                                id="postcode" 
                                type="text" 
                                placeholder="LS1 1HH" 
                                className={`${errors.postcode ? 'border-[2px] border-[#CD2C2C]' : 'border-[1px] border-[#CFCFCF]'} rounded-[8px]  focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A]`}
                                {...register("postcode", {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s*\d[A-Za-z]{2}$/,
                                        message: 'Wrong format',
                                    }

                                })} 

                            />
                        </div>
                        
                        {/* CITY */}
                        <div className="flex flex-col gap-[9px]  w-[100%] lg:max-w-[310px]">

                            <div className="flex justify-between">

                                <InputLabel
                                    label={'City'}
                                    htmlFor={'city'}
                                />

                                {errors.city?.type === "required" && (
                                    <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Please provide your city</p>
                                )}

                            </div>

                            <input 
                                id="city" 
                                type="text" 
                                placeholder="Leeds" 
                                className={`${errors.city ? 'border-[2px] border-[#CD2C2C]' : 'border-[1px] border-[#CFCFCF]'} border-[1px] rounded-[8px] focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%]`} 
                                {...register("city", { required: true })}

                            />
                        </div>

                    </div>



                    {/* COUNTRY */}
                    <div className="flex flex-col gap-[9px]  w-[100%] lg:max-w-[310px] mt-[24px]">

                        <div className="flex justify-between">

                            <InputLabel
                                label={'Country'}
                                htmlFor={'country'}
                            />

                            {errors.country?.type === "required" && (
                                <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Please provide your country</p>
                            )}

                        </div>

                        <input 
                            id="country" 
                            type="text" 
                            placeholder="United Kingdom" 
                            className={`${errors.country ? 'border-[2px] border-[#CD2C2C]' : 'border-[1px] border-[#CFCFCF]'} rounded-[8px] focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%]`}
                            {...register("country", { required: true })}

                        />
                    </div>


                    <h4 className="manrope-reg text-[#D87D4A] lg:text-start text-[0.8rem] font-bold tracking-[0.9px] mt-[32px] sm:mt-[53px] ">PAYMENT INFO</h4>

                    <div className="flex justify-between mt-[16px]">

                        <InputLabel
                            label={'Payment Method'}
                            htmlFor={''}
                        />


                        {errors.paymentMethod?.type === "required" && (
                            <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Please provide a payment method</p>
                        )}



                    </div>
                    
                    <div className="mt-[16px]">

                        <div className="flex flex-col items-end gap-[16px] mt-[17px] sm:mt-[0px]">

                            {/* E-MONEY */}
                            <div className={`${errors.paymentMethod ? 'border-[2px] border-[#CD2C2C]' : 'border-[1px] border-[#CFCFCF]'}  rounded-[8px]  focus:border-[#D87D4A] hover:border-[#D87D4A] focus:outline-none py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%] sm:max-w-[50%] lg:max-w-[310px]`}>

                                <input
                                    id="e-money"
                                    type="radio"
                                    value="eMoney"
                                    name="payemntMethod"
                                    className="me-[20px] text-[pink] accent-[#D87D4A] hover:cursor-pointer"
                                    {...register("paymentMethod", { required: 'Please choose your payment method' })}

                                />
                                <InputLabel label={'e-Money'} htmlFor={'e-money'} />
                                        
                            </div>

                            {/* CASH ON DELIVERY */}
                            <div className={`${errors.paymentMethod ? 'border-[2px] border-[#CD2C2C]' : 'border-[1px] border-[#CFCFCF]'}  rounded-[8px] focus:border-[#D87D4A] hover:border-[#D87D4A] focus:outline-none py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%] sm:max-w-[50%] lg:max-w-[310px]`}>

                                <input
                                    id="cash"
                                    type="radio"
                                    value="cash"
                                    name="payemntMethod"
                                    className="me-[20px] text-[pink] accent-[#D87D4A] hover:cursor-pointer"
                                    {...register("paymentMethod", { required: 'Please choose your payment method' })}
                                />

                                <InputLabel
                                    label={'Cash On Delivery'}
                                    htmlFor={'cash'}
                                />

                            </div>


                        </div>



                        {watchPaymentMethod === "eMoney" && (

                            <div className="flex flex-col sm:flex-row gap-[24px] sm:gap-[16px] mt-[32px] sm:mt-[24px] mb-[8px] sm:mb-[0px]">

                                {/* E NUMBER */}
                                <div className="flex flex-col gap-[9px]  w-[100%] lg:max-w-[310px]">

                                    <div className="flex justify-between">

                                        <InputLabel
                                            label={'e-Money Number'}
                                            htmlFor={'e-number'}
                                        />

                                        {errors.eNumber?.type === "required" && (
                                            <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Please provide your e number</p>
                                        )}

                                    </div>

                                    <input 
                                        id="e-number" 
                                        type="text" 
                                        placeholder="238521993" 
                                        className={`${errors.eNumber ? 'border-[2px] border-[#CD2C2C]' : 'border-[1px] border-[#CFCFCF]'}  rounded-[8px]  focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A]`} 
                                        {...register("eNumber", { required: 'Please provide your e number' })}

                                    />
                                </div>

                                {/* PIN */}
                                <div className="flex flex-col gap-[9px]  w-[100%] lg:max-w-[310px]">

                                    <div className="flex justify-between">

                                        <InputLabel
                                            label={'e-Money PIN'}
                                            htmlFor={'e-pin'}
                                        />

                                        {errors.pin?.type === "required" && (
                                            <p className="text-[#CD2C2C] text-[0.75rem]" role="alert">Please provide your e pin</p>
                                        )}

                                    </div>

                                    <input 
                                        id="e-pin" 
                                        type="text" 
                                        placeholder="6891" 
                                        className={`${errors.eNumber ? 'border-[2px] border-[#CD2C2C]' : 'border-[1px] border-[#CFCFCF]'}  rounded-[8px]  focus:border-[#D87D4A] focus:outline-none hover:cursor-pointer py-[10px] px-[24px] text-[0.9rem] font-bold caret-[#D87D4A] w-[100%]`}
                                        {...register("pin", { required: 'Please provide your e pin' })}

                                    />
                                </div>

                            </div>
                        )}


                        {watchPaymentMethod === "cash" && (
                            <div className="flex justify-start gap-[32px] mt-[32px] items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" className="min-w-[48px]" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z" fill="#D87D4A" />
                                </svg>

                                <div className="max-w-[550px]">
                                    <p className="opacity-50 text-[0.93rem]">
                                        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                    </p>

                                </div>
                            
                            </div>
                        )}

                    </div>

                    {/* <button type="submit" className="bg-[blue]">Subit</button> */}



            </div>
        
        </>
    )
}