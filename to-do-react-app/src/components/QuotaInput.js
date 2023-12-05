import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';


const QuotaInput = ({taskList, setTasks, update}) => {

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
        let tempList = taskList
        let newTask = {}

        if(taskList.length !== 0)
        {
            console.log(tempList[tempList.length -1].id)
            newTask = 
            {
                id: tempList[tempList.length -1].id + 1,
                quota: quota,
                isComplete: false, 
                toggleComplete: function() {
                    this.isComplete = !this.isComplete
                }
            }
            tempList.push(newTask)
            setTasks(tempList)

        }
        else
        {
            newTask = 
            {
                id: 1,
                quota: quota,
                isComplete: false, 
                toggleComplete: function() {
                    this.isComplete = !this.isComplete
                }
            }
            setTasks([newTask])
        }
        localStorage.setItem('toDoList', JSON.stringify(tempList));
        update()
        // taskList.setTasks(tempList)
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