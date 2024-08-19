import React, {useState} from "react";
import "../styles/Collapse.scss"
import arrow from "../assets/arrow_back_ios-24px 2-2.png"

function Collapse({title, content}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return(
        <div className="container-collapse">
            <div className="collapse-title">
                <h2>{title}</h2>
                <img src={arrow} alt="arrow" onClick={toggle} className={`arrow ${isOpen ? 'rotate' : ''}`} ></img>
            </div>
            {isOpen && (
                <div className="toggle-content">
                    {content}
                </div>
            )}
        </div>

    )
}
export default Collapse