import { styled } from "frontity";



  // Variables 
  const white = '#FFFFFF';
  const green = '#6CF2A4';
  const dark = '#2D2F33';

const Button = () => {
    
  




    return (
        <ButtonContainer>
            <span>Lets</span> Chat 
        </ButtonContainer>
    );  
}

export default Button;

const ButtonContainer = styled.button`
    font-size: 20px;
    font-weight: 600;
    background: transparent;
    border: none;
    color:${white};
    z-index: 1;
    span{
        font-size: inherit;
        font-weight: inherit;
        color: ${dark};
        position: relative;
        z-index: 1;
        &:before{
            content:"";
            background: ${green};
            width:calc(100% + 10px);
            height:100%;
            position: absolute;
            z-index: -1;
            left: -10px;
            transition: all .5s ease;

        }
       
    }
   
  `;