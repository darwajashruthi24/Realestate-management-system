import { Component } from "react";
import { Col, FormGroup, Label, Input, Button, Modal, ModalBody, ModalHeader, Table } from "reactstrap";
import '../customcssprofiles.css';
import CreateExecutive from "./CreateExecutive";
import AssignExecutive from "./AssignExecutives";
import axios from "axios";

class ManagerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      managerUsername: "manager",
      isAuthenticated: true,
      executives: [],
      customers: [],
      propertyType: "",
      assignExceutivesToCustomer: [],
      executiveModal: false,
      customerModal: false,
      assignExecutiveModal: false,
      createExecutiveModal: false
    }
    this.toggleExecutiveModal = this.toggleExecutiveModal.bind(this);
    this.toggleCustomerModal = this.toggleCustomerModal.bind(this);
    this.toggleAssignExecutiveModal = this.toggleAssignExecutiveModal.bind(this);
    this.toggleCreateExecutiveModal = this.toggleCreateExecutiveModal.bind(this);
    this.instance = axios.create();
    this.instance.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  }
  async handleAllEmployes() {
    let instance = axios.create();

    instance.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    const result = await instance.get('http://localhost:8083/manager/allexecutives');
    console.log('generate token', localStorage.getItem('token'));
    console.log(result.data);
    this.setState({ executives: result.data })
  }



  async toggleExecutiveModal() {

    const res = await this.instance.get("http://localhost:8083/manager/allexecutives");
    console.log(res.data);
    this.setState({ executiveModal: !this.state.executiveModal })
  }
  async toggleCustomerModal() {
    const res = await this.instance.get("http://localhost:8083/manager/allcustomers");
    console.log(res.data);
    this.setState({ customerModal: !this.state.customerModal })
  }
  toggleAssignExecutiveModal() {
    this.setState({ assignExecutiveModal: !this.state.assignExecutiveModal })
    this.handleAllEmployes();
  }
  toggleCreateExecutiveModal() {
    this.setState({ createExecutiveModal: !this.state.createExecutiveModal })
  }

  render() {
    const executivesList = this.state.executives.map((e) => {
      return (
        <tr key={e.id}>
          <th scope="row">{e.id} </th>
          <td>{e.name} </td>
          <td>{e.email}</td>
          <td>{e.contactnumber}</td>
          <td>{e.locality}</td>
        </tr>
      );
    })

    const customersList = this.state.customers.map((c) => {
      return (
        <tr key={c.id}>
          <th scope="row">{c.id} </th>
          <td>{c.name} </td>
          <td>{c.email}</td>
          <td>{c.contactNumber}</td>
          <td>{c.address}</td>
          <td>{c.city}</td>
          <td>{c.budget}</td>
        </tr>
      );
    })

    return (
      <div className="container-fluid profileDiv" id="managerDiv">
        <div id="greenDiv" className="row">
          <h1>Welcome, {this.state.managerUsername}</h1>
          <img src="./assets/images/manageravatar.png" alt="img" className="profileimg" />
        </div>
        <div className="row profilerow2">
          <div className="col-12 col-md-6 offset-md-3">
            <h2>List of operations:-  </h2> <br />
            <Button className="mt-1" outline onClick={this.toggleExecutiveModal}>Search All Executives</Button> <br />
            <Button className="mt-1" outline onClick={this.toggleCustomerModal}>Search All Customers</Button> <br />
            <Button className="mt-1" outline onClick={this.toggleCreateExecutiveModal}>Create Executive</Button><br />
            <Button className="mt-1" outline onClick={this.toggleAssignExecutiveModal}>Assign Executive</Button><br />

          </div>
        </div>
        {/* Executives Modal  */}
        <Modal isOpen={this.state.executiveModal} toggle={this.toggleExecutiveModal} fullscreen>
          <ModalHeader toggle={this.toggleExecutiveModal}>All Executives</ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Label md={2}>Find By Locality</Label>
              <Col md={3}>
                <Input id="propertyType" name="propertyType" type="text" onChange={this.handleChange} value={this.state.executives} />
              </Col>
              <Col md={3}>
                <Button>Search</Button>
              </Col>
            </FormGroup>
            <Table hover>
              <thead>
                <tr>
                  <th>Executive ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Locality</th>
                </tr>
              </thead>
              <tbody>{executivesList}</tbody>
            </Table>
          </ModalBody>
        </Modal>

        {/* Customers Modal  */}
        <Modal isOpen={this.state.customerModal} toggle={this.toggleCustomerModal} fullscreen>
          <ModalHeader toggle={this.toggleCustomerModal}>All Customers</ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Label md={2}>Find By Customer ID</Label>
              <Col md={3}>
                <Input id="propertyType" name="propertyType" type="text" onChange={this.handleChange} value={this.state.executivesbyLocality} />
              </Col>
              <Col md={3}>
                <Button >Search</Button>
              </Col>
            </FormGroup>
            <Table hover>
              <thead>
                <tr>
                  <th>Customer ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Adress</th>
                  <th>City</th>
                  <th>Budget</th>
                </tr>
              </thead>
              <tbody>{customersList}</tbody>
            </Table>
          </ModalBody>
        </Modal>


        {/*Creating Executives Modal  */}
        <Modal isOpen={this.state.createExecutiveModal} toggle={this.toggleCreateExecutiveModal}>
          <ModalHeader toggle={this.toggleCreateExecutiveModal}>Create Executive</ModalHeader>
          <ModalBody>
            <CreateExecutive />
          </ModalBody>
        </Modal>




        {/*Assigning Executives Modal  */}
        <Modal isOpen={this.state.assignExecutiveModal} toggle={this.toggleAssignExecutiveModal}>
          <ModalHeader toggle={this.toggleAssignExecutiveModal}>Assign an  Executive</ModalHeader>
          <ModalBody>
            <AssignExecutive />
          </ModalBody>
        </Modal>
      </div>

    );
  }
}

export default ManagerProfile;