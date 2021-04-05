import '../../styles/App.css';
import Header from '../header'
import ToDoList from '../todo-list/ToDoList'
import SearchPanel from '../search-panel/SearchPanel'
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter';

function App() {

  const toDoData = [
    {id: 1, label: 'Drink cofee', important: false},
    {id: 2, label: 'Sve the World!', important: true},
    {id: 3, label: 'Do smth else!', important: false}
  ]

  return (
    <div>
      <Header done={3} toDo={2}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList 
        todos={toDoData} 
        onDeleted={(id) => console.log(id)}
      />
    </div>

  );
}

export default App;
