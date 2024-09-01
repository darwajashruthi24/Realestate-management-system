import React, { useState } from 'react';import { Collapse, Navbar,NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button} from 'reactstrap';
import  '../customcss.css';

function AuthenticationButtons({isAuthenticated}){

      if(isAuthenticated){
        return(
           <NavLink  href="/logout" className="text-success"> <DropdownItem> <Button>Logout</Button></DropdownItem></NavLink> 
        );
      }else{
        return(
              <UncontrolledDropdown>
                <DropdownToggle className='dropdown-toggle'> Login </DropdownToggle>
             <DropdownMenu>
            <DropdownItem header> AS </DropdownItem>
             <NavLink className="hover-green"  href="/managerlogin" > <DropdownItem>Manager</DropdownItem></NavLink> 
             <NavLink  href="/customerlogin" className="hover-green"> <DropdownItem>Customer </DropdownItem></NavLink> 
             <NavLink  href="/registercustomer" className=" margin-right text-center nav-item" >Register</NavLink>
            </DropdownMenu>
            </UncontrolledDropdown>    
        )
      }
  
}


export function NavigationBar(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand  href="/" tag='h2'><img src='favicon.ico' alt="icon"/> Real Estate Management</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink  className='nav-item' href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className='nav-item'  href="/aboutus">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className='nav-item' href="/contactus">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className='nav-item' href="/profile">My Profile</NavLink>
            </NavItem>
           
            </Nav>   
            <AuthenticationButtons isAuthenticated={isAuthenticated} />
        </Collapse>
      </Navbar>
    </div>
  );
}