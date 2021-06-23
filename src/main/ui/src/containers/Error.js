import error from '../imgs/icons/shield.png';
import './Error.css';

const Error = ()=>{
    return(
        <>
            <img className="error" src={error}></img>
            <h1 className="error">ERROR PAGE</h1>
        </>
    )
}

export default Error;