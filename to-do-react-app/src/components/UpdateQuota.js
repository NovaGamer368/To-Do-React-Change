import React, { useState } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import SaveIcon from '@mui/icons-material/Save';
import { TextField } from '@mui/material';

const UpdateQuota = ({task, finshUpdating, checked, handleToggle, editingTask, taskList, setTaskList }) => {
    const [newQuota, setNewQuota] = useState(task.quota)
    const update = () => {
        let tempArray = taskList;
        let index = 0;
        tempArray.forEach(item => {
            if(item.id === editingTask.id)
            {
                tempArray[index] = 
                {
                    id: editingTask.id,
                    quota: newQuota,
                    isComplete: editingTask.isComplete, 
                    toggleComplete: function() {
                        this.isComplete = !this.isComplete
                    }                    
                }
            }
            index++
        });

        setTaskList(tempArray)
        finshUpdating(false)
    }

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
                onClick={handleToggle(task)}
                />
            </ListItemIcon>
            <TextField  label="Update Task" variant="standard" defaultValue={editingTask.quota}
            fullWidth
            onChange={(e) => {setNewQuota(e.target.value)}}
            onKeyUp={(event) => {
                if (event.key === "Enter") {
                    update()
                }
            }}
            />
            <SaveIcon onClick={() => {update()}}/>
        </ListItem>
    )
}

export default UpdateQuota