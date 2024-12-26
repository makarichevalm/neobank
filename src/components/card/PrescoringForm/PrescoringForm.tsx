import { FC } from 'react'
import { useForm } from 'react-hook-form'
import './PrescoringForm.scss'
import Button from '@/components/ui/Button/Button'
import Input from '@/components/ui/Input/Input'
import AmountInput from '@/components/ui/AmountInput/AmountInput'
import Divider from '@/components/ui/Divider/Divider'
import Label from '@/components/ui/Label/Label'

const PrescoringForm: FC = () => {
  const { handleSubmit } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <article className='prescoring'>
      <section className='prescoring_header'>
        <div className='prescoring_header_block'>
          <div className='prescoring_header_block_text'>
            <h3 className='prescoring_header_block_text-h3'>Customize your card</h3>
            <span className='prescoring_header_block_text-span'>Step 1 of 5</span>
          </div>
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
          <div className='prescoring_form_data'>
            <Label value='Select amount'>
              <Input />
            </Label>
            <Label value='Select amount'>
              <Input />
            </Label>
            <Label value='Select amount'>
              <Input />
            </Label>
            <Label value='Select amount'>
              <Input />
            </Label>
            <Label value='Select amount'>
              <Input />
            </Label>
            <Label value='Select amount'>
              <Input />
            </Label>
            <Label value='Select amount'>
              <Input />
            </Label>
            <Label value='Select amount'>
              <Input />
            </Label>
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
