import closeLogo from '../icons/close_FILL0_wght400_GRAD0_opsz48.svg'

export const Items = ({ category, onDeleteCategory}) => {

   
    return (
        <div className="items">
            <h4>{category} <img src={closeLogo} alt="close" onClick={() => onDeleteCategory(category)}/></h4>
        </div>
    )
}
