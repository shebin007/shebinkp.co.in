import React from 'react';

import logo  from '../../assets/images/logo.png';
import { styled  } from 'frontity';


const Header = (props) => {
    return(
        <HeaderDiv data={props.class ? props.class : ''}>
            <div className="container">
                <div className="logo-container">
                    <img src={logo} />
                </div>
            </div>
            
        </HeaderDiv>
    )
}

export default Header;




const HeaderDiv = styled.header`
    background-color: ${props  => props.data == "home" ? "#2D2F33" : ""  } ;
    padding:25px;
    .logo-container{
        max-width : 50px;
    }
`;