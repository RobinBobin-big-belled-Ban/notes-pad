import React, { FC } from 'react'
import { Form as FormAntd } from 'antd'
import { FormProps as FormAntdProps } from 'antd/lib/form'

export interface Props extends FormAntdProps { }

const Form: Component = ({ ...props }) => {
    return <FormAntd {...props} />
}

Form.Item = FormAntd.Item

interface Component extends FC<Props> {
    Item: typeof FormAntd.Item
}

export default Form
