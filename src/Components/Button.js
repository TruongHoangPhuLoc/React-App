import Proptypes from 'prop-types' 

const Button = ({className,text,color,onClick}) => {
    return(
        <button 
            className= {className} 
            style = {{backgroundColor:color}}
            onClick = {onClick}
            
            >{text}
        </button>
    )
}

export default Button