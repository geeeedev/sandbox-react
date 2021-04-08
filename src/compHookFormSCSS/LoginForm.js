import React, {useState} from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cfmPswd, setCfmPswd] = useState('');

    
    return (
        <>
            <form >
                <label htmlFor="username">User Name:</label>
                <input id="username" name="username" type="text" onChange={(e)=> setUsername(e.target.value)}/>

                <label htmlFor="email">User Name:</label>
                <input id="email" name="email" type="email" onChange={(e)=> setEmail(e.target.value)}/>

                <label htmlFor="password">User Name:</label>
                <input id="password" name="password" type="password" onChange={(e)=> setPassword(e.target.value)}/>

                <label htmlFor="cfmPswd">User Name:</label>
                <input id="cfmPswd" name="cfmPswd" type="password" onChange={(e)=> setCfmPswd(e.target.value)}/>

            </form>
        </>    
    )
};

export default LoginForm;