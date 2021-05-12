import React, { FC, useState, useEffect } from 'react'
import Button from '../../components/Button'
import classes from './styles.module.scss'
import { useParams, Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { SingleTask } from '../../app/appSlice'
import DeleteButton from '../DeleteButton'

interface Props { }

interface Index {
    id: string;
}

const TaskContent: FC<Props> = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const tasks: SingleTask[] = useAppSelector(store => store.appSlice.tasks)
    const value: string = useAppSelector(store => store.headerSlice.value)
    const index: Index = useParams()
    const [currTask] = tasks.filter(task => task.id === index.id)

    useEffect(() => {
        if (!value) {
            setTitle(currTask?.name)
            setContent(currTask?.description)
            return
        }
        const array = currTask?.description.split(' ')
        const newDesc = array.map(elem => {
            return elem.replace(value, `<mark>${value}</mark>`)
        })
        setContent(newDesc.join(' '))
    }, [value, currTask])

    function createMarkup(text: string) {
        return { __html: text };
    }

    return (
        <section className={classes.content}>
            <header>
                <Button type="primary">
                    <Link to="edit-task">Edit</Link>
                </Button>
                <DeleteButton />
            </header>
            <article>
                <h3 className={classes['text-header']}>{title}</h3>
                {/* <ControlledUsage /> */}
                <p dangerouslySetInnerHTML={createMarkup(content)} />
            </article>
        </section>
    )
}

export default TaskContent
