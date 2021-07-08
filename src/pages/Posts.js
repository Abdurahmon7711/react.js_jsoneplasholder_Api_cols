import { useEffect, useState } from 'react';
import { doPosts } from '../serves';

function Posts({history}) {
    function filter(userId) {
        return  data.filter(item => (item.userId == userId || userId === ''))
    }

    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);
    const [data, setdData] = useState([]);

    async function getP(){
        const res = await doPosts('/posts');
        setPost(res)
        setdData(res)
    }
    
    async function getUser(){
        const res = await doPosts('/users');
        setUser(res)
    }
    
    function selectUser(event){
        let userId = event.target.value;
        let res = filter(userId);
        setPost(res)
    }


    useEffect(() => {
        getP()
        getUser()
    }, [])

    function openOnepost(id){
        history.push('/posts/'+id)
    }

    return (
        <div>
            <h2>This is Posts page</h2>
            <div className="row">
                <div className="col-md-3">
                    <select className="form-control" onChange={selectUser}>
                        <option value = ''> All users </option>
                        {
                            user.map((item, index) => <option key={index} value={item.id}>
                                {item.name}
                            </option>)
                        }
                    </select>
                </div>
            </div>
            <div className="row">
                {post.map((item, index) => <div key={index} className="col-md-3 posts_card">
                    <div className="card my-3 " onClick={()=> openOnepost(item.id)}  >
                        <div className="card-header bg-dark text-white">
                            {item.id + ' ' + item.title}
                        </div>
                        <div className="card-body">
                            {item.body}
                        </div>
                    </div>
                </div>)}
            </div>

        </div>
    )
}

export default Posts;