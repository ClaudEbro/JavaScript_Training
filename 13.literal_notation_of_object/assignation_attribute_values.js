const data = {
    email: 'claude@gmail.com',
    pwd: '1234567',
    username: 'claudio', 
};

const url = 'https://api.monsite/users';

function createUserES5(){
    $.ajax({
        method:'POST',
        data:data,
        url:url,
        success:function(){},
        error:function(){},
    })
}

function createUserES6(){
    $.ajax({
        method:'POST',
        data,
        url,
        success:function(){},
        error:function(){},
    })
}

app.get('/api/posts/:id/commentaires',(req,res)=> {
    const post = Post.findById(req.params.id);
    if(!post) return res.json("Not found").status('404');
    const commentaires = Comments.find({post_id:post.id});
    return res.send({
        post:post,
        commentaires:commentaires,
    }
    )
})