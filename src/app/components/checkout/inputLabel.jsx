export default function inputLabel({label, htmlFor}){

    return(
        <>
            <label 
                className="text-[#000] text-[0.8rem] font-bold"
                htmlFor={htmlFor}>
                    {label}
            </label>

        </>
    )
}