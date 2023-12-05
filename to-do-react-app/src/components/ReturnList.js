import React, { useEffect, useReducer, useState } from 'react'
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import QuotaInput from './QuotaInput';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateQuota from './UpdateQuota';

const ReturnList = () => {
    
    const testTask =  {
        id: 1,
        quota: "testing model",
        isComplete: false,
        toggleComplete: function() {
            this.isComplete = !this.isComplete
        }
    };
    const testTask2 =  {
        id: 2,
        quota: "testing model #2",
        isComplete: false,
        toggleComplete: function() {
            this.isComplete = !this.isComplete
        }
    };
    const savedList = JSON.parse(localStorage.getItem('toDoList'))

    const [taskList, setTaskList] = useState([]);
    const [checked, setChecked] = useState([]);    
    const [isCompletedTasks, setIsCompletedTasks] = useState(false)
    const [taskUpdate, setTaskUpdate] = useState(false);
    const [editingTask, setEditingTask] = useState({})
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        if(savedList)
        {
            setTaskList(savedList)
        }
    }, [])

    useEffect(() => {
        console.log("reload")
        localStorage.setItem('toDoList', JSON.stringify(taskList));
        setIsCompletedTasks(false)
        if(taskList)
        {
            taskList.forEach(task => {
                if(task.isComplete == true)
                {
                    setIsCompletedTasks(true)
                }
            })
        }   
        forceUpdate();
    }, [taskList])

    const toggleComplete = (task) => {
        task.isComplete = !task.isComplete
        return task
    }
    
    const handleToggle = (value) => () => {
        value = toggleComplete(value)
        console.log(taskList)
        console.log(value)
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setIsCompletedTasks(false)
        taskList.forEach(task => {
            if(task.isComplete == true)
            {
                setIsCompletedTasks(true)
            }
        })
    
        setChecked(newChecked);
    };

    const updateTask = (taskId) => {
        console.log("UPDATING: ", taskId)
    }

    const deleteTask = (taskId) => {
        let index = 0
        let tempArray = taskList        

        taskList.forEach(task => {    
            console.log(index)
            if(task.id === taskId)
            {
                tempArray.splice(index, 1);
                setTaskList(tempArray);
            }
            index++

            
            forceUpdate();
        });
        setIsCompletedTasks(false)
        taskList.forEach(task => {
            if(task.isComplete == true)
            {
                setIsCompletedTasks(true)
            }
        })
    }

    const clearAllComplete = () => {
        const updatedTaskList = taskList.filter(task => !task.isComplete)
        setTaskList(updatedTaskList);
        setIsCompletedTasks(false)
        taskList.forEach(task => {
            if(task.isComplete == true)
            {
                setIsCompletedTasks(true)
            }
        })
        forceUpdate();
    }

    return (
        <main>
                <div className="main-container">
                    <Paper sx={{ width: 700, height: 800, overflow: 'auto' }}>
                        <div className="title bottom">
                            <h1>To-do List</h1>
                            <a id="refresh"><i className="fas fa-sync-alt"></i></a>
                        </div>
                        <div className="form-container bottom">
                            <QuotaInput taskList={taskList} setTasks={setTaskList} update={forceUpdate} />
                        </div>
                        <div className='todo-list'>
                            <h3>Your tasks</h3>
                            {
                                taskList.length !== 0 ? 
                                <List dense component="div" role="list">
                                {
                                    taskList.map((task) => {
                                        const labelId = `transfer-list-item-${task.id}-label`;
                                        if(task.isComplete)
                                        {
                                            return (
                                                <ListItem
                                                key={task.id}
                                                role="listitem"
                                                button
                                                >
                                                    <ListItemIcon>
                                                        <Checkbox
                                                        checked={checked.indexOf(task) !== -1}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                        style={{ color: "rgb(0, 128, 0)" }}
                                                        onClick={handleToggle(task)}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText className='completedTask' id={task.id} primary={task.quota} />
                                                    <DeleteIcon onClick={() => {deleteTask(task.id)}}/>
                                                </ListItem>
                                            );
                                        }
                                        else
                                        {
                                            if(taskUpdate && editingTask.id === task.id)
                                            {
                                                return (
                                                    <UpdateQuota task={task} finshUpdating={setTaskUpdate} checked={checked} handleToggle={handleToggle} 
                                                    editingTask={editingTask} taskList={taskList} setTaskList={setTaskList}/>
                                                );
                                            }
                                            else
                                            {
                                                return (
                                                    <ListItem
                                                    key={task.id}
                                                    role="listitem"
                                                    button
                                                    >
                                                        <ListItemIcon>
                                                            <Checkbox
                                                            checked={checked.indexOf(task) !== -1}
                                                            tabIndex={-1}
                                                            disableRipple
                                                            inputProps={{
                                                                'aria-labelledby': labelId,
                                                            }}
                                                            onClick={handleToggle(task)}
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText id={task.id} primary={task.quota} />
                                                        <MoreVertIcon onClick={() => {setTaskUpdate(true); setEditingTask(task)}}/>
                                                    </ListItem>
                                                );
                                            }
                                        }                                   
                                        })}
                                        <ListItem />
                                    </List>
                                    :
                                    <><h4>NO TASKS ENTERED</h4></>
                            }
                        </div>
                        <div className="clear">       
                            {
                                    isCompletedTasks ?
                                    
                                        <Button variant="contained" onClick={() => {clearAllComplete()}}>Clear all Completed</Button>
                                        :
                                        <Button variant="contained" disabled>Clear all Completed</Button>
                                    
                            }                
                        </div>
                    </Paper>                
                </div>	
            </main>
    )
}

export default ReturnList