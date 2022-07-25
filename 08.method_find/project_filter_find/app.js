const posts = [
    {
      title: 'C++ vs Java',
      content:
        'Is Java better than C++ in terms of learning curve especially when it comes to design patterns or software design and architecture?',
      id: 1,
    },
    {
      title: 'NodeJS or Django',
      content: 'Should i choose Nodejs over Django? Why?',
      id: 2,
    },
  ];
  
  const comments = [
    {
      post_id: 1,
      comment:
        "Personnaly,i think that Java is a greet language for career,because it's widely used in Entreprise level applications,and in terms of implementation,the design is very good.So i can only encorage you to leran Java",
    },
    {
      post_id: 1,
      comment:
        "It depends on your background and goals.Background because,of where you've got basic knowlegdes beetween the 2 and goals because your'r the only one person who knows what you want to become as software Engineer",
    },
    {
      post_id: 2,
      comment:
        "I'll only go for django because it's the one i do better with the REST Framwork",
    },
    {
      post_id: 2,
      comment:
        "If you haven't touch server side programming but have good knowlegde of Javascript,go for nodejs but if you are good with Python and you like,go for Django",
    },
  ];
  
  function getPostComments(postID) {
    const post = posts.find(function ({ id }) {
      return id === postID;
    });
  
    const commentaires = comments.filter(function (comment) {
      return comment.post_id === postID;
    });
  
    return {
      [post.title]: commentaires,
    };
  }
  
  const postComments = getPostComments(1);
  