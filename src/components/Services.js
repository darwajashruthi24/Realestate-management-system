import  '../customcss.css';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';

export function Services(props){
    return(
    <div className="container-fluid">
        <h1 className="mt-5 title-header"><span className='first-letter'>O</span>ur <span className='first-letter ml-5'>S</span>ervices</h1>
        <div className='row mt-5'>
            <div className='col-12 col-md-4'>
            <Card>
                   <img alt="Sample" src="../assets/images/services1.jpeg"/> 
            </Card>
            </div>
            <div className='col-12 col-md-8 service-description'>
                <Card>
                    <CardHeader>
                    <h1 className='subtitle-header mt-2 '>Skilled Agents</h1>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                        <ul>
                <li>We provide skilled real estate agents across the cities.</li>
                <li>Withtin no time, once your requirement is posted, you get executives assigned.</li>
                <li>All the real estate agents are above 4 star rated.</li>
                <li>We ensure that the agents are always available to solve your queries.</li>
            </ul>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-12 col-md-8 service-description'>
                <Card>
                    <CardHeader>
                    <h1 className='subtitle-header mt-2'>Personalized Search</h1>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                        <ul>
                <li>We provide skilled real estate agents across the cities.</li>
                <li>Withtin no time, once your requirement is posted, you get executives assigned.</li>
                <li>All the real estate agents are above 4 star rated.</li>
                <li>We ensure that the agents are always available to solve your queries.</li>
            </ul>
                        </CardText>
                    </CardBody>
                </Card>
            
            
            </div>
            <div className='col-12 col-md-4'>
            <Card>
                   <img alt="Sample" src="../assets/images/services2.jpg"/> 
            </Card>
            </div>
        </div>
    </div>
    );
}