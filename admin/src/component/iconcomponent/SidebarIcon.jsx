import { LuLayoutDashboard } from "react-icons/lu";
import { FaUser, FaBoxOpen, FaTags, FaShoppingCart,  FaClipboardList  } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { MdCategory,MdWeb  } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi"; // example icon
import { MdLogout } from "react-icons/md";

const iconMap = {
    dashboard: LuLayoutDashboard,
    user: FaUser,
    product: FaBoxOpen,
    category: TbCategoryPlus,
    cart: FaShoppingCart,
    brand: FaTags,
    banner: BiSolidOffer,
    webinfo: MdWeb,
    'log-out': MdLogout,
    order:FaClipboardList 
}

export default iconMap