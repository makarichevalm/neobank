import { FC, useEffect, useState } from 'react'
import './PaymentTable.scss'
import Table from '../../ui/Table/Table'
import FormHeader from '../../ui/FormHeader/FormHeader'
import Button from '../../ui/Button/Button'
import Checkbox from '../../ui/Checkbox/Checkbox'
import Modal from '../Modal/Modal'
import { api } from '@/api/api'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { TPayment } from '@/types'
import { setAppStep } from '@/store/applicationSlice'
import Loader from '@/components/ui/Loader/Loader'

const PaymentTable: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const applicationId = useAppSelector((state) => state.loan.applicationId)
  const dispatch = useAppDispatch()
  const [paymentData, setPaymentData] = useState<TPayment[]>([])
  const handleCheckbox = (checked: boolean) => {
    setIsChecked(checked)
  }
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }
  const tableHeaders = [
    { id: 'number', name: 'NUMBER' },
    { id: 'date', name: 'DATE' },
    { id: 'totalPayment', name: 'TOTAL PAYMENT' },
    { id: 'interestPayment', name: 'INTEREST PAYMENT' },
    { id: 'debtPayment', name: 'DEBT PAYMENT' },
    { id: 'remainingDebt', name: 'REMAINING DEBT' },
  ]
  const paymentSchedule = async (id: number) => {
    try {
      const response = await api.getPaymentSchedule(id)
      if (response) {
        setPaymentData(response)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const sendAgreement = async () => {
    if (isChecked) {
      try {
        setIsLoading(true)
        if (applicationId) {
          await api.createDocuments(applicationId)
          dispatch(setAppStep(5))
        }
      } finally {
        setIsLoading(false)
      }
    }
  }
  useEffect(() => {
    if (applicationId) paymentSchedule(applicationId)
  }, [])
  return (
    <article className='payment'>
      <div className='payment_header'>
        <FormHeader value='Payment Schedule' step={3} />
      </div>
      <Table headers={tableHeaders} data={paymentData} />
      <section className='payment_buttons'>
        <Button name='Deny' style='cancelBtn btn-table' onClick={() => setIsOpenModal(true)} />
        <div className='payment_buttons-send'>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Checkbox label='I agree with the payment schedule' isChecked={isChecked} onChange={handleCheckbox} />
              <Button
                name='Send'
                style={isChecked ? 'compBtn btn-table' : 'compBtnDisabled btn-table'}
                onClick={sendAgreement}
              />
            </>
          )}
        </div>
      </section>
      <Modal isOpen={isOpenModal} onClose={handleCloseModal} />
    </article>
  )
}

export default PaymentTable
