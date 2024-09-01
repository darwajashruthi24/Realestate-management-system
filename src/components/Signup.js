import { Component } from "react";
import '../customcss.css';
import { FormGroup, Label, Input, FormFeedback, Col, Form, Button, Card } from "reactstrap";
import CustomerProfile from "./CustomerProfile";
import axios from "axios";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      password: "",
      confirmPassword: "",
      email: "",
      address: "",
      state: "",
      city: "",
      pincode: "",
      country: "",
      propertyType: "",
      locality: "",
      budget: "",
      contactNumber: "",
      touched: {
        username: false,
        password: false,
        confirmPassword: false,
        email: false,
        address: false,
        state: false,
        city: false,
        country: false,
        pincode: false,
        contactNumber: false,
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  validate(username, password, confirmPassword, email, contactNumber, address) {
    const errors = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      contactNumber: ""
    };
    if (this.state.touched.username && username.length <= 0) {
      errors.username = "Username can't be empty";
    }
    if (this.state.touched.username && username.length > 8) {
      errors.username = "Username can't have more than 8 characters";
    }
    if (this.state.touched.password && password.length <= 0) {
      errors.password = "Password can't be empty";
    }
    if (this.state.touched.password && password.length > 8) {
      errors.password = "Password can't have more than 8 characters";
    }
    if (this.state.touched.confirmPassword && password !== confirmPassword) {
      errors.confirmPassword = "Password and Confirm Password must be same";
    }
    if (this.state.touched.email && email.split("").filter((x) => x === "@").length !== 1) {
      errors.email = "Email should contain a @";
    }
    if (this.state.touched.contactNumber && contactNumber.length !== 10) {
      errors.contactNumber = "Contact Number should be 10 digits";
    }
    if (this.state.touched.address && address.length <= 0) {
      errors.address = "Address can't be empty";
    }
    return errors;
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  async handleSubmit() {
    const response = await axios.post("http://localhost:8081/customer/create",
      {
        "name": this.state.username,
        "address": this.state.address,
        "country": this.state.country,
        "state": this.state.city,
        "city": this.state.city,
        "pincode": this.state.pincode,
        "emailId": this.state.email,
        "contactNumber": this.state.contactNumber,
        "propertyType": this.state.propertyType,
        "budget": this.state.budget,
        "locality": this.state.locality,
        "password": this.state.password
      }
    )
    console.log(response.data);
    this.setState({ authenticated: true });
    alert(JSON.stringify(this.state));
  }

  render() {
    const errors = this.validate(
      this.state.username,
      this.state.password,
      this.state.confirmPassword,
      this.state.email,
      this.state.contactNumber,
      this.state.address
    );
    if (this.state.authenticated === true) {
      <CustomerProfile details="test" />
    } else {
      return (
        <div id="signupDiv container">
          <div className="row mt-4">
            <div className="col-12 col-md-6 offset-md-3">
              <Card className="p-3">
                <Form id="signupForm" className="mt-10">
                  <h1>Sign Up</h1>

                  <FormGroup row>
                    <Label htmlFor="username" md={3}>Username</Label>
                    <Col md={6}>
                      <Input type="text" id="username" name="username"
                        placeholder="Enter your username"
                        value={this.state.username}
                        valid={errors.username === '' && this.state.touched.username}
                        invalid={errors.username !== ''}
                        onBlur={this.handleBlur('username')}
                        onChange={this.handleChange} required />
                      <FormFeedback>{errors.email}</FormFeedback>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor="email" md={3}>Email</Label>
                    <Col md={6}>
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
                    <Label htmlFor="password" md={3}>Password</Label>
                    <Col md={6}>
                      <Input type="password" id="password" name="password"
                        placeholder="Enter your password"
                        value={this.state.password}
                        valid={errors.password === '' && this.state.touched.password}
                        invalid={errors.password !== ''}
                        onBlur={this.handleBlur('password')}
                        onChange={this.handleChange} required />
                      <FormFeedback>{errors.password}</FormFeedback>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor="confirmPassword" md={3}>Confirm Password</Label>
                    <Col md={6}>
                      <Input type="password" id="confirmPassword" name="confirmPassword"
                        placeholder="Confirm your password"
                        value={this.state.confirmPassword}
                        valid={errors.confirmPassword === '' && this.state.touched.confirmPassword}
                        invalid={errors.confirmPassword !== ''}
                        onBlur={this.handleBlur('confirmPassword')}
                        onChange={this.handleChange} required />
                      <FormFeedback>{errors.confirmPassword}</FormFeedback>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor="contactNumber" md={3}>Contact Number</Label>
                    <Col md={6}>
                      <Input type="text" id="contactNumber" name="contactNumber"
                        placeholder="Enter your contact number"
                        value={this.state.contactNumber}
                        valid={errors.contactNumber === '' && this.state.touched.contactNumber}
                        invalid={errors.contactNumber !== ''}
                        onBlur={this.handleBlur('contactNumber')}
                        onChange={this.handleChange} required />
                      <FormFeedback>{errors.contactNumber}</FormFeedback>
                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Label htmlFor="address" md={3}>Address</Label>
                    <Col md={6}>
                      <Input type="text" id="address" name="address"
                        placeholder="Enter your address"
                        value={this.state.address}
                        valid={errors.address === '' && this.state.touched.address}
                        invalid={errors.address !== ''}
                        onBlur={this.handleBlur('address')}
                        onChange={this.handleChange} required />
                      <FormFeedback>{errors.address}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="city" md={3}>City</Label>
                    <Col md={6}>
                      <Input type="text" id="city" name="city"
                        placeholder="Enter your city"
                        value={this.state.city}
                        valid={errors.city === '' && this.state.touched.city}
                        invalid={errors.city !== ''}
                        onBlur={this.handleBlur('city')}
                        onChange={this.handleChange} required />
                      <FormFeedback>{errors.city}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="state" md={3}>State</Label>
                    <Col md={6}>
                      <Input type="text" id="state" name="state"
                        placeholder="Enter your state"
                        value={this.state.state}
                        valid={errors.state === '' && this.state.touched.state}
                        invalid={errors.state !== ''}
                        onBlur={this.handleBlur('state')}
                        onChange={this.handleChange} required />
                      <FormFeedback>{errors.state}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="country" md={3}>Country</Label>
                    <Col md={6}>
                      <Input type="text" id="country" name="country"
                        placeholder="Enter your country"
                        value={this.state.country}
                        valid={errors.country === '' && this.state.touched.country}
                        invalid={errors.country !== ''}
                        onBlur={this.handleBlur('country')}
                        onChange={this.handleChange} required />
                      <FormFeedback>{errors.country}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="pincode" md={3}>Pincode</Label>
                    <Col md={6}>
                      <Input type="text" id="pincode" name="pincode"
                        placeholder="Enter your pincode"
                        value={this.state.pincode}
                        valid={errors.pincode === '' && this.state.touched.pincode}
                        invalid={errors.address !== ''}
                        onBlur={this.handleBlur('pincode')}
                        onChange={this.handleChange} required />
                      <FormFeedback>{errors.pincode}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="propertyType" md={3}>What type of property are you looking for?</Label>
                    <Col md={6}>
                      <Input id="propertyType" name="propertyType" type="select" onChange={this.handleChange} value={this.state.propertyType} required>
                        <option>Agricultural</option>
                        <option>Residential</option>
                        <option>Land</option>
                        <option>Commercial</option>
                        <option>Mixed</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="budget" md={3}>What is your budget?</Label>
                    <Col md={6}>
                      <Input type="text" id="budget" name="budget" placeholder="Enter your budget" value={this.state.budget}
                        onChange={this.handleChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="locality" md={3}>Which locality are you looking for?</Label>
                    <Col md={6}>
                      <Input type="text" id="locality" name="locality" value={this.state.locality} onChange={this.handleChange} required />
                    </Col>
                  </FormGroup>
                  <Button type="button" outline onClick={this.handleSubmit} className="btn-lg ml-auto mr-auto" >Submit</Button><br />
                </Form>

                <span>Already have an account?</span>
                <a href='/customerlogin'>Login</a>

              </Card>
            </div>
          </div>
        </div>
      );
    }

  }
}
export { Signup };
