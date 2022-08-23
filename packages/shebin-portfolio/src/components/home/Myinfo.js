import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { styled } from 'frontity';
import RangeSlider from '../common/RangeSlider';
import ProjectBox from '../common/ProjectBox';

import LaravelIcon from '../../assets/images/laravel.svg';
import WordpressIcon from '../../assets/images/wordpress.png';

const green = '#6CF2A4';



const Myinfo = () => {
    
    return(
        <div className="container" >
            <Tabs
            defaultTab="one"
            onChange={(tabId) => { console.log(tabId) }}
            >
                <MyinfoContainer>
                   
                    <TabList className="tablist">
                        <Tab tabFor="one">
                            <h2 className="title-sm">Introduction</h2>
                            <p className="para">Small description about my self</p>
                        </Tab>
                        <Tab tabFor="two">
                            <h2 className="title-sm">My Skills</h2>
                            <p className="para">Skill chart</p>
                        </Tab>
                        <Tab tabFor="three">
                            <h2 className="title-sm">My Projects</h2>
                            <p className="para">Category based project count</p>
                        </Tab>
                    </TabList>

                    <div className="myinfo-content">
                        <TabPanel tabId="one">
                            <h3 className='title-sm'>Hello !</h3>
                            <h2 className="title-large">I’m Shebin KP</h2>

                            <p className="para">
                                Passionate tech enthusiast, fast learner , B tech graduate.
                            </p>
                            <p className="para">
                                Started career by customizing wordpress.Now i can make wordpress themes , plugins etc.
                            </p>
                            <p className="para">Not just a wordpress developer I’m also laravel,react,frontity,node the list goes on in web development i’m contiously upgrading myself with new technology. </p>
                        </TabPanel>
                        <TabPanel tabId="two">
                            <h2 className="title-large">My Skills</h2>
                            <h3 className="title-sm">#PHP,Mysql,Laravel,Wordpress</h3>
                            <RangeSlider percentage='95' className="range-slider"/>
                            <h3 className="title-sm">#JS,#React,#frontity</h3>
                            <RangeSlider percentage='90' className="range-slider"/>
                            <h3 className="title-sm">#CSS,#SASS,#Bootstrap</h3>
                            <RangeSlider percentage='95' className="range-slider"/>
                            <h3 className="title-sm">#HTML</h3>
                            <RangeSlider percentage='95' className="range-slider"/>
                        </TabPanel>
                        <TabPanel tabId="three">
                             <h2 className='title-large'>Project count</h2>   
                             <div className='projectBoxContainer-div'>
                                <ProjectBox image={LaravelIcon} count='3' />
                                <ProjectBox image={WordpressIcon} count='3' />
                                <ProjectBox image={WordpressIcon} count='3' />
                                <ProjectBox image={WordpressIcon} count='3' />
                             </div>
                        </TabPanel>
                    </div>
                    
                </MyinfoContainer>
               
        </Tabs>

        </div>
        
    
    
    );
    
}


export default Myinfo;



const MyinfoContainer = styled.div`
        display:flex;
        align-items: flex-start;
        padding: 14% 0px 15%;
        margin:auto;
        max-width:90%;
        position: relative;
        &::after{
            content: "";
            height: 2px;
            width: 100%;
            position: absolute;
            bottom: 0px;
            left:0px;
            background: #fff;
        }
        .tablist{
            display: flex;
            flex-direction: column;
            width : 38%;
            margin-right: auto;
            button {
                background-color: #2D2F33;
                border: none;
                margin-bottom: 10px;
                height: 130px;
                border-radius: 20px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
                text-align:left;
                padding:0px 25px;
                .title-sm{
                    margin-bottom: 15px;
                }
                &[aria-selected="true"] {
                    .title-sm{
                        color : ${green};
                    }
                }
            }
            
        }
        .myinfo-content {
            width: 35%;
            height: 100%;
            margin: auto 0px;
            .title-sm{
                margin-bottom:1em;
            }
            .title-large{
                margin-bottom: .9em;
            }
            .para {
                margin-bottom: 1em;
            }
            .projectBoxContainer-div{
                display:flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-bottom: 5%;
            }
            .range-slider{
                margin-bottom: 30px;
                &:last-child{
                    margin-bottom:0px;
                }
            }
        }
    `;