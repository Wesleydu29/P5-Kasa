import React from 'react';
import { useParams } from 'react-router-dom';
import ApartmentList from '../datas/ApartmentList.json';
import Error from './Error';
import CarouselBanner from '../components/CarouselBanner';
import Collapse from '../components/Collapse';
import Rating from '../components/Listings/Rating';
import '../styles/ApartmentDetails.scss'
import ApartmentInfo from '../components/Listings/ApartmentInfo';


function ApartmentDetails() {
    const { id } = useParams();
    const apartment = ApartmentList.find((apartment) => apartment.id === id);

    if (!apartment) {
        return (
            <div>
                <Error />
            </div>
        );
    }

    return (
        <>
            <CarouselBanner images={apartment.pictures} className="apartment-banner" />
            <div className="apartment-info-container">
                <ApartmentInfo title={apartment.title} location={apartment.location} tags={apartment.tags}/>
                <Rating name={apartment.host.name} rating={apartment.rating} picture={apartment.host.picture}/>
            </div>
            <div className="container-collapse-apartment">
                <Collapse  className="collapse-apartment" title="Description" content={apartment.description}/>
                <Collapse  className="collapse-apartment" title="Équipement" 
                content={
                <ul>
                    {apartment.equipments.map((equipments, index) =>(
                        <li key={index}>{equipments}</li>
                    ))}
                    </ul>
                }
                />
            </div>
        </>
    );
}

export default ApartmentDetails;