import styles from './styles.module.css';
import Logo from '../../assets/rocketLogo.svg'
import { NewTaskBar } from '../../NewTaskBar/NewTaskBar';
import { CountBox } from './../../CountBox/CountBox';
import { TaskItem } from '../../TaskItem/TaskItem';
import { useState } from 'react';

export function Home(){
  const [finishedTask, setFinishedTask] = useState(0);
  
  const [taskList, setTaskList] = useState([
    {
      id: 0,
      content: "Lavar louça",
      done: false,
    },
    {
      id: 1,
      content: "Ir ao mercado",
      done: false,
    },
  
  ]);


  function doneTask(status: boolean, id: number, content:string){

    const taskListWithoutId = taskList.filter(taskList =>{
      return taskList.id != id
    })

        setTaskList([
     ...taskListWithoutId,
      {
      id: id,
      content: content,
      done: status,
    }])   
    status ? setFinishedTask(finishedTask + 1) : setFinishedTask(finishedTask - 1)

    console.log(taskListWithoutId);
    
  }

  function deleteTask(id: number){
    taskList.map(item => {
      item.id == id && item.done == true ? setFinishedTask(finishedTask - 1 ) : null
    })

    const newtaskList = taskList.filter(taskList =>{
      return taskList.id != id
    })
    setTaskList(newtaskList);
  }

  function newTaskItem(taskText: string){
    let maxId:number = 0;
    taskList.map(id => {
      maxId < id.id ? maxId = id.id : null
    })
    
    setTaskList([
      ...taskList,
      {
      id: maxId + 1,
      content: taskText,
      done: false,
    }
    ])
  }
  
  return (
    <div className={styles.container}>
      <header>
        <img src={Logo} alt="" />
        <div className={styles.logoTitle}>
          <h1>to</h1>
          <h1>do</h1>
        </div>
      </header>
      <main>

        <div className={styles.newTaskBar}>
          <NewTaskBar onNewTaskItem={newTaskItem}/>
        </div>

        <div className={styles.TaskField}>
          <div className={styles.barTop}>
            <div>Tarefas Criadas <CountBox task={taskList.length}/></div>
            <div>Concluidas<CountBox task={taskList.length} hasComplet doneTask={finishedTask}/></div>
          </div>

          {/* <div className={styles.lineBar}/> */}

          <div className={styles.taskList}>
          {taskList.map(id =>{  
            return (
              <TaskItem 
              key={id.id}
              id={id.id}
              content={id.content}
              onDoneTask={doneTask}
              onDeleteTask={deleteTask}
              />
            )
          })}
          </div>
        </div>
      </main>

      
    </div>
  );
}