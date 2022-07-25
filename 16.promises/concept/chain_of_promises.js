const request = (URL) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    {id:1, names:'Claude Ebrottié'},
                    {id:2, names:'Fransceco Forgione'},
                ],

                '/users/1/posts': [
                    {id:1, title: 'C++', content: 'Good language'},
                    {id:2, title:'JavaScript', content:'Excellent language'},
                ],

                '/posts/2/comments': [
                    {content:'I don\'t think it'},
                    {content:'In fact JS is very good'}
                ],

                '/posts/1/comments': [
                    {content:'That is right !'},
                ],
            };

            if(pages[URL]){
                resolve({
                    status:200,
                    data : pages[URL]
                });
            } else {
                reject({
                    status : 404,
                    message :'not found'
                })
            }
        }, 1000);

    });
};


request('/users')
    .then((res) => {
        const userId = res.data[0].id;
        return request(`/users/${userId}/posts`);
    })
    .then((res) => {
        const postId = res.data[0].id;
        return request(`/posts/${postId}/comments`);
    })
    .then((res) => console.log(res));