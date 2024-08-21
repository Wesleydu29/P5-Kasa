import React, { useState } from "react";
import "../styles/Collapse.scss";
import arrow from "../assets/arrow_back_ios-24px 2-2.png";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse-title" onClick={toggle} role="button" aria-expanded={isOpen} tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') toggle(); }}>
                <h2>{title}</h2>
                <img src={arrow} alt="Toggle arrow" className={`arrow ${isOpen ? 'rotate' : ''}`} />
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
                {content}
            </div>
        </div>
    );
}

export default Collapse;
