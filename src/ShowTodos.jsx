import {Todos} from './components/Todos'

function ShowTodos({todos}) {
  return <>
        <div className="row">
        {todos ? (
          todos.map((e) => <Todos key={e.id} data={e} />)
        ): (
          <p>No Todo Tasks</p>
        )}
      </div>
 </>
}

export default ShowTodos
