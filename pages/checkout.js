import Layout from "./layout";
import CheckoutForm from "@/app/components/checkout/checkoutForm";
import CheckoutSummary from "@/app/components/checkout/checoutSummary";
import GoBack from "@/app/components/reuseable/goBack";

export default function Checkout(){

    return(
        <>
            <Layout>

                <div className="bg-[#F2F2F2]">

                    
                    <div className='max-w-[1440px] m-auto'>
                        <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">
                            
                            <div className="pt-[80px]">
                                <GoBack />
                            </div>
    
                            <div className="flex justify-between mt-[38px]">

                                <div className="w-[100%]">
                                    <CheckoutForm />
                                </div>
    
                                <div className="w-[100%]">
                                    <CheckoutSummary />
                                </div>
    
    
                            </div>
    
                      </div>
                    </div>

                </div>







            </Layout>
        </>
    )
}