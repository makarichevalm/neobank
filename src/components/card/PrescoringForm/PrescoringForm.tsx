import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import './PrescoringForm.scss'
import Button from '@/components/ui/Button/Button'
import Input from '@/components/ui/Input/Input'
import AmountInput from '@/components/ui/AmountInput/AmountInput'
import Divider from '@/components/ui/Divider/Divider'
import { IFormValues } from '@/types'
import FormHeader from '@/components/ui/FormHeader/FormHeader'
import Select from '@/components/ui/Select/Select'
import { utils } from '@/utils'
import { api } from '@/api/api'
import Loader from '@/components/ui/Loader/Loader'

const PrescoringForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitted },
  } = useForm<IFormValues>({
    defaultValues: {
      amount: 15000,
      term: 6,
    },
  })
  const onSubmit = async (data: IFormValues) => {
    setIsLoading(true)
    const correctData: IFormValues = {
      amount: data.amount,
      lastName: data.lastName.trim(),
      firstName: data.firstName.trim(),
      middleName: data.middleName === null ? '' : data.middleName.trim(),
      term: data.term,
      email: data.email.trim(),
      birthdate: data.birthdate,
      passportSeries: data.passportSeries,
      passportNumber: data.passportNumber,
    }
    try {
      await api.prescoringApplication(correctData)
    } catch (error) {
      console.log(error)
    }
  }
  const selectOptions = [
    { value: 6, name: '6 month' },
    { value: 12, name: '12 month' },
    { value: 18, name: '18 month' },
    { value: 24, name: '24 month' },
  ]
  return (
    <form className='prescoring' onSubmit={handleSubmit(onSubmit)}>
      <section className='prescoring_header'>
        <div className='prescoring_header_block'>
          <FormHeader value='Customize your card' step={1} />
          <AmountInput
            {...register('amount', {
              required: { value: true, message: 'Enter amount' },
              min: { value: 15000, message: 'Min amount is 15000 ₽' },
              max: { value: 600000, message: 'Max amount is 600000 ₽' },
            })}
            error={errors.amount}
            id='amount'
            type='number'
            label='Select amount'
            placeholder='15000'
            isRequired
            isSubmitted={isSubmitted}
          />
        </div>
        <div className='prescoring_header_divider'>
          <Divider style='formDivider-dashed' />
        </div>
        <div className='prescoring_header_amount'>
          <p className='prescoring_header_amount-text'>You have chosen the amount</p>
          <p className='prescoring_header_amount-value'>{watch('amount')} ₽</p>
          <Divider style='formDivider-solid' />
        </div>
      </section>
      <section className='prescoring_form'>
        <div className='prescoring_form-title'>Contact Information</div>
        <div className='prescoring_form_data'>
          <Input
            {...register('lastName', {
              required: { value: true, message: 'Enter your last name' },
            })}
            error={errors.lastName}
            id='lastName'
            label='Your last name'
            placeholder='For Example Doe'
            isRequired
            isSubmitted={isSubmitted}
          />
          <Input
            {...register('firstName', { required: { value: true, message: 'Enter your first name' } })}
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
            {...register('middleName')}
            error={errors.middleName}
            placeholder='For Example Victorovich'
            isSubmitted={isSubmitted}
          />
          <Select id='term' name='term' label='Select term' options={selectOptions} register={register} isRequired />
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
        <div className='prescoring_form_btn'>
          {isLoading ? <Loader /> : <Button name='Continue' style='compBtn' type='submit' />}
        </div>
      </section>
    </form>
  )
}

export default PrescoringForm
