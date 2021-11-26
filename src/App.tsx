import * as C from './app.styles'
import {useState} from 'react';
import {Item} from './types/item'
import {ListItem} from './components/ListItem'
import { AddArea } from './components/AddArea/index'
function App() {
  const [list, setList]=useState<Item[]>([
    {id:1, name: "comprar pão", done:false},
    {id:1, name: "comprar um bolo", done:false},
  ])

  const handleAddTask= (taskName: string) => {
    let newList = [...list]
    newList.push({
      id:list.length + 1,
      name:taskName,
      done:false
    })
    setList(newList)
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index)=>(
         <ListItem key={index} item={item}/>
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
