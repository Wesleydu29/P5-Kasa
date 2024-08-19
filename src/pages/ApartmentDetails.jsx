import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import ApartmentList from '../datas/ApartmentList.json';
import Error from './Error';
import CarouselBanner from '../components/CarouselBanner'; // Importez le CarouselBanner


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
        <div>
            <Header />
            {/* Utilisez CarouselBanner ici */}
            <CarouselBanner images={apartment.pictures} className="apartment-banner" />
            <Footer />
        </div>
    );
}

export default ApartmentDetails;