import { doPosts } from '../serves';
import { useState, useEffect } from 'react';
import To from './To';

const chackstyle = {
    transform: 'scale(1.5)'
}

const Todos = () => {

    function filter(userId) {
        return data.filter(item => (item.userId == userId || !userId))
    }

    const [todo, setTodo] = useState([]);
    const [user, setUser] = useState([]);
    const [data, setData] = useState([]);
    const [comp, setComp] = useState(false);

    async function getTodo() {
        const res = await doPosts('/todos')
        setTodo(res);
        setData(res);
    }

    async function getUser() {
        const res = await doPosts('/users')
        setUser(res);
    }
     
    function selectTodo (event){
        const res = filter(event.target.value);
        setTodo(res);
    }

    function handleCheck(event){
        setComp(event.target.checked)
    }

    useEffect(() => {
        getTodo();
        getUser();

    }, []);

    return (
        <div>
            <h2 className="text-center"> This is pages Todo appsx</h2>
            <br />

            <div className="row">
                <div className="col-md-3">
                    <select className="form-control"  onChange={selectTodo}  >
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
                        <input className="m-3" style={chackstyle} type="checkbox" onChange={handleCheck} checked={comp} />
                    </label>
                </div>
            </div>
            <br/><br/>
            {todo.map((item, index) => <To
                key={index}
                item={item}
            />)}

        </div>
    );
};


export default Todos;