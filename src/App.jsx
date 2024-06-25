import { RecoilRoot, useRecoilValue, useSetRecoilState,  } from "recoil";
import { descriptionAtom, descriptionSelector, filterAtom, filterSelector, titleAtom, titleSelector, todoAtom } from "./store/atoms/Todos";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Input/>
        <Button/>
        <Filter/>
        <Todos/>
      </RecoilRoot>
    </div>
  )
}

function Input() {
  const setTitle = useSetRecoilState(titleAtom);
  const setDescription = useSetRecoilState(descriptionAtom);

  return <div>
    Title <input type="text" onChange={e => setTitle(e.target.value)}/>
    Description <input type="text" onChange={e => setDescription(e.target.value)}/>
  </div>
}

function Button() {
  const title = useRecoilValue(titleSelector);
  const description = useRecoilValue(descriptionSelector);
  const setTodos = useSetRecoilState(todoAtom);

  const todo = {
    title: title,
    description: description,
    id: Date.now()
  }

  return <div>
    <button onClick={() => setTodos(prev => [...prev, todo])}>Add Todo</button>
  </div>
}

function Filter() {
  const setFilter = useSetRecoilState(filterAtom);
  return <div>
    Filter <input type="text" onChange={e => setFilter(e.target.value)}></input>
  </div>
}


function Todos() {
  const todos = useRecoilValue(filterSelector)
  return <div>
    {todos.map(todo => <div key={todo.id}>{todo.title} {todo.description}</div>)}
  </div>
}


export default App
