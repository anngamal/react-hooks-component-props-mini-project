
function About({blogData}){
    return( 
        <div>
        <img src={blogData.image ? blogData.image : "https://via.placeholder.com/215"} alt="blog logo"/> 
        <p>{blogData.about}</p>  
        </div> 
    )
}

export default About