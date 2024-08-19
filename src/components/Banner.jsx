import '../styles/Banner.scss'

function Banner(props) {

    return(
        <div className={`banner ${props.className}`}>
            <img src={props.src}></img>
            <h1>{props.title}</h1>
        </div>

    )

}
export default Banner