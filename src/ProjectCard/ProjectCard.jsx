import "./ProjectCard.css"
import { Col } from "react-bootstrap"

const ProjectCard = (props) => {
  return (
    <Col sm={ 6 } md={ 4 } >
       <a href={props.href}> 
          <div className="proj-imbox">
            <img className="image" src={props.image } alt="imgUrl" />
              <div className="proj-txt">
                  <h4>{props.title }</h4>
                  <span>{ props.description }</span>
                  
              </div>
          </div>
          
      </a>
    </Col>
  )
}

export default ProjectCard
