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
    
    const [taskList, setTaskList] = useState([testTask,testTask2]);
    const [checked, setChecked] = useState([]);
    useEffect(() => {
        console.log("reload")
        forceUpdate();
    }, [taskList])

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    };

    console.log(taskList)

    return (
        <main>
                <div className="main-container">
                    <Paper sx={{ width: 700, height: 800, overflow: 'auto' }}>
                        <div className="title bottom">
                            <h1>To-do List</h1>
                            <a id="refresh"><i className="fas fa-sync-alt"></i></a>
                        </div>
                        <div className="form-container bottom">
                            <QuotaInput taskList={taskList} setTasks={setTaskList}/>
                        </div>
                        <div className='todo-list'>
                            <h3>Your tasks</h3>
                                <List dense component="div" role="list">
                                    {
                                    taskList.map((task) => {
                                    const labelId = `transfer-list-item-${task.id}-label`;

                                    return (
                                        <ListItem
                                        key={task.id}
                                        role="listitem"
                                        button
                                        onClick={handleToggle(task)}
                                        >
                                        <ListItemIcon>
                                            <Checkbox
                                            checked={checked.indexOf(task) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{
                                                'aria-labelledby': labelId,
                                            }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={task.id} primary={task.quota} />
                                        </ListItem>
                                    );
                                    })}
                                    <ListItem />
                                </List>
                        </div>
                    </Paper>

                    <div className="clear">
                        {/* <a>Clear all completed</a> */}
                    </div>
                </div>	
            </main>
    )
}

export default ReturnList