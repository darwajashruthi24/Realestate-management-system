import { Component } from "react";
import { FormGroup, Label, Input, FormFeedback, Col, Form, Button } from "reactstrap";
import axios from "axios";
class AssignExecutive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            executiveId: "",
            customerId: "",
            touched: {
                executiveId: false,
                customerId: false,
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
        console.log(this.state.customerId);
        console.log(this.state.executiveId);
        let instance = axios.create();
        instance.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        const res = await instance.put("http://localhost:8083/manager/assignexecutive",
            {
                "custId": this.state.customerId,
                "executiveId": this.state.executiveId,

            }
        );

        console.log(res);
        console.log(res.data);


        this.setState({ loggedInCustomer: true })
        alert(JSON.stringify(this.state));
    }

    validate(executiveId, customerId) {
        const errors = {
            executiveId: '',
            customerId: ''
        };
        if (this.state.touched.executiveId && executiveId.length <= 0) {
            errors.executiveId = "Executive Id  can't be empty";
        }
        if (this.state.touched.customerId && customerId.length <= 0) {
            errors.customerId = "Customer Id can't be empty";
        }

        return errors;
    }

    render() {
        const errors = this.validate(
            this.state.executiveId,
            this.state.customerId,
        );
        return (
            <div id="signupDiv">
                <Form id="assignExecutive" className="mt-10">

                    <FormGroup row>
                        <Label className="text-success" md={3}>Executive ID</Label>
                        <Col md={9}>
                            <Input type="text" id="executiveId" name="executiveId"
                                placeholder="Enter executive ID"
                                value={this.state.executiveId}
                                valid={errors.executiveId === '' && this.state.touched.executiveId}
                                invalid={errors.executiveId !== ''}
                                onBlur={this.handleBlur('executiveId')}
                                onChange={this.handleChange} required />
                            <FormFeedback>{errors.executiveId}</FormFeedback>
                        </Col>
                    </FormGroup>


                    <FormGroup row>
                        <Label className="text-success" md={3}>Customer ID</Label>
                        <Col md={9}>
                            <Input type="text" id="customerId" name="customerId"
                                placeholder="Enter customer ID to be assigned"
                                value={this.state.customerId}
                                valid={errors.customerId === '' && this.state.touched.customerId}
                                invalid={errors.customerId !== ''}
                                onBlur={this.handleBlur('customerId')}
                                onChange={this.handleChange} required />
                            <FormFeedback>{errors.customerId}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <Button type="button" onClick={this.handleSubmit} className="btn-lg" >Submit</Button> <br />
                </Form>
            </div>
        );
    }

}

export default AssignExecutive;