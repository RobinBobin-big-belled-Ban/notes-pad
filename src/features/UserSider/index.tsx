import React, { FC } from 'react'
import Layout from '../../components/Layout'
import Menu from '../../components/Menu'
import { FormOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import classes from './styles.module.scss'
import { useAppSelector } from '../../app/hooks'
import { AppState, SingleTask } from '../../app/appSlice'
const { Sider } = Layout;

interface Props { }

const UserSider: FC<Props> = () => {
    const store: AppState = useAppSelector(store => store.appSlice)
    const { tasks, status } = store
    return (
        <Sider theme="dark">
            <Menu className={classes.menu}>
                <Menu.Item
                    key="1"
                    icon={<PlusCircleOutlined />}>
                    <Link className={classes.link} to="/create-task">Create new task</Link>
                </Menu.Item>
                {
                    tasks.map((task: SingleTask) => {
                        const { id, name } = task
                        return <Menu.Item key={id}
                            id={id}
                            icon={<FormOutlined />}
                        >
                            <Link
                                className={classes.link}
                                to={`/task/${id}/`}>
                                {name}
                            </Link>
                        </Menu.Item>
                    })
                }
            </Menu>
        </Sider>
    )
}

export default UserSider


{/* <Menu.Item key="2"
icon={<FormOutlined />}
>
<Link className={classes.link} to="/task/"> First task</Link>
</Menu.Item>
<Menu.Item key="3" icon={<FormOutlined />}>
Second task
</Menu.Item>
<Menu.Item key="4" icon={<FormOutlined />}>
Third task
</Menu.Item> */}