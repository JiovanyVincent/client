import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { logo } from '../assets/formation-anion-chlorure.png';
 
const initialState = {
    username: "",
    password: "",
    errors: {
        usernameError: "",
        passwordError: "",
    }
}

export class Formulary extends React.Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox= event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    }

    // handleUserChange(event) {
    //     this.setState({ username: event.target.value });
    // }

    // handlePwdChange(event) {
    //     this.setState({ password: event.target.value });
    // }

    validate = () => {
        const regexUsername = /^[a-zA-Z]+(([-][a-zA-Z ])?[a-zA-Z]*)*$/g;
        let nameError;

        if (!this.state.username !== regexUsername) {
            nameError = "erreur";
        }

        if (nameError) {
            this.setState({ errors: { usernameError: nameError } });
            return false;
        }
        return true;
    }

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState({ initialState });
        }
    }

    render() {
        return (
            <div className="container d-flex justify-content-center container-form">
                <img src={{ logo }} alt="cookies" />
                <form onSubmit={this.handleSubmit}>
                    <div className="d-flex flex-column align-items-center">
                        <div className="container-icon d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faUser} className="icon-user" />
                        </div>
                        <h4>Sign-in</h4>
                    </div>
                    <div className="form-group">
                        <label>
                            Username:
                            <input
                                name="username"
                                id="username"
                                type="text"
                                className="form-control"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                            <small 
                                style={{ color: "red" }}
                                className="form-text"
                            >{this.state.errors.usernameError}
                            </small>

                            Password:
                            <input
                                name="pwd"
                                id="pwd"
                                type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <small>{this.state.errors.pwdError}</small>
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Soumettre</button>
                </form>
            </div>
        );
    }
}
