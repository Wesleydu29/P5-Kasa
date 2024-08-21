import Banner from "../components/Banner"
import Gallery from "../components/Gallery"
import image from "../assets/Image_source_1.png"

function Home() {
    return(
        <>
            <Banner title="Chez vous, partout et ailleurs" src={image}/>
            <Gallery/>
        </>

    )
}
export default Home