import React, { FC, useEffect } from 'react';
import Layout from './components/Layout'
import 'antd/dist/antd.css'
import classes from './styles.module.scss'
import { useAppDispatch } from './app/hooks'
import { addTaskAsync, loadTaskAsync } from './app/asyncActions'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import AddTask from './features/AddTask'
import TaskContent from './features/TaskContent'
import UserSider from './features/UserSider'
import UpdateTask from './features/UpdateTask'
import { UserHeader } from './features/UserHeader'
const { Content } = Layout

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadTaskAsync())
  }, [])
  return (
    <BrowserRouter>
      <Layout className={classes.container}>
        <UserHeader />
        <Layout>
          <UserSider />
          <Content>
            <Switch>
              <Route path={['/', '/create-task']} component={AddTask} exact />
              <Route path="/task/:id/edit-task" component={UpdateTask} exact />
              <Route path="/task/:id" component={TaskContent} exact />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
