import { FC, useState } from 'react'
import './Modal.scss'
import closeImg from '@/assets/icons/modalClose.svg'
import Button from '@/components/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { persistor } from '@/store'
import { useAppDispatch } from '@/hooks'
import { reset } from '@/store/applicationSlice'

type TModal = {
  isOpen: boolean
  onClose: () => void
}
const Modal: FC<TModal> = ({ isOpen, onClose }) => {
  const [isDeny, setIsDeny] = useState(false)
  const content = isDeny ? 'Your application has been deny!' : 'You exactly sure, you want to cancel this application?'
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  if (!isOpen) return null
  const handleDeny = () => {
    persistor.purge()
    dispatch(reset())
    navigate('/')
  }
  return (
    <section className='modal'>
      <div className='modal_form'>
        <div className='modal_form-header'>
          <h4>Deny application</h4>
          {isDeny ? (
            <button onClick={handleDeny}>
              <img src={closeImg} alt='close' />
            </button>
          ) : (
            <button onClick={onClose}>
              <img src={closeImg} alt='close' />
            </button>
          )}
        </div>
        <p className='modal_form-content'>{content}</p>
        <div className='modal_form-buttons'>
          {isDeny ? (
            <Button name='Go home' style='compBtn btn-modal' onClick={handleDeny} />
          ) : (
            <>
              <Button name='Deny' style='cancelBtn btn-table' onClick={() => setIsDeny(true)} />
              <Button name='Cancel' style='compBtn btn-table' onClick={onClose} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Modal
