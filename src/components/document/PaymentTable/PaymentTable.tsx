import { FC, useEffect, useState } from 'react'
import './PaymentTable.scss'
import Table from '../../ui/Table/Table'
import FormHeader from '../../ui/FormHeader/FormHeader'
import Button from '../../ui/Button/Button'
import Checkbox from '../../ui/Checkbox/Checkbox'
import Modal from '../Modal/Modal'
import { api } from '@/api/api'
import { useAppSelector } from '@/hooks'
import { TPayment } from '@/types'

const PaymentTable: FC = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const applicationId = useAppSelector((state) => state.loan.applicationId)
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
    { id: 'total_payment', name: 'TOTAL PAYMENT' },
    { id: 'interest_payment', name: 'INTEREST PAYMENT' },
    { id: 'debt_payment', name: 'DEBT PAYMENT' },
    { id: 'remaining_debt', name: 'REMAINING DEBT' },
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
          <Checkbox label='I agree with the payment schedule' isChecked={isChecked} onChange={handleCheckbox} />
          <Button name='Send' style={isChecked ? 'compBtn btn-table' : 'compBtnDisabled btn-table'} />
        </div>
      </section>
      <Modal isOpen={isOpenModal} onClose={handleCloseModal} />
    </article>
  )
}

export default PaymentTable
