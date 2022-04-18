import React, { useEffect} from "react";

import { useNavigate } from "react-router-dom";

function Protected(props) {
    
 let cmp = props.cmp   
const  navigate = useNavigate();

useEffect (() => {
    if(!localStorage.getItem('user-info')){
        navigate('/register')
    }
}, [])

    
    return(
        <>

        </>
    )
}

export default Protected;
