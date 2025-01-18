import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import './PrescoringForm.scss'
import Button from '@/components/ui/Button/Button'
import Input from '@/components/ui/Input/Input'
import AmountInput from '@/components/ui/AmountInput/AmountInput'
import Divider from '@/components/ui/Divider/Divider'
import { IPrescoringValues } from '@/types'
import FormHeader from '@/components/ui/FormHeader/FormHeader'
import Select from '@/components/ui/Select/Select'
import { utils } from '@/utils'
import { api } from '@/api/api'
import Loader from '@/components/ui/Loader/Loader'
import { TERM_OPTIONS } from '@/constants'
import { useAppDispatch } from '@/hooks'
import { setBtnText, setAppStep, setOffers } from '@/store/applicationSlice'

const PrescoringForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorSubmit, setErrorSubmit] = useState<null | string>(null)
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors, isSubmitted },
  } = useForm<IPrescoringValues>({
    defaultValues: {
      amount: 15000,
      term: TERM_OPTIONS[0].value,
    },
  })
  const dispatch = useAppDispatch()
  const onSubmit = async (data: IPrescoringValues) => {
    setIsLoading(true)
    setErrorSubmit(null)
    const correctData: IPrescoringValues = {
      amount: Number(data.amount),
      term: Number(data.term),
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      middleName: !data.middleName ? null : data.middleName.trim(),
      email: data.email.trim(),
      birthdate: data.birthdate,
      passportSeries: data.passportSeries,
      passportNumber: data.passportNumber,
    }
    console.log(correctData)
    try {
      const response = await api.prescoringApplication(correctData)
      dispatch(setOffers(response))
      dispatch(setBtnText('Choose an offer'))
      dispatch(setAppStep(2))
    } catch (error) {
      setErrorSubmit('Sorry, there was an internal error. Try sending again later')
    } finally {
      setIsLoading(false)
    }
  }
  const setTerm = (val: number) => {
    setValue('term', val)
  }
  const getAmount = Number(watch('amount'))
  const setAmount = (amount: number) => {
    setValue('amount', amount)
  }
  return (
    <form className='prescoring' onSubmit={handleSubmit(onSubmit)}>
      <section className='prescoring_header'>
        <div className='prescoring_header_block'>
          <FormHeader value='Customize your card' step={1} />
          <AmountInput
            {...register('amount')}
            id='amount'
            amount={getAmount}
            handleAmount={setAmount}
            label='Select amount'
            min={15000}
            max={600000}
            step={5000}
          />
        </div>
        <div className='prescoring_header_divider'>
          <Divider style='formDivider-dashed' />
        </div>
        <div className='prescoring_header_amount'>
          <p className='prescoring_header_amount-text'>You have chosen the amount</p>
          <p className='prescoring_header_amount-value'>{getAmount.toLocaleString('ru-RU')} ₽</p>
          <Divider style='formDivider-solid' />
        </div>
      </section>
      <section className='prescoring_form'>
        <div className='prescoring_form-title'>Contact Information</div>
        <div className='prescoring_form_data'>
          <Input
            {...register('lastName', {
              required: { value: true, message: 'Enter your last name' },
              pattern: { value: /^[A-Z]/, message: 'The first must start with a capital letter' },
            })}
            error={errors.lastName}
            id='lastName'
            label='Your last name'
            placeholder='For Example Doe'
            isRequired
            isSubmitted={isSubmitted}
          />
          <Input
            {...register('firstName', {
              required: { value: true, message: 'Enter your first name' },
              pattern: { value: /^[A-Z]/, message: 'The first name must start with a capital letter' },
            })}
            error={errors.firstName}
            id='firstName'
            label='Your first name'
            placeholder='For Example Jhon'
            isRequired
            isSubmitted={isSubmitted}
          />
          <Input
            id='middleName'
            label='Your patronymic'
            {...register('middleName', {
              pattern: { value: /^[A-Z]/, message: 'The patronymic must start with a capital letter' },
            })}
            error={errors.middleName}
            placeholder='For Example Victorovich'
            isSubmitted={isSubmitted}
          />
          <Select
            id='term'
            label='Select term'
            options={TERM_OPTIONS}
            {...register('term')}
            defaultValue={TERM_OPTIONS[0].value}
            onChange={setTerm}
            isRequired
          />
          <Input
            id='email'
            type='email'
            label='Your email'
            {...register('email', {
              required: { value: true, message: 'Enter your email' },
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, message: 'Incorrect email address' },
            })}
            error={errors.email}
            placeholder='test@gmail.com'
            isRequired
            isSubmitted={isSubmitted}
          />
          <Input
            {...register('birthdate', {
              required: { value: true, message: 'Enter date of birth' },
              pattern: {
                value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
                message: 'Incorrect date of birth, format: yyyy-mm-dd',
              },
              validate: (value) => utils.validateFormDate(value as string),
            })}
            error={errors.birthdate}
            id='birthdate'
            label='Your date of birth'
            placeholder='Select Date and Time'
            isRequired
            isSubmitted={isSubmitted}
          />
          <Input
            {...register('passportSeries', {
              required: { value: true, message: 'Enter your passport series' },
              minLength: { value: 4, message: 'The series must be 4 digits' },
              maxLength: { value: 4, message: 'The series must be 4 digits' },
              min: { value: 0, message: 'The series cannot be negative' },
            })}
            error={errors.passportSeries}
            type='number'
            id='passportSeries'
            label='Your passport series'
            placeholder='0000'
            isRequired
            isSubmitted={isSubmitted}
          />
          <Input
            {...register('passportNumber', {
              required: { value: true, message: 'Enter your passport number' },
              minLength: { value: 6, message: 'The number must be 6 digits' },
              maxLength: { value: 6, message: 'The number must be 6 digits' },
              min: { value: 0, message: 'The number cannot be negative' },
            })}
            error={errors.passportNumber}
            id='passportNumber'
            type='number'
            label='Your passport number'
            placeholder='000000'
            isRequired
            isSubmitted={isSubmitted}
          />
        </div>
        {errorSubmit && <div className='form_error-text'>{errorSubmit}</div>}
        <div className='prescoring_form_btn'>
          {isLoading ? <Loader /> : <Button name='Continue' style='compBtn btn-form' type='submit' />}
        </div>
      </section>
    </form>
  )
}

export default PrescoringForm
