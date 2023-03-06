import "./utils.scss"
export const OptionaryButton = ({ children, action, style }) => {
    return (<div onClick={action} className="optionaryButton Button details_btn " style={style} > {children} </div>)
}