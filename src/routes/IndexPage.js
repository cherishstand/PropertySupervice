import React from 'react'
import Login from './login/login'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import styles from '../components/layout/main.less'

const App = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <Login />
            <Footer/>
        </div>
    )
}

export default App