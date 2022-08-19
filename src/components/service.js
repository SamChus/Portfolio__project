

const Service = ({serv, name}) => {
    return (  
        <div className="service">
            <img src={serv} alt="services" />
            <h3>{name}</h3>
        </div>
    );
}
 
export default Service;