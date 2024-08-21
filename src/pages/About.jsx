
import Banner from "../components/Banner"
import image from "../assets/Image source 2.png"
import Collapse from "../components/Collapse"
import '../styles/Collapse.scss'
import '../styles/About.scss'


function About() {

    const aboutData = [
        {
          title: "Fiabilité",
          content: `
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          `,
        },
        {
          title: "Respect",
          content: `
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.
          `,
        },
        {
          title: "Service",
          content: `
            Nos équipes se tiennent à votre disposition pour vous offir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          `,
        },
        {
          title: "Sécurité",
          content: `
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          `,
        }
      ];
    return(
        <>
        <Banner className="banner-about" src={image}/>
        <div>
          <ul className="container-collapse">
            {aboutData.map(({title, content}) =>(
              <Collapse key={title}
              title={title}
              content={content}/>
            ))}
          </ul>
        </div>
        </>

    )
}
export default About