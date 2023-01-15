import { MdHouse } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { HomeNav } from "@/components/HomeNav";
import { WealtChart } from "@/components/WealthChart";

export const HomePage = () => {

    return (
        <>
            <div>
                <HomeNav/>
            </div>
            <div>
                <WealtChart/>
            </div>
        </>
    )
}