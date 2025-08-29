import styles from './toggleswitch.module.css'

export const ToggleSwitch = () =>
{
    const {toggleSwitch, switch: switchClass, state} = styles
    return(
        <>
            <div className = {toggleSwitch}>

                <div className = {switchClass}>
                    <span className = {state}>ON</span>
                </div>
            </div>
        </>
    )
}