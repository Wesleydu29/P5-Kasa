import '../styles/Gallery.css'
import ApartmentList from '../datas/ApartmentList.json'

function Gallery() {
    return(
        <div className='gallery-container'>
            <ul className='gallery'>
                    {ApartmentList.map((apartment) => (
                        <li key={apartment.id} className='apartment-card'>
                            <img src={apartment.cover} className='image-card'></img>
                            <h2>{apartment.title}</h2>
                        </li>
                    ))}

            </ul>
        </div>
    )

}
export default Gallery