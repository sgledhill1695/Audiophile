import Layout from "./layout";
import CheckoutForm from "@/app/components/checkout/checkoutForm";
import CheckoutSummary from "@/app/components/checkout/checoutSummary";
import GoBack from "@/app/components/reuseable/goBack";
import { useForm } from 'react-hook-form';

export default function Checkout(){

    const { register, handleSubmit, control, formState: { errors }, watch } = useForm();

    const handleFormSubmit = (data) => {

       // e.preventDefault();

        console.log(data);

        alert('submitted');


    }



    return(
        <>
            <Layout>

                <div className="bg-[#F2F2F2]">

                    
                    <div className='max-w-[1440px] m-auto'>
                        <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">
                            
                            <div className="pt-[16px] sm:pt-[48px] lg:pt-[80px]">
                                <GoBack />
                            </div>

                            <form onSubmit={handleSubmit(handleFormSubmit)}>

                                <div className="flex flex-col xl:flex-row xl:justify-between pt-[24px] lg:mt-[38px] gap-[10px]">
    
                                    <div className="w-[100%] lg:max-w-[730px]">
    
    
                                        <CheckoutForm
                                            watch={watch}
                                            errors={errors}
                                            register={register}
                                        />
    
    
                                    </div>
        
                                    <div className="w-[100%] lg:max-w-[350px]">

                                        <CheckoutSummary
                                            
                                        />

                                    </div>
        
        
                                </div>

                            </form>

    
                      </div>
                    </div>

                </div>







            </Layout>
        </>
    )
}