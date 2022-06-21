import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title})  =>  {
    return (
        <header>
            {/* <h1 style={{color:"red",textAlign:'center'}}>{title}</h1> */}
            {/* or */}
            <h1 style={headingstyle}>{title}</h1>
            <h2 style={{textAlign:'center'}}>Welcome to my scheduler</h2>
            <h3 style={{textAlign:'center'}}>Author: Phu Loc</h3>
        </header>
    )
}
const headingstyle = {
    color: 'red',
    textAlign:'Center'
}
// Header.defaultProps = {
//     title: "Nothing to say"
// }
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header

