import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import './PrescoringForm.scss'
import Button from '@/components/ui/Button/Button'
import Input from '@/components/ui/Input/Input'
import AmountInput from '@/components/ui/AmountInput/AmountInput'
import Divider from '@/components/ui/Divider/Divider'
import { IFormValues } from '@/types'
import FormHeader from '@/components/ui/FormHeader/FormHeader'
import Select from '@/components/ui/Select/Select'

const PrescoringForm: FC = () => {
  const { handleSubmit, register } = useForm<IFormValues>()
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data)
  }
  const selectOptions = [
    { value: 6, name: '6 month' },
    { value: 12, name: '12 month' },
    { value: 18, name: '18 month' },
    { value: 24, name: '24 month' },
  ]
  return (
    <article className='prescoring'>
      <section className='prescoring_header'>
        <div className='prescoring_header_block'>
          <FormHeader value='Customize your card' step={1} />
          <AmountInput />
        </div>
        <div className='prescoring_header_divider'>
          <Divider style='formDivider-dashed' />
        </div>
        <div className='prescoring_header_amount'>
          <p className='prescoring_header_amount-text'>You have chosen the amount</p>
          <p className='prescoring_header_amount-value'>150 000 ₽</p>
          <Divider style='formDivider-solid' />
        </div>
      </section>
      <section className='prescoring_form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='prescoring_form-title'>Contact Information</div>
          <div className='prescoring_form_data'>
            <Input
              id='lastName'
              label='Your last name'
              {...register('lastName')}
              placeholder='For Example Doe'
              required
            />
            <Input
              id='firstName'
              label='Your first name'
              {...register('firstName')}
              placeholder='For Example Jhon'
              required
            />
            <Input
              id='middleName'
              label='Your patronymic'
              {...register('middleName')}
              placeholder='For Example Victorovich'
            />
            <Select id='term' name='term' label='Select term' options={selectOptions} register={register} required />
            <Input
              id='email'
              type='email'
              label='Your email'
              {...register('email')}
              placeholder='test@gmail.com'
              required
            />
            <Input
              id='birthdate'
              label='Your date of birth'
              {...register('birthdate')}
              placeholder='Select Date and Time'
              required
            />
            <Input
              id='passportSeries'
              type='number'
              label='Your passport series'
              {...register('passportSeries')}
              placeholder='0000'
              required
            />
            <Input
              id='passportNumber'
              type='number'
              label='Your passport number'
              {...register('passportNumber')}
              placeholder='000000'
              required
            />
            {/*<Input register={register} name='lastName' label='Your last name' placeholder='For Example Doe' required />*/}
          </div>
          <div className='prescoring_form_btn'>
            <Button name='Continue' style='compBtn' type='submit' />
          </div>
        </form>
      </section>
    </article>
  )
}

export default PrescoringForm
