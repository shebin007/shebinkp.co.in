import { styled , connect } from "frontity";

import Link from "@frontity/components/link";
// import { connect } from "frontity";



const BlogList = ( {state} ) => {
    const data = state.source.get(state.router.link);

    console.log(data.items);

    return(
        <div className="container">
            <BloglistingContainer>
                <h2 className="title-large">Latest <span>Blogs</span></h2>
                <p className="para">I will update my findings and research here , I hope this will help you.</p>
                <div className="posts-container">
                    {data.items.slice(0, 4).map((item) => {
                        const post = state.source[item.type][item.id];
                        const featuredImg = state.source.attachment[post.featured_media].source_url;
                        return (
                        <div key={item.id} className="post-box">
                            <img src={featuredImg} />
                            <div className="post-content">
                                <Link link={post.link} >
                                    <h3 className="title-sm">
                                        {post.title.rendered}
                                    </h3>
                                </Link>
                                <Link link={post.link}>Read more</Link>
                            </div>
                            
                        </div>
                        )
                    })}
                </div>
               
            </BloglistingContainer>
            
        </div>
    );
}

export default connect(BlogList);

const BloglistingContainer = styled.div`
        padding: 10% 0px;
        .title-large{
            margin-bottom:.8em;
        }
        .para{
            max-width:500px;
        }
        
        .posts-container {
            display: flex;
            flex-wrap: wrap;
            margin-left: -30px;
            margin-top: 5%;
            .post-box {
                max-width: calc(100% / 4 - 30px);
                width: 100%;
                margin-left: 30px;
                background: #2D2F33;
                border-radius: 10px;
                img {
                    max-width: 100%;
                    border-radius: 10px;
                }
                .post-content {
                    padding: 5% 8% 8%;
                    .title-sm{
                        margin-bottom: 5%;
                    }
                }
               
            }
        }
    `;