import React, { FC } from 'react'
import classes from './styles.module.scss'
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { changeValue } from '../../app/headerSlice'
import { useAppDispatch } from '../../app/hooks'
const { Header } = Layout

interface Props { }

export const UserHeader: FC<Props> = () => {
    const dispatch = useAppDispatch()
    return (
        <Header className={classes.header}>
            <div className={classes['header__wrapper']}>
                <Link to="/" className={classes['header__text']}>Notes</Link>
                <Input.Search
                    placeholder="Enter search text"
                    className={classes['header__search']}
                    onSearch={(value) => dispatch(changeValue(value))}
                    allowClear
                />
            </div>
        </Header>
    )
}
