import { FC } from "react"
import logo_img from '../img/logo.png'

const Logo: FC = () => {
    return (
        <h1 className="
        font-bold 
        xl:text-6xl xl:mr-20 xl:flex-none
        sm:mr-8 sm:text-4xl  
        xs:flex xs:justify-center xs:text-4xl
        ">
        
           <span ><span className="text-red-500 ">Job</span>
            <span className="text-blue-500">Search</span></span>
        </h1>
    )
}

export default Logo