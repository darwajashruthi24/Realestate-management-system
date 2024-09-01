import { Component } from "react";
import { Button, Table } from "reactstrap";
import '../customcssprofiles.css';
import Properties from "./Properties";
import axios from "axios";
class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details,
      id: 0,
      isAuthenticated: true,
      name: "Neha Kumar",
      contactNumber: "8981600819",
      email: "nk@gmail.com",
      address: "38/1/H",
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
      propertyType: "Residential",
      locality: "Manicktala",
      budget: 4000,
      searching: false
    }
    this.setSearching = this.setSearching.bind(this);
  }

  async componentDidMount() {

    let instance = axios.create();
    instance.defaults.headers.common['Authorization'] = localStorage.getItem("token");
    const res = await instance.get("http://localhost:8081/customer/details/" + localStorage.getItem("id"))
    console.log(res)
    this.setState({
      name: res.data.name,

      contactNumber: res.data.contactNumber,
      email: res.data.emailId,
      address: res.data.address,
      city: res.data.city,
      state: res.data.state,
      country: res.data.country,
      propertyType: res.data.requirement.propertyType,
      locality: res.data.requirement.locality,
      budget: res.data.requirement.budget
    });
  }

  setSearching() {
    this.setState({ searching: true });
  }

  render() {
    return (
      <div className="container-fluid profileDiv">
        <div id="greenDiv" className="row">
          <h1>Welcome, {this.state.name}</h1>
          <img src="./assets/images/customeravatar2.png" alt="img" className="profileimg" />
        </div>
        <div className="row mb-3 profilerow2">
          <div className="col-12 col-md-3 offset-md-2">
            <Table className="mt-3">
              <tr>
                <th scope="row">Name:</th>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <th scope="row">Email:</th>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <th scope="row">Contact Number:</th>
                <td>{this.state.contactNumber}</td>
              </tr>
            </Table>

          </div>
          <div className="col-12 col-md-3">
            <Table className="mt-3">
              <tr>
                <th scope="row">State:</th>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <th scope="row">Country:</th>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <th scope="row">Pincode:</th>
                <td>{this.state.contactNumber}</td>
              </tr>
              <tr>
                <th scope="row">City:</th>
                <td>{this.state.city}</td>
              </tr>
            </Table>

          </div>
        </div>
        <div id="requirementsDiv" className="mt-3 mb-2 pt-4 pb-4">
          <h3>My current requirement</h3>
          <div className="row">
            <div className="col-12 col-md-5 col-lg-3">
              <Table className="mt-3">
                <tr>
                  <th scope="row">Property Type:</th>
                  <td>{this.state.propertyType}</td>
                </tr>
              </Table>
            </div>
            <div className="col-12 col-md-5 col-lg-3">
              <Table className="mt-3">
                <tr>
                  <th scope="row">Locality:</th>
                  <td>{this.state.locality}</td>
                </tr>
              </Table>
            </div>
            <div className="col-12 col-md-5 col-lg-3">
              <Table className="mt-3">
                <tr>
                  <th scope="row">Budget:</th>
                  <td>{this.state.budget}</td>
                </tr>
              </Table>
            </div>
          </div>
          <Button secondary className="btn-lg" onClick={this.setSearching}>Search</Button>
        </div>
        <Properties properties="propertyList" searching={this.state.searching} />
      </div>
    );
  }
}

export default CustomerProfile;