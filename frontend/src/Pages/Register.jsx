import { useEffect, useState } from "react";
import axios from 'axios';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [firstNameFocused, setFirstNameFocused] = useState(false);
    const [firstNameError, setFirstNameError] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameFocused, setLastNameFocused] = useState(false);
    const [lastNameError, setLastNameError] = useState('');

    const [username, setUsername] = useState('');
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [usernameError, setUsernameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleFirstNameBlur = () => setFirstNameFocused(true);

    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleLastNameBlur = () => setLastNameFocused(true);

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleUsernameBlur = () => setUsernameFocused(true);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleEmailBlur = () => setEmailFocused(true);

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handlePasswordBlur = () => setPasswordFocused(true);

    useEffect(() => {
        if (firstNameFocused) {
            setFirstNameError(firstName.trim() === '' ? 'Required' : '');
        }
    }, [firstName, firstNameFocused]);

    useEffect(() => {
        if (lastNameFocused) {
            setLastNameError(lastName.trim() === '' ? 'Required' : '');
        }
    }, [lastName, lastNameFocused]);

    useEffect(() => {
        if (usernameFocused) {
            if (username.trim() === '') {
                setUsernameError('Required');
            } else {
                const checkUsernameAvailability = async () => {
                    try {
                        const response = await axios.get(`http://localhost:3000/check-username-availability/${username}`);
                        if (response.data.error) {
                            setUsernameError(response.data.error);
                        } else {
                            setUsernameError('');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                };
                checkUsernameAvailability();
            }
        }
    }, [username, usernameFocused]);

    useEffect(() => {
        if (emailFocused) {
            if (email.trim() === '') {
                setEmailError('Required');
            } else {
                const checkEmailAvailability = async () => {
                    try {
                        const response = await axios.get(`http://localhost:3000/check-email-availability/${email}`);
                        if (response.data.error) {
                            console.log('Email error from server:', response.data.error);
                            setEmailError(response.data.error);
                        } else {
                            console.log('fix stagnat error')
                            setEmailError('');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                };
                checkEmailAvailability();
            }
        }
    }, [email, emailFocused]);

    useEffect(() => {
        if (passwordFocused) {
            setPasswordError(password.trim() === '' ? 'Required' : '');
        }
    }, [password, passwordFocused]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register', {
                firstName,
                lastName,
                username,
                email,
                password
            });
            // Handle successful registration here
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="login-page-wrapper">
            <div className="login-page-content-wrapper">
                <div className="login-page-logo-container">
                    <img className="login-page-logo" src="/slider-images/nike-word.png" alt="Nike logo" />
                </div>
                <div className="login-page-text-container">
                    <h1 className="login-page-text">Sign up to become a Nike member.</h1>
                </div>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={handleFormSubmit}>
                        <div className="name-input-container">
                            <div className="first-name-input-container">
                                <input 
                                    className="first-name-input" 
                                    value={firstName} 
                                    onChange={handleFirstNameChange} 
                                    onBlur={handleFirstNameBlur} 
                                />
                                <div className="error-message-container">
                                    <span className="error-message">{firstNameError}</span>
                                </div>
                            </div>
                            <div className="last-name-input-container">
                                <input 
                                    className="last-name-input" 
                                    value={lastName} 
                                    onChange={handleLastNameChange} 
                                    onBlur={handleLastNameBlur} 
                                />
                                <div className="error-message-container">
                                    <span className="error-message">{lastNameError}</span>
                                </div>
                            </div>
                        </div>
                        <div className="username-input-container">
                            <input 
                                className="username-input" 
                                value={username} 
                                onChange={handleUsernameChange} 
                                onBlur={handleUsernameBlur} 
                            />
                                <div className="error-message-container">
                                    <span className="error-message">{usernameError}</span>
                                </div>
                        </div>
                        <div className="login-email-input-container">
                            <input 
                                className="login-email-input" 
                                value={email} 
                                onChange={handleEmailChange} 
                                onBlur={handleEmailBlur} 
                            />
                                <div className="error-message-container">
                                    <span className="error-message">{emailError}</span>
                                </div>
                        </div>
                        <div className="login-password-input-container">
                            <input 
                                className="login-password-input" 
                                type="password" 
                                value={password} 
                                onChange={handlePasswordChange} 
                                onBlur={handlePasswordBlur} 
                            />
                                <div className="error-message-container">
                                    <span className="error-message">{passwordError}</span>
                                </div>
                        </div>
                        <div className="login-button-container">
                            <button type="submit" className="login-button">Register</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default Register;
