import React, { useContext } from 'react'
import { types } from '../../types/types';
import { AuthContext } from '../auth/AuthContext';

export const LoginScreen = ({ history }) => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/');
        dispatch({
            type: types.login,
            payload: {
                name: 'jorge'
            }
        });
        history.replace(lastPath);
    };

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLogin}> Login</button>
        </div>
    )
}
