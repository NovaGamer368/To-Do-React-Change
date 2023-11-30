import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';


const QuotaInput = (taskList, setTasks) => {

    // {
    //     id: 0,
    //     quota: "",
    //     isComplete: false,
    //     toggleComplete: function() {
    //         this.isComplete = !this.isComplete
    //     }
    // }
    const [quota, setQuota] = useState()

    const addTask = () => {
        let tempList = taskList.taskList
        let newTask = 
        {
            id: tempList.length,
            quota: quota,
            isComplete:false, 
            toggleComplete: function() {
                this.isComplete = !this.isComplete
            }
        }
        tempList.push(newTask)
        taskList.setTasks(tempList)
    }

    return (
        <div>

                    {/* <input type="text" placeholder="Add to your list..." 
                    onChange={(e) => {setQuota(e.target.value)}}
                    onKeyUp={(event) => {
                        if (event.key === "Enter") {
                            addTask();
                        }
                    }}
                    /> */}
                    <TextField
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                    fullWidth
                    onChange={(e) => {setQuota(e.target.value)}}
                    onKeyUp={(event) => {
                        if (event.key === "Enter") {
                            addTask();
                        }
                    }}
                    />
                    <span className="error"></span>

            <div className="enter">
                <a href="#"><i className="fas fa-level-down-alt"></i></a>
            </div>
        </div>
    )
}

export default QuotaInput