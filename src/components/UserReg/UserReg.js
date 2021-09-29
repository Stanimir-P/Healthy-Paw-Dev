import { register } from '../../utils/firebase';
import { showErrorMessage } from '../../services/common';

import './UserReg.css';

const UserReg = ({
    history
}) => {
    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const repeatPassword = e.target.repeatPassword.value;

        if (password === repeatPassword) {
            register(email, password, history);
        } else {
            showErrorMessage('Password and Repeat Password should match!');
        }
    }

    return (
        <div className="login-wrapper background-cover">
            <div className="form-container">
                <h2>Register<i className="fa fa-paw logo-paw"></i></h2>

                <form className="form" onSubmit={onRegisterSubmitHandler}>
                    <fieldset className="form-email">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="Enter your email" />
                    </fieldset>

                    <fieldset className="form-password">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" placeholder="Enter your password" />
                    </fieldset>

                    <fieldset className="form-repeatPassword">
                        <label htmlFor="repeatPassword">Repeat Password:</label>
                        <input type="password" name="repeatPassword" placeholder="Repeat your password" />
                    </fieldset>

                    <div className="error-wrapper">
                        <div className="error-message"></div>
                    </div>

                    <button type="submit" className="form-btn">Register</button>
                </form>
            </div>
        </div>
    );
}

export default UserReg;
