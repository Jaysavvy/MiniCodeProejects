import {useState} from 'react'
import Header from './Componets/Header'
import Tasks from './Componets/Tasks'





const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting with <> Minty Group',
        day: 'Feb 5th at 8:30AM',
        Reminder: true, 
    
    },
    {
        id: 2,
        text: 'Meeting with <> Treasure Trove',
        day: 'Feb 5th at 11:30AM',
        Reminder: true, 
    },
    {
        id: 3,
        text: 'Work on the mindfield project',
        day: 'Feb 5th at 2:30PM',
        Reminder: false, 
    },
    {
        id: 4,
        text: 'Study some Java',
        day: 'Feb 5th at 4:00PM',
        Reminder: false, 
    },
    
])

//  Delete Task 

const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: 
      !task.reminder} : task ))
}


  return (
    <div className="container">
      <Header />
      {tasks.length> 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle ={toggleReminder} /> : ('You Have No Task')}

    </div>
  
  )
}


export default App;
