import { Component } from "react";
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from "reactstrap";

class Properties extends Component{
    constructor(props){
        super(props);
        this.state ={
            properties: [
                {
                    id:0,
                    propertyType: "propertyType",
                    budget:"budget",
                    locality:"locality",
                    age:"age",
                    availabiliy:"availabiliy",
                    description:"description"
                },
                {
                    id:0,
                    propertyType: "propertyType",
                    budget:"budget",
                    locality:"locality",
                    age:"age",
                    availabiliy:"availabiliy",
                    description:"description"
                },
                {
                    id:0,
                    propertyType: "propertyType",
                    budget:"budget",
                    locality:"locality",
                    age:"age",
                    availabiliy:"availabiliy",
                    description:"description"
                },
                {
                    id:0,
                    propertyType: "propertyType",
                    budget:"budget",
                    locality:"locality",
                    age:"age",
                    availabiliy:"availabiliy",
                    description:"description"
                } 
            ]
        }
    }
    render(){
        let properiesFoundList = this.state.properties.map((property) =>{
            return(
                <div className="col-12 col-md-4 col-lg-3">
                <Card>
                 <img alt="Sample"  src="./assets/images/propertyimg.jpg" />
                <CardBody key={property.id}>
                 <CardTitle tag="h5"> {property.propertyType} </CardTitle>
                 <CardSubtitle className="mb-2 text-muted" tag="h6">{property.budget}</CardSubtitle>
                <CardText> {property.description}</CardText>
                </CardBody>
                </Card>
                </div>
            );
        })
        if(this.props.searching){
            return(
                <div className="container">
                    <div className="row">
                    {properiesFoundList}
                    </div>
                </div>
            );
         }
        }

}

export default Properties;