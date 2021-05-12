import React, { FC } from 'react'
import { Modal as ModalAntd } from 'antd'
import { ModalProps as ModalAntdProps } from 'antd/lib/modal'

export interface Props extends ModalAntdProps { }

const Modal: FC<Props> = ({ ...props }) => {
    return <ModalAntd {...props} />
}

export default Modal