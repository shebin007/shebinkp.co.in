import { styled } from "frontity";


const green = '#6CF2A4';

const RangeSlider = (props) => {

    return(
        <div  className={props.className ? props.className : '' }>
            <RangeSliderContainer percentage={props.percentage ? props.percentage :  '0' }>

            </RangeSliderContainer>
            <h5 className="title-sm" style={{textAlign: 'right' }}>{props.percentage ? props.percentage :  '0' }%</h5>
        </div>
    );


   
}







    
export default RangeSlider;

const RangeSliderContainer = styled.div`
    width: 100%;
    height: 12px;
    background-color: #fff ;
    border-radius: 10px;
    position: relative;
    overflow:hidden;
    margin-bottom : 10px;
    &:before{
        content: "";
        background-color: ${green};
        position:absolute;
        width: ${ props => props.percentage}%;
        height: 100%;
        left: 0px;
        border-radius: 10px;
    }
`;