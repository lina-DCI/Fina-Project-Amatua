import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams, useNavigate  } from 'react-router-dom'

const EmailConfirmation = () => {
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();
    const [messageState, setMessageState] = useState('');

    useEffect(() => {
        const message = searchParams.get('message')
        if (/^Email was confirmed.$/.test(message) && searchParams.has("message")
        ) {
            setMessageState(message + ' 😎')
        }else if(
            /^Verification link has expired.$/.test(message) && searchParams.has("message") 
            ||
            /^User has already confirmed their email.$/.test(message) && searchParams.has("message") 
        ){
            setMessageState(message)
        }else {
            navigate('/err')
        }
        
    }, [searchParams]);

    return (
        <div className='section-page-notfound'>
            <div className="section-page-notfound-h">
                <h6>{messageState}</h6>
            </div>
            
            <button className='section-page-notfound-button'>                        
                <NavLink className="nav-links" to="/"></NavLink>Go Home
            </button>
        </div>
    );
}

export default EmailConfirmation;
