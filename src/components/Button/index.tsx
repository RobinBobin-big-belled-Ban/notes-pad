import React, { FC } from 'react'
import { Button as ButtonAntd } from 'antd'
import { ButtonProps as ButtonAntdProps } from 'antd/lib/button'

export interface Props extends ButtonAntdProps { }

const Button: FC<Props> = ({ ...props }) => {
    return <ButtonAntd {...props} />
}

export default Button