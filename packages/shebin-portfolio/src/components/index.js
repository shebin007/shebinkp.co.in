import React from 'react';

import Home from './Home';
import Post from './Post';

import { Global , css , connect} from 'frontity'; 
import Switch from "@frontity/components/switch"


const Root = ({state}) => {

    
    // Variables 
    const white = '#FFFFFF';
    const green = '#6CF2A4';
    const dark = '#2D2F33';

    const regular = '400';
    const semiBold = '600';
    const bold = '700';
    

    const data = state.source.get(state.router.link)

    // const data = state.source.get(state.route.link);

    return(
    <>
        <Global styles={
            css`
                    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap');
                    html, body, div, span, applet, object, iframe,
                    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
                    a, abbr, acronym, address, big, cite, code,
                    del, dfn, em, img, ins, kbd, q, s, samp,
                    small, strike, strong, sub, sup, tt, var,
                    b, u, i, center,
                    dl, dt, dd, ol, ul, li,
                    fieldset, form, label, legend,
                    table, caption, tbody, tfoot, thead, tr, th, td,
                    article, aside, canvas, details, embed, 
                    figure, figcaption, footer, header, hgroup, 
                    menu, nav, output, ruby, section, summary,
                    time, mark, audio, video {
                       
                        margin: 0;
                        padding: 0;
                        border: 0;
                        font-size: 100%;
                        vertical-align: baseline;
                        color: #fff;
                        font-family: 'Source Code Pro', 'monospace';
                        font-weight: ${regular};
                    }
                    /* HTML5 display-role reset for older browsers */
                    article, aside, details, figcaption, figure, 
                    footer, header, hgroup, menu, nav, section {
                        display: block;
                    }
                    body {
                        line-height: 1;
                        background-color : #25262A
                    }
                    ol, ul {
                        list-style: none;
                    }
                    blockquote, q {
                        quotes: none;
                    }
                    blockquote:before, blockquote:after,
                    q:before, q:after {
                        content: '';
                        content: none;
                    }
                    table {
                        border-collapse: collapse;
                        border-spacing: 0;
                    }
                    .container{
                        max-width:88%;
                        margin: auto;
                        @media only screen and (min-width: 1440px){
                            max-width: 1280px;
                            margin : auto;
                            width: 100%;
                        }
                        
                    }
                    .title-large {
                        font-size: 50px;
                        font-weight: ${bold};
                        margin-bottom: 5%;
                        line-height: 1.2em;
                    }
                    .title-sm {
                        font-size: 20px;
                        font-weight: ${bold}; 
                    }
                    .dark-text{
                        background-color: ${green};
                        color: ${dark};
                        max-width: fit-content;
                    }
                    .para{
                        font-size:18px;
                        font-weight: ${regular};
                    }

                    .Count {
                        font-size: 60px;
                        font-weight: 700;
                        margin-right: 10px;
                       
                    }
            `
        }/> 

        <Switch>
             <Home when={data.isHome}/>
             <Post when={data.isPost}  />
        </Switch>
        


    </>
    );
}



export default connect(Root);