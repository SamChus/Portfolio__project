
import Navbar from "./navbar";
import SideNav from "./sidebar";

const Header = () => {
    return (  
        <div className="header">
            <div className="page__name">CCS.</div>
            <Navbar />
            <SideNav />
        </div>
    );
}
 
export default Header;