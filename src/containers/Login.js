import { connect } from 'react-redux';
import Login from '../views/Login';
import { getUser, loginToUser } from '../ducks/user';

console.log(loginToUser)

const mapStateToProps = (state, props) => {
    return {
        userInfo: getUser(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    userLogin: (user) => dispatch(userLogin(user)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Login); 