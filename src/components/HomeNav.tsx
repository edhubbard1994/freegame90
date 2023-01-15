import { FaBars } from "react-icons/fa"
import { MdHouse } from "react-icons/md"



export const HomeNav = () => {

    return (
        <div className="navbar flex justify-between font-bold text-xl border-gray-100 border-b py-4 pl-4">
            <div className="flex">
                <MdHouse size={24}/>
                <p>FreeGame90</p>
            </div>
            <button className="btn btn-square btn-ghost pr-5">
                <FaBars />
             </button>
        </div>
    )
}