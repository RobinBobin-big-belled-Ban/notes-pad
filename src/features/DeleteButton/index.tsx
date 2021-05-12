import Reactm, { FC, useState } from 'react'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import { useParams, useHistory } from 'react-router-dom'
import { deleteTaskAsync } from '../../app/asyncActions'
import { useAppDispatch } from '../../app/hooks'

interface Props { }
interface Index { id: string }

const DeleteButton: FC<Props> = () => {
    const [isModalVisible, setModalVisible] = useState<boolean>(false)
    // need to delete Element from Dexie DB
    const index: Index = useParams()
    const dispatch = useAppDispatch()
    const history = useHistory()

    const handleOk = (): void => {
        dispatch(deleteTaskAsync(index.id))
        setModalVisible(false)
        history.push('/')
    }

    const handleCancel = (): void => {
        setModalVisible(false)
    }

    return (
        <>
            <Button danger onClick={() => setModalVisible(true)}>
                Delite
            </Button>
            <Modal
                title="Do you want to delete this task?"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
            </Modal>
        </>
    )
}

export default DeleteButton
