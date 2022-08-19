

const Skill = ({html, name}) => {
  return (
    <div>
        <div className="skill__flex">
          <div className="icon__cont">
            <img src={html} alt="html" />
        
          </div>
        
          <div className="progress"></div>
        
        </div>
        <span>{name}</span>
    </div>
  );
};

export default Skill;
