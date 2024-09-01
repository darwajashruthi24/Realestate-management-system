import  '../customcss.css';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

export function PropertyTypes(props){

    const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
    return(
    <div className="container-fluid">
     <h1 className="mt-5 title-header"><span className='first-letter'>P</span>roperties<span className='first-letter ml-5'> A</span>vailable</h1>
     <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Residential Property</AccordionHeader>
          <AccordionBody accordionId="1">
            In a residential area, you’ll find more homes, condos, and apartment buildings than other types of properties although you may find businesses, manufacturers, properties other than homes and dwellings.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Agricultural Property</AccordionHeader>
          <AccordionBody accordionId="2">
          Agricultural land is typically land devoted to agriculture, the systematic and controlled use of other forms of life—particularly the rearing of livestock and production of crops—to produce food.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Commercial Property</AccordionHeader>
          <AccordionBody accordionId="3">
          Commercial property, also called commercial real estate, investment property or income property, is real estate intended to generate a profit, either from capital gains or rental income.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
    </div>
    );
}
