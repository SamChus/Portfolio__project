import Service from "./service";
import respon from "../images/respon.svg";
import web from "../images/web.svg";

const Services = () => {
    return (  
        <div className="services">
            <h1>Services</h1>
            <div className="service__flex">
                <Service name={"Responsive Web Design"} serv={respon}/>
                <Service name={"Web Development"} serv={web}/>
            </div>
        </div>
    );
}
 
export default Services;