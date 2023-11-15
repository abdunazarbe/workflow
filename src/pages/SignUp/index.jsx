import React, { useState } from 'react';
import logo from "../../../public/logo.svg";
import './style.scss';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';

const SignUp = () => {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    return (
        <div className='wrapper'>
            <div className='content'>
                <Link to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
                <p>Merci d'entrer vos informations de connexion</p>
                <form action="">
                    <div className='email'>
                        <label htmlFor="">Email</label>
                        <input placeholder='Enter your email' type="email" />
                    </div>

                    <div className='email'>
                        <label htmlFor="">Numéro de téléphone</label>
                        <input placeholder='Enter your phone number' type="email" />
                    </div>

                    <div className='password'>
                        <label htmlFor="">Mot de passe</label>
                        <input placeholder='Enter password' type={showPassword ? "text" : "password"} />
                        <i class={showPassword ? "bx bx-show" : 'bx bx-low-vision'} onClick={() => setShowPassword(!showPassword)}></i>
                    </div>

                    <div className='password'>
                        <label htmlFor="">Mot de passe</label>
                        <input placeholder='Repeat password' type={showPassword2 ? "text" : "password"} />
                        <i class={showPassword2 ? "bx bx-show" : 'bx bx-low-vision'} onClick={() => setShowPassword2(!showPassword2)}></i>
                    </div>
                    <Checkbox className='text1' onChange={onChange}>J'accepte <div>les termes et les conditions d'utilisation.</div> </Checkbox>
                    <Link to='/signin'>
                        <button>
                            <span>Se connecter</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                                <path d="M19.2688 4.00107L16.0434 0.742375C15.966 0.66426 15.8738 0.602257 15.7722 0.559946C15.6707 0.517634 15.5617 0.49585 15.4517 0.49585C15.3417 0.49585 15.2327 0.517634 15.1312 0.559946C15.0296 0.602257 14.9374 0.66426 14.86 0.742375C14.7047 0.898528 14.6176 1.10976 14.6176 1.32994C14.6176 1.55012 14.7047 1.76135 14.86 1.9175L17.827 4.9095H0.833425C0.612387 4.9095 0.400402 4.99731 0.244105 5.1536C0.087807 5.3099 0 5.52189 0 5.74293H0C0 5.96396 0.087807 6.17595 0.244105 6.33225C0.400402 6.48854 0.612387 6.57635 0.833425 6.57635H17.877L14.86 9.58502C14.7819 9.66249 14.7198 9.75467 14.6775 9.85623C14.6352 9.95779 14.6134 10.0667 14.6134 10.1767C14.6134 10.2868 14.6352 10.3957 14.6775 10.4973C14.7198 10.5988 14.7819 10.691 14.86 10.7685C14.9374 10.8466 15.0296 10.9086 15.1312 10.9509C15.2327 10.9932 15.3417 11.015 15.4517 11.015C15.5617 11.015 15.6707 10.9932 15.7722 10.9509C15.8738 10.9086 15.966 10.8466 16.0434 10.7685L19.2688 7.53479C19.737 7.06599 20 6.4305 20 5.76793C20 5.10535 19.737 4.46987 19.2688 4.00107Z" fill="white" />
                            </svg>
                        </button>
                    </Link>

                    <p className='lastText'>Vous possedez déjà un compte ? <Link to='/signin' className='link'>Se connecter</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp;