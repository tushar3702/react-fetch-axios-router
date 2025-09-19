export const Card = (props) => {
    const {id, title, body} = props.data

    return <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">Title:{title}</h5>
                    <p className="card-text">body: {body}</p>
                    <a href="#" className="btn btn-success">{id}</a>
                </div>
            </div>
    </div>
}