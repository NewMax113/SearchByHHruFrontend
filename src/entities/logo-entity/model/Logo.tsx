import { FC } from "react"
import logo_img from '../img/logo.png'

const Logo: FC = () => {
    return (
        <div className="
        font-bold 
        xl:text-6xl xl:mr-20 xl:flex-none
        xl:block
        lg:block
        sm:hidden
        sm:mr-8 sm:text-4xl  
<<<<<<< Updated upstream
        xs:hidden
        ">
        
           <span ><span className="text-orange-500">Job</span>
            <span className="text-blue-500">Search</span></span>
=======
        xs:hidden"
            data-testid='logo'>

            <span ><span className="text-orange-500">Job</span>
                <span className="text-blue-500">Search</span></span>
>>>>>>> Stashed changes
        </div>
    )
}

export default Logo