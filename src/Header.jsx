import { NavLink } from "react-router-dom";
import SearchTask from "./SearchTask";
import LWlogo from "./assets/logo2.webp";


export default function Header({onSearch}) {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img className="h-[45px]" src={LWlogo} alt="Lws" />
        </a>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/review">Review</NavLink>
        <SearchTask onSearch={onSearch}/>
      </div>
    </nav>
  );
}
