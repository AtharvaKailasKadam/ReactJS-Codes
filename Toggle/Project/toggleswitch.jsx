import { useState } from 'react'
import styles from './toggleswitch.module.css'

export const ToggleSwitch = () =>
    {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () =>
    {
        setIsOn(!isOn);
    };

    const { toggleSwitch, switch: Switch, state, ON, OFF } = styles;

    return (
        <div className={toggleSwitch} style = {{background: isOn ? "green" : "darkred"}} onClick={handleToggleSwitch}>
            <div className={`${Switch} ${isOn ? ON : OFF}`}>
                <span className={state}>{isOn ? "ON" : "OFF"}</span>
            </div>
        </div>
    );
};
