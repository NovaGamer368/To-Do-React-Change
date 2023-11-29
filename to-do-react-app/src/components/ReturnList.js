import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

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

    }, [])

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
                    <div class="title bottom">
                        <p>To-do List</p>
                        <a id="refresh"><i class="fas fa-sync-alt"></i></a>
                    </div>
                    <div class="form-container bottom">
                        <form autocomplete="off">
                            <input type="text" id="todo" placeholder="Add to your list..." />
                            <span class="error"></span>
                        </form>
                        <div class="enter">
                            <a href="#"><i class="fas fa-level-down-alt"></i></a>
                        </div>
                    </div>
                    {/* <div>
                        <ul>
                            {taskList.map(task => (
                                <li key={task.id}>
                                    <div>ID: {task.id}</div>
                                    {console.log("task is: ", task.isComplete)}
                                    <div>{task.quota}</div>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <div>
                        <h2>New list</h2>
                        <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
                            <List dense component="div" role="list">
                                {taskList.map((task) => {
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
                        </Paper>
                    </div>
                    <div className="clear">
                        {/* <a>Clear all completed</a> */}
                    </div>
                </div>	
            </main>
    )
}

export default ReturnList