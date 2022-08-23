import { styled } from 'frontity';
import bannerImg from '../../assets/images/banner.png';
import laravelIcon from '../../assets/images/laravel.svg';
import wordpressIcon from '../../assets/images/wordpress.png';
import reactlogo from '../../assets/images/react.png';

//Required Componenets
import Button from '../common/Button';



const Banner = () => {
    return(
        <BannerContainer>
            <div className="container">
                <div className="Banner-container">
                    <div className="content-Container">
                        <h2 className="title-sm dark-text">FullStack Developer</h2>
                        <h1 className="title-large">
                            Simplicity is the soul of efficiency.
                        </h1>
                        <Button />
                    </div>
                    <div className="image-container">
                        <img src={bannerImg}/>
                        <div className="circle small">
                            <img src={reactlogo} />
                        </div>
                        <div className="circle medium">
                            <img src={laravelIcon} />
                        </div>
                        <div className="circle large">
                            <img src={wordpressIcon} />
                        </div>
                    </div>
                </div>
                <div className="project-count">
                    <div className='projectBox'>
                        <h2 className="Count">
                            3+
                        </h2>
                        <h4 className="title-sm">
                            Years Experience
                        </h4>
                    </div>
                    <div className='projectBox'>
                        <h2 className="Count">
                            20+
                        </h2>
                        <h4 className="title-sm">
                            Projects Completed
                        </h4>
                    </div>
                </div>
                    
            </div>
        </BannerContainer>
        
    );
}

export default Banner;


const BannerContainer = styled.div`
    background-color: #2D2F33;
    display:flex;
    align-items: center;
    .Banner-container{
        display: flex;
        align-items: center;
        padding-top: 80px;
    }
    .content-Container{
        max-width: 45%;
        margin-right: auto;
    }
    .image-container{
        max-width:40%;
        width:100%;
        margin-left: auto;
        margin-right: 30px;
        position:relative;
        img{
            max-width:100%;
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
    .title-sm {
        margin-bottom: 1.5em;
    }
    .project-count {
        display: flex;
        align-items: center;
    }
    .projectBox {
        display: flex;
        align-items:center;
        margin-right: 25px;
        margin-bottom: 80px;
      
        .title-sm {
            max-width: 130px;
            margin:0px;
        }
    }

    .circle{
        border-radius:50%;
        position:absolute;
        min-width: 70px;
        max-width: 70px;
        min-height: 70px;
        max-height: 70px;
        background-color: #25262A;
        top: 0px;
        right: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            max-width:60%;
        }
        &.medium{
            min-width: 140px;
            min-height: 140px;
            max-width : 140px;
            max-height: 140px;
            top : unset;
            bottom: 50px;
            left: -30px;
        }
        &.large{
            min-width:200px;
            min-height:200px;
            max-width:200px;
            max-width:200px;
            top:unset;
            bottom: -80px;
        }
        
    }
   
   
`;  
