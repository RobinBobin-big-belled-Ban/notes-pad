import React, { FC } from 'react'
import { Input as InputAntd } from 'antd'
import { InputProps as InputAntdProps } from 'antd/lib/input'

export interface Props extends InputAntdProps { }

const Input: Component = ({ ...props }) => {
    return <InputAntd {...props} />
}

Input.Search = InputAntd.Search
Input.TextArea = InputAntd.TextArea

interface Component extends FC<Props> {
    Search: typeof InputAntd.Search;
    TextArea: typeof InputAntd.TextArea
}

export default Input
