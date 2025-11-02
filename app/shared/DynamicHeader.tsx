import { ChevronsLeftIcon, ChevronsLeftRightIcon, House } from "lucide-react"
import Navbar from "./Navbar"
import { FaAngleDoubleRight, FaChevronLeft } from "react-icons/fa"
import BreadCrumb from "@/components/BreadCrumb"

const DynamicHeader = () => {
  return (
    <div className="w-full   py-10 space-y-4  bg-gray-100   border-b-[#aaaaaa]/60 shadow-lg "  >
        <Navbar/>
        <div className="h-[37px] flex  justify-between px-12">
          <BreadCrumb/>
        </div>

    </div>
  )
}

export default DynamicHeader 