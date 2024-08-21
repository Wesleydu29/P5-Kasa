import '../styles/Gallery.scss'
import ApartmentList from '../datas/ApartmentList.json'
import { Link } from 'react-router-dom'

function Gallery() {
    return (
        <div className='gallery-container'>
            <ul className='gallery'>
                {ApartmentList.map((apartment) => (
                    <li key={apartment.id} className='apartment-card'>
                        <Link to={`/apartment/${apartment.id}`} className='apartment-link'>
                            <img src={apartment.cover} className='image-card' alt={apartment.title} />
                            <div className='card-gradient'></div>
                            <span className='appartment-title'>{apartment.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Gallery;
