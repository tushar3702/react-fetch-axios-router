export const Todos = (props) => {
    const {id, title, completed} = props.data 

    return <div className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-lg">
                <div className="card-body">
                    <p className="card-text">{id}</p>
                    <h5 className="card-title">{title}</h5>
                    <a href="#" className={`btn ${completed ?  "btn-success" : "btn-danger" }`}
                    >
                        {completed ? "Done" : "Pending"}
                    </a>
                </div>
            </div>
    </div>
}