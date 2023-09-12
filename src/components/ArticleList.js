import Article from "./Article.js"
function ArticleList({posts}){
    return(
        posts.map((posts) => {
            return <Article posts={posts}/>
         })
         

    )
}
export default ArticleList

// title={posts.title} date={posts.date}  preview={posts.preview} minutes={posts.minutes}