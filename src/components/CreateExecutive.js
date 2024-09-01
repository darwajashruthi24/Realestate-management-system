import { Component } from "react";
import { FormGroup, Label, Input, FormFeedback, Col, Form, Button } from "reactstrap";
import axios from "axios";
class CreateExecutive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            executiveName: "",
            email: "",
            contact: "",
            locality: "",
            touched: {
                email: false,
                executiveName: false,
                contact: false,
                locality: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
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
        try {

            let instance = axios.create();
            instance.defaults.headers.common['Authorization'] = localStorage.getItem("token");
            const res = await instance.post("http://localhost:8083/manager/create",
                {
                    "contactnumber": this.state.contact,
                    "name": this.state.executiveName,
                    "locality": this.state.locality,
                    "email": this.state.email
                }
            );
            console.log(res);
            console.log(res.data);
        }
        catch (err) {
            // if (!err?.response) {
            //     setErrMsg('No Server Response');
            // } else {
            //     setErrMsg('Login Failed')
            // }
            console.log(err.response);
        }

        this.setState({ loggedInCustomer: true })
        alert(JSON.stringify(this.state));
    }

    validate(executiveName, email, contact, locality) {
        const errors = {
            email: '',
            executiveName: '',
            contact: '',
            locality: ''
        };
        if (this.state.touched.email && email.length <= 0) {
            errors.email = "email can't be empty";
        }
        if (this.state.touched.email && email.split("").filter((x) => x === "@").length !== 1) {
            errors.email = "Email should contain a @";
        }
        if (this.state.touched.contact && contact.length !== 10) {
            errors.contact = "Contact Number should be 10 digits";
        }
        if (this.state.touched.locality && locality.length <= 0) {
            errors.locality = "Locality can't be empty";
        }
        if (this.state.touched.executiveName && executiveName.length <= 0) {
            errors.executiveName = "Name can't be empty";
        }

        return errors;
    }

    render() {
        const errors = this.validate(
            this.state.executiveName,
            this.state.email,
            this.state.contact,
            this.state.locality
        );
        return (
            <div id="signupDiv">
                <Form id="createExecutive" className="mt-10">
                    <FormGroup row>
                        <Label htmlFor="name" className="text-success" md={3}>Name</Label>
                        <Col md={9}>
                            <Input type="text" id="executiveName" name="executiveName"
                                placeholder="Enter executive name"
                                value={this.state.executiveName}
                                valid={errors.executiveName === '' && this.state.touched.email}
                                invalid={errors.executiveName !== ''}
                                onBlur={this.handleBlur('executiveName')}
                                onChange={this.handleChange} required />
                            <FormFeedback>{errors.executiveName}</FormFeedback>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="email" className="text-success" md={3}>Email</Label>
                        <Col md={9}>
                            <Input type="email" id="email" name="email"
                                placeholder="Enter your email"
                                value={this.state.email}
                                valid={errors.email === '' && this.state.touched.email}
                                invalid={errors.email !== ''}
                                onBlur={this.handleBlur('email')}
                                onChange={this.handleChange} required />
                            <FormFeedback>{errors.email}</FormFeedback>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlFor="contactNumber" className="text-success" md={3}>Contact Number</Label>
                        <Col md={9}>
                            <Input type="text" id="contact" name="contact"
                                placeholder="Enter your contact number"
                                value={this.state.contact}
                                valid={errors.contact === '' && this.state.touched.contact}
                                invalid={errors.contact !== ''}
                                onBlur={this.handleBlur('contact')}
                                onChange={this.handleChange} required />
                            <FormFeedback>{errors.contact}</FormFeedback>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label className="text-success" md={3}>Locality</Label>
                        <Col md={9}>
                            <Input type="text" id="locality" name="locality"
                                placeholder="Enter executive's locality "
                                value={this.state.locality}
                                valid={errors.locality === '' && this.state.touched.locality}
                                invalid={errors.locality !== ''}
                                onBlur={this.handleBlur('locality')}
                                onChange={this.handleChange} required />
                            <FormFeedback>{errors.locality}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <Button type="button" onClick={this.handleSubmit} className="btn-lg ml-auto mr-auto" >Submit</Button> <br />
                </Form>
            </div>
        );
    }

}

export default CreateExecutive;