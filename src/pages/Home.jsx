import Banner from "../components/Banner"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import image from "../assets/Image_source_1.png"

function Home() {
    return(
        <div>
            <Header/>
            <Banner title="Chez vous, partout et ailleurs" src={image}/>
            <Gallery/>
            <Footer/>
        </div>

    )
}
export default Home