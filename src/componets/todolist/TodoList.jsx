import {useState} from "react";


function TodoList() {
    const [tasks,setTasks] = useState([]);
    const [task,setTask]  = useState("");
    const [editeindex,setEditeindex] = useState(null);

    const handleAddTask = () => {
        if(task.trim() == "")return;
        if(editeindex !== null){
            const ubdatetask = [...tasks];
            ubdatetask[editeindex] = task;
            setTasks(ubdatetask);
            setEditeindex(null);
        } else {
            setTasks([...tasks,task])
        }
        setTask("");
    }

    const handleDelete = (id) => {
        const ubdatetask = tasks.filter((_,i)=> i !== id);
        setEditeindex(ubdatetask);
    }

    const handleEditeindex = (index)  => {
        setTask(tasks[index]);
        setEditeindex(index);
    }
  return (
    <div>
       <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>
          {editeindex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <div>
              <button onClick={() => handleEditeindex(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default TodoList
