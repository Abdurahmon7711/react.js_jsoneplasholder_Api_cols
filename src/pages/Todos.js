import { doPosts } from '../serves';
import { useState, useEffect } from 'react';
import To from './To';

const chackstyle = {
    transform: 'scale(1.5)'
}


// bazadan limitli maluomtlarni olish masalan
// jsoneplaseholder.type.com/todos?_limit=5

const Todos = () => {

    function filter(userId, completed, page) {
        return data.filter((item, index) => 
            ((item.userId == userId) || !userId) && 
            (item.completed === completed || !isfilter)
            ).filter((item, index )=>  (index>= (page-1)*10 && index<page*10) )
    }

    const [todo, setTodo] = useState([]);
    const [user, setUser] = useState([]);
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(false);
    const [comp, setComp] = useState(false);
    const [isfilter, setIsfiler] = useState(false);
    const [page, setPage] = useState(1)

    async function getTodo() {
        const res = await doPosts('/todos')
        setData(res);
        setTodo(res.filter((item,index) => index>=0 && index<10));
    }

    async function getUser() {
        const res = await doPosts('/users')
        setUser(res);
    }

    function selectTodo(event) {
        const userId = event.target.value;
        const res = filter(userId, comp);
        setCurrent(userId)
        setTodo(res);
    }

    function handleCheck(event) {
        let checked = event.target.checked;
        setComp(checked);
        const res = filter(current, checked);
        setTodo(res)
        setIsfiler(true)
    }
    function reset() {
        setTodo(data)
        setCurrent('');
        setComp(false)
        setIsfiler(false)

    }

    function onePrev(){
        setPage(prev => prev-1)
    }

    function oneNext(){
        setPage(prev => prev+1)
    }

    useEffect(() => {
        getTodo();
        getUser();
    }, []);

    useEffect(()=>{
       const res = filter(current, comp,page)
       setTodo(res)
    }, [page])

    return (
        <div>
            <h2 className="text-center"> This is pages Todo appsx</h2>
            <br />

            <div className="row">
                <div className="col-md-3">
                    <button className="btn btn-success btn-block " onClick={reset}>reset</button>
                </div>
                <div className="col-md-3">
                    <select className="form-control" onChange={selectTodo} value={current ? parseInt(current) : " "} >
                        <option value=''> All users </option>
                        {
                            user.map((item, index) => <option key={index} value={item.id}>
                                {item.name}
                            </option>)
                        }
                    </select>
                </div>

                <div className="col-md-3">
                    <label> Complated
                        <input className="m-3" style={chackstyle} type="checkbox" onChange={handleCheck}
                            checked={comp} />
                    </label>
                </div>
            </div>
            <br />
            <br />
            {todo.map((item, index) => <To
                key={index}
                item={item}
            />)}

            <div className="row my-3">

                <div className="col-md-2">
                    <button className="btn btn-dark" onClick={onePrev} > {'< < '} prev</button>
                </div>
                <div className="col-md-2"> <h2>{page}</h2> </div>
                <div className="col-md-2">
                    <button className="btn btn-dark" onClick={oneNext}>Next{' > > '}</button>
                </div>

            </div>
        </div>
    );
};


export default Todos;