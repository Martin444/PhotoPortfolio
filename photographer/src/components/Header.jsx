import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Modal from './Modal'
import Login from '../pages/Login'
import Form from './Form'

const Header = props => {
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(!modal)
    }
    return (
        <div className="Header">
            <div className="Header-container">
                <div className="Header-content">
                    <div className="Header-logo">
                        <Link to="/">
                            <h1>Patitas</h1>
                        </Link>
                    </div>
                    <div className="Header-nav">
                        <Nav showModal={showModal}/>
                    </div>
                </div>
            </div>
            <Modal show={modal}
            close={showModal}
            >
                {props.login ? 
            <Form/>
            :
            <div className="Modal-login">
                <Login />
            </div>    
            }
            </Modal>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(Header);