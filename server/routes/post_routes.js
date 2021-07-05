module.exports=(router,serviceLocator)=>{
    const PostsController = serviceLocator.get('postsController'); 
    router.get('/posts',(req,res,next)=>{
    })
}