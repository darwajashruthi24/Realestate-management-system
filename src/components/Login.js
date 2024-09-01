import { Component } from "react";
import '../customcss.css';
import { Button, Form, Input, FormFeedback, Card } from "reactstrap";
import CustomerProfile from "./CustomerProfile";
import ManagerProfile from "./ManagerProfile";
import axios from "axios";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entity: this.props.entity,
            email: "",
            password: "",
            authenticated: false,
            touched: {
                email: false,
                password: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    validate(email, password) {
        const errors = {
            email: '',
            password: ''
        };
        if (this.state.touched.email && email.length <= 0) {
            errors.email = "email can't be empty";
        }
        if (this.state.touched.password && password.length <= 0) {
            errors.password = "Password can't be empty";
        }
        return errors;
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    async handleSubmit() {

        const response = await axios.post("http://localhost:8400/auth/authenticate",
            {
                "userName": this.state.email,
                "password": this.state.password
            }
        )
        // console.log(response)
        console.log(response.data.token);
        let token = "Bearer " + response.data.token;

        const res = await axios.get("http://localhost:8400/auth/userid/" + this.state.email);

        console.log(res);
        console.log(res.data);
        localStorage.setItem("id", res.data);
        localStorage.setItem("token", token);

        this.setState({ authenticated: true })
        alert(JSON.stringify(this.state));

    }

    render() {
        const errors = this.validate(this.state.email, this.state.password);
        if (this.state.entity === "customer" && this.state.authenticated) {
            return <CustomerProfile />
        }
        if (this.state.entity === "manager" && this.state.authenticated) {
            return <ManagerProfile />
        }
        else {
            return (
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 offset-md-3">
                            <Card id="loginCard" className="p-5 mt-4">
                                <Form id="loginForm" className="pb-5">
                                    <h1 className="p-2">Login</h1>
                                    <Input type="text" className="m-auto mb-2" placeholder="Enter your email or username" name="email" value={this.state.email}
                                        onChange={this.handleChange} onBlur={this.handleBlur('email')} valid={errors.email === '' && this.state.touched.email} invalid={errors.email !== ''}
                                        required />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                    <Input type="password" className="m-auto mb-2" placeholder="Enter your password" name="password" value={this.state.password}
                                        onChange={this.handleChange} onBlur={this.handleBlur('password')} valid={errors.password === '' && this.state.touched.password} invalid={errors.password !== ''}
                                        required />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                    <Button className="btn-custom mt-3" style={{ backgroundColour: "#79FC79" }} type="button" onClick={this.handleSubmit} size="lg"> Submit  </Button>
                                    <br />
                                    <span className="text-muted">Don't have an account? </span>
                                    <a href="/registercustomer">Signup</a>
                                </Form>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default Login;