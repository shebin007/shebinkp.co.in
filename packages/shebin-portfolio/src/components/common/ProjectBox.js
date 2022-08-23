import { styled } from 'frontity';
import laravelIcon from '../../assets/images/laravel.svg';
const ProjectBox = (props) => {
    return(
        <ProjectBoxContent>
            <img src={props.image}/>
            <h2 className="Count">{props.count}+</h2>
        </ProjectBoxContent>
    );
}

export default ProjectBox;


const ProjectBoxContent = styled.div`
    display: flex;
    align-items: center;
    width: 45%;
    padding-bottom: 10%;
    img {
        margin-right: 20px;
        min-width: 50%;
    }
    `;