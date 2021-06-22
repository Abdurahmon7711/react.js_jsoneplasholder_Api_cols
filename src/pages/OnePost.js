import { useEffect, useState } from 'react';
import { doPosts } from '../serves';
import Users from './Users';

function OnePost({ history, match, location }) {

    const [post, setPost] = useState('');
    const [user, setUser] = useState('');

    async function getOnePost(id) {
        const onePost = await doPosts('/posts/'+id);
        setPost(onePost);
        const postUser = await doPosts('/users/' + onePost.userId)
        setUser(postUser);
    }

    useEffect(() => {
        getOnePost(match.params.id)
    }, [])

    return (

        <div>
            <h3>one post </h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">
                                {user.name}
                            </div>
                            <div className="card-body">
                                {user.phone}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-header">
                            <h3>{post.id}</h3>    
                            {post.title}
                            </div>
                            <div className="card-body">
                                <h3>{post.name}</h3>
                                {post.body}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default OnePost;