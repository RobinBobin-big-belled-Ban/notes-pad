import React, { FC } from 'react'
import { FormTask } from '../FormTask'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { updateTaskAsync } from '../../app/asyncActions'
import { useParams, useHistory } from 'react-router-dom'

interface Props { }

interface Index {
    id: string;
}

const UpdateTask: FC<Props> = () => {
    const history = useHistory()
    const dispatch = useAppDispatch()
    const index: Index = useParams()
    const { tasks } = useAppSelector(store => store.appSlice)
    const [singleTask] = tasks.filter(task => task.id === index.id)

    const updateTask = (values: { name: string; description: string }) => {
        const task = { ...values, id: index.id }
        dispatch(updateTaskAsync(task))
        history.push(`/task/${index.id}`)
    }

    return (
        <FormTask
            changeDbFunction={updateTask}
            title="Редактировать заметку"
            head={singleTask.name}
            inform={singleTask.description}
        />
    )
}

export default UpdateTask
