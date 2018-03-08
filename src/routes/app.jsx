import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import Login from './login/login'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import styles from '../components/layout/main.less'

function App ({children, location, dispatch, app}) {
    const { loading, loginButtonLoading, user } = app

    const loginProps = {
        loading,
        loginButtonLoading,
        onOk (data) {
            dispatch({type: 'app/login', payload: data})
        }
    }

    const headerProps = {
        user,
        location
    }
    return (
        <div className={styles.layout}>
            <Header {...headerProps}/>
            <Login {...loginProps}/>
            <Footer/>
        </div>
    )
}

App.propTypes = {
    // children: PropTypes.element.isRequired,
    location: PropTypes.object,
    dispatch: PropTypes.func,
    loading: PropTypes.object,
    loginButtonLoading: PropTypes.bool,
    login: PropTypes.bool,
    user: PropTypes.object
}

export default connect(({app}) => ({app}))(App)