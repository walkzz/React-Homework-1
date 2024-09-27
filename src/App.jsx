import './App.css';
import ListItems from './components/ListItems/ListItems';
const tasks = [
    { name: "Learn React", priority: "High" },
    { name: "Do Groceries", priority: "Low" },
    { name: "Exercise", priority: "High" },
    { name: "Read a Book", priority: "Medium" },
]
function App() {
    return (
        <div>
            <h1>Task List:</h1>
            <ListItems items={tasks} />
        </div>
    )
}
export default App;