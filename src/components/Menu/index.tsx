import React, { FC } from 'react'
import { Menu as MenuAntd } from 'antd'
import { MenuProps as MenuAntdProps } from 'antd/lib/menu'

export interface Props extends MenuAntdProps { }

const Menu: Component = ({ ...props }) => {
    return <MenuAntd {...props} />
}

Menu.Item = MenuAntd.Item

interface Component extends FC<Props> {
    Item: typeof MenuAntd.Item
}

export default Menu