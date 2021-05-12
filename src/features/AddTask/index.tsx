import React, { FC } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { nanoid } from 'nanoid'
import { addTaskAsync } from '../../app/asyncActions'
import { FormTask } from '../FormTask'
import { useHistory } from 'react-router-dom'


interface Props { }

const AddTask: FC<Props> = () => {
    const dispatch = useAppDispatch()
    const history = useHistory()

    const addNewTask = (values: { name: string; description: string }) => {
        const taskIndex = nanoid(8)
        const task = { ...values, id: taskIndex }
        dispatch(addTaskAsync(task))
        history.push(`/task/${taskIndex}`)
    }

    return (
        <FormTask
            changeDbFunction={addNewTask}
            title="Создать новую заметку"
            head=""
            inform=""
        />
    )
}

export default AddTask
