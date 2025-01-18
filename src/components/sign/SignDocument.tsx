import { FC, useState } from 'react'
import './SignDocument.scss'
import FormHeader from '../ui/FormHeader/FormHeader'
import fileIcon from '@assets/icons/fileIcon.svg'
import offerFile from '@assets/files/credit-card-offer.pdf'
import Checkbox from '../ui/Checkbox/Checkbox'
import Button from '../ui/Button/Button'
import { api } from '@/api/api'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setAppStep } from '@/store/applicationSlice'
const SignDocument: FC = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckbox = (checked: boolean) => {
    setIsChecked(checked)
  }
  const applicationId = useAppSelector((state) => state.loan.applicationId)
  const dispatch = useAppDispatch()
  const handleSign = async () => {
    if (isChecked) {
      try {
        await api.signDocuments(Number(applicationId))
        dispatch(setAppStep(6))
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <article className='sign'>
      <div className='sign_header'>
        <FormHeader value='Signing of documents' step={4} />
      </div>
      <p className='sign_text'>
        Information on interest rates under bank deposit agreements with individuals. Center for Corporate Information
        Disclosure. Information of a professional participant in the securities market. Information about persons under
        whose control or significant influence the Partner Banks are. By leaving an application, you agree to the
        processing of personal data, obtaining information, obtaining access to a credit history, using an analogue of a
        handwritten signature, an offer, a policy regarding the processing of personal data, a form of consent to the
        processing of personal data.
      </p>
      <div className='sign_file'>
        <img src={fileIcon} alt='file' />
        <a className='sign_file-ref' href={offerFile} target='_blank' download='credit-card-offer'>
          Information on your card
        </a>
      </div>
      <div className='sign_send'>
        <Checkbox label='I agree' isChecked={isChecked} onChange={handleCheckbox} />
        <Button name='Send' style={isChecked ? 'compBtn btn-form' : 'compBtnDisabled btn-form'} onClick={handleSign} />
      </div>
    </article>
  )
}

export default SignDocument
