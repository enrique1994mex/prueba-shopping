import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser,  logoutToUser } from '../../ducks/user';
import role_group from '../../data/role_grants';

const NavBar = ({ userInfo, logoutToUser }) => {

    if (userInfo) {
        var roleOptions = role_group.filter(users => users.role === userInfo.role);
    }

    const [menuShow, setMenuShow] = useState(false);

    const [toggleMenu, setToggleMenu] = useState(false);

    const menuOpen = () => setMenuShow(!menuShow);
    const toggleMenuRes = () => setToggleMenu(!toggleMenu); 

    const menuClass = `dropdown-menu${menuShow ? " show" : ""}`;
    const toggleClass = `collapse navbar-collapse${toggleMenu ? " show" : ""}`; 

    return (
        <>
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                        data-target="#navbar-1" onClick={toggleMenuRes}>
                        <span className="sr-only">Menu</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand" >Virtual Shop</Link>
                </div>

                <div className={toggleClass} id="navbar-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><Link to="/">Home</Link></li>
                        {
                            userInfo !== null ? (
                                <li className="dropdown" onClick={menuOpen}>
                                    <a className="dropdown-toggle" data-toggle="dropdown">
                                        {userInfo.username} <b className="caret"></b>
                                    </a>
                                    <ul className={menuClass}>
                                        {
                                            roleOptions[0].modules.map(option => <li key={option.id}><Link to="/">{option.option}</Link></li>)
                                        }
                                        <li className="divider"></li>
                                        <li onClick={logoutToUser}><Link to="/">Logout</Link></li>
                                    </ul>
                                </li>
                            ) : (
                                <li><Link to="/login">Login</Link></li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

NavBar.propTypes = {
    userInfo: PropTypes.object,
    logoutToUser: PropTypes.func
}

const mapStateToProps = (state, props) => {
    return {
        userInfo: getUser(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    logoutToUser: () =>  dispatch(logoutToUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

