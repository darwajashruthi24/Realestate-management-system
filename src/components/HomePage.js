import { CarouselHeader } from './CarouselHeader';
import { Services } from './Services';
import { PropertyTypes } from './PropertyTypes';

export function HomePage(){
    return(
        <div>
             <CarouselHeader></CarouselHeader>
            <Services />
            <PropertyTypes />
        </div>
            

    );
}