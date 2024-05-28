import avatar from '../images/image-removebg-preview.png';
import {useNavigate} from 'react-router-dom';
import {loginEvent} from '../events/loginEvent';
export default function LoginPage() {
    const navigate = useNavigate();
    return (
        <div className='login-page wrapper-center'>
            <div className="login-form">
                <img src={avatar} alt="" className='app-logo' />
                <h1>KeyChat</h1>
                <input type="text" placeholder="Phone or email" />
                <input type="password" placeholder="Password" />
                <button type="submit" onClick={()=>loginEvent(navigate)}>Login</button>
                {/* <p>Don't have an account? <a href="/signup">Sign Up</a></p> */}
            </div>
        </div>
    )
}