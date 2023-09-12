function Article({posts}){
    return(
        <div> 
        <h3>{posts.title}</h3>
        <small>{posts.date ? posts.date : "January 1, 1970"}</small>
        <p>{posts.preview}</p>
        </div>
    )
}
// minutes={posts.minutes}


export default Article