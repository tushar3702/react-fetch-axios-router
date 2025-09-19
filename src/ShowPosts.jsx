import {Card} from './components/Card'

function ShowPosts({data}) {
  return <>
  <div className="container my-5">
      <div className="row">
        {data  ? (
          data.map((e) => <Card key={e.id} data={e} />)
        ) : (
          <p>No data</p>
        )}
      </div>
  </div>
 </>
}

export default ShowPosts
