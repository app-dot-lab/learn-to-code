module.exports=(router,serviceLocator)=>{
    const PostsController = serviceLocator.get('postsController'); 
    router.get('/posts',(req,res,next)=>{
        PostsController.getPosts(req,res,next)
    })
    router.get('/posts/:id',(req,res,next)=>{
        PostsController.getPost(req,res,next);
    })
}