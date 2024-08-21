import '../styles/Gallery.scss'
import ApartmentList from '../datas/ApartmentList.json'
import { Link } from 'react-router-dom'

function Gallery() {
    return(
        <div className='gallery-container'>
            <ul className='gallery'>
                    {ApartmentList.map((apartment) => (
                        <li key={apartment.id} className='apartment-card'>
                            <img src={apartment.cover} className='image-card'></img>
                            <div className='card-gradient'></div>
                            <Link to={`/apartment/${apartment.id}`}>{apartment.title}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}
export default Gallery