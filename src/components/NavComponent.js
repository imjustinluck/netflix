import React, { useEffect, useState } from 'react';
import "../css/NavComponent.css"

function NavComponent() {

    const [showState, setShowState] = useState(false);
    const [mouseOverState, setMouseOverState] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowState(true);
            }
            else setShowState(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    const mouseEnterHandler = () => {
        setMouseOverState(true);
        console.log('hunka');
    }
    const mouseLeaveHandler = () => {
        setMouseOverState(false);
        console.log('dunka');
    }


    return (
        <div className={`nav ${showState && "nav_black"}`}>
            <img className="nav_logo"
                src="https://i.imgur.com/wTZxbum.png"
                alt="logo" />
            <img onMouseEnter={() => mouseEnterHandler()} onMouseLeave={() => mouseLeaveHandler()} className="nav_avatar"
                src="https://i.imgur.com/3u8cB5o.png"
                alt="avatar" />
            {mouseOverState &&
                <div className="names fadeOut">
                    <h2>Aravind Sripada</h2>
                    <h2>Justin Aguilo</h2>
                </div>
            }
        </div>
    )
}

export default NavComponent;