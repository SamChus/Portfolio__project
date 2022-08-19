import Skill from "./skill";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import react from "../images/react1.svg";

const Skills = () => {
    return (  
        <div className="skill">
            <div className="skill__head">
                <h1>My Skills</h1>
                <p>Few skills I posses</p>
            </div>
            <div className="grid grid--1x4">
                <Skill html={html} name={"HTML"}/>
                <Skill html={css} name={"CSS"}/>
                <Skill html={js} name={"JAVASCRIPT"}/>
                <Skill html={react} name={"REACT"}/>
            </div>
        </div>
    );
}
 
export default Skills;