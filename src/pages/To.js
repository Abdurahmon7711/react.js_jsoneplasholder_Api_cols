function To({ item }) {

    const chackstyle = {
        transform: 'scale(1.5)'
    }
    return (
        <div className="row" >

            <div className="col-md-1" >
                <input style={chackstyle} type="checkbox" id={'ids/' + item.id} defaultChecked={item.completed} />
            </div>
            <div className="col-md-5">
                <label htmlFor={'ids/' + item.id}>
                    <h4>{item.title}</h4>
                </label>
            </div>
        </div>

    )
}

export default To;