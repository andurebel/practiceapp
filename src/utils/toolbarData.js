import { FaHeart, FaHome, FaPlusSquare, FaSearch } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { BiMessageRoundedDots } from "react-icons/bi";

export const toolbarData = [
  {
    name: "Home",
    icon: <FaHome />,
  },
  {
    name: "Search",
    icon: <FaSearch />,
  },
  {
    name: "Explore",
    icon: <MdOutlineExplore />,
  },
  {
    name: "Message",
    icon: <BiMessageRoundedDots />,
  },
  {
    name: "Notifications",
    icon: <FaHeart />,
  },
  {
    name: "Create",
    icon: <FaPlusSquare />,
  },
];
