import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import usersData from "../../data/users";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser, loginToUser } from '../../ducks/user';

const Login = ({ userInfo, loginToUser }) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

        if (userInfo) {
            navigate('/');
        }
    }, [userInfo, navigate])

    const handleChangeName = ({ target }) => {
        setEmail(target.value)
    }

    const handleChangePassword = ({ target }) => {
        setPassword(target.value);
    }

    const handleSubmit = (e) => {
        usersData.forEach(user => {
            if (user.password === password) {
                loginToUser(user);
                navigate('/');
            };
        })
        navigate('/login')
        e.preventDefault();
    }

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="InputEmail">Email</label>
                                <input type="email" value={email} onChange={handleChangeName} className="form-control" id="InputEmail"
                                    placeholder="Enter email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputPassword">Password</label>
                                <input type="password" value={password} onChange={handleChangePassword} className="form-control" id="InputPassword"
                                    placeholder="Password" required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg center-block">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Login.propTypes = {
    userInfo: PropTypes.object,
    loginToUser: PropTypes.func
}

const mapStateToProps = (state, props) => {

    return {
        userInfo: getUser(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginToUser: (user) => dispatch(loginToUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login); 
