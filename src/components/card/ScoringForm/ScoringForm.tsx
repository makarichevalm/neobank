import { FC } from 'react'
import { useForm } from 'react-hook-form'
import './ScoringForm.scss'
import { IScoringValues } from '@/types'
import FormHeader from '@/components/ui/FormHeader/FormHeader'
import Input from '@/components/ui/Input/Input'
import Select from '@/components/ui/Select/Select'
import { DEPENDENT_OPTIONS, EMPLOYMENT_OPTIONS, GENDER_OPTIONS, MARITAL_OPTIONS, POSITION_OPTIONS } from '@/constants'
import Button from '@/components/ui/Button/Button'

const ScoringForm: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitted },
  } = useForm<IScoringValues>()
  const onSubmit = async (data: IScoringValues) => {
    console.log(data)
  }
  const setValueForm = (val: number, name: any) => {
    setValue(name, val)
  }
  return (
    <form className='scoring' onSubmit={handleSubmit(onSubmit)}>
      <div className='scoring_header'>
        <FormHeader value='Continuation of the application' step={2} />
      </div>
      <section className='scoring_data'>
        <Select
          id='gender'
          label="What's your gender"
          options={GENDER_OPTIONS}
          {...register('gender')}
          onChange={setValueForm}
          isRequired
          isHidden
        />
        <Select
          id='maritalStatus'
          label='Your marital status'
          options={MARITAL_OPTIONS}
          {...register('maritalStatus')}
          onChange={setValueForm}
          isRequired
          isHidden
        />
        <Select
          id='dependentAmount'
          label='Your number of dependents'
          options={DEPENDENT_OPTIONS}
          {...register('dependentAmount')}
          onChange={setValueForm}
          isRequired
          isHidden
        />
        <Input
          {...register('passportIssueDate')}
          error={errors.passportIssueDate}
          type='number'
          id='passportIssueDate'
          label='Date of issue of the passport'
          placeholder='Select Date and Time'
          isRequired
          isSubmitted={isSubmitted}
        />
        <Input
          {...register('passportIssueBranch')}
          error={errors.passportIssueBranch}
          type='number'
          id='passportIssueBranch'
          label='Division code'
          placeholder='000000'
          isRequired
          isSubmitted={isSubmitted}
        />
      </section>
      <section className='scoring_emp'>
        <h3>Employment</h3>
        <div className='scoring_emp_fields'>
          <Select
            id='employmentStatus'
            label='Your employment status'
            options={EMPLOYMENT_OPTIONS}
            {...register('employmentStatus')}
            onChange={setValueForm}
            isRequired
            isHidden
          />
          <Input
            {...register('employerINN')}
            error={errors.employerINN}
            type='number'
            id='employerINN'
            label='Your employer INN'
            placeholder='000000000000'
            isRequired
            isSubmitted={isSubmitted}
          />
          <Input
            {...register('salary')}
            error={errors.salary}
            type='number'
            id='salary'
            label='Your salary'
            placeholder='For example 100 000'
            isRequired
            isSubmitted={isSubmitted}
          />
          <Select
            id='position'
            label='Your position'
            options={POSITION_OPTIONS}
            {...register('position')}
            onChange={setValueForm}
            isRequired
            isHidden
          />
          <Input
            {...register('workExperienceTotal')}
            error={errors.workExperienceTotal}
            type='number'
            id='workExperienceTotal'
            label='Your work experience total'
            placeholder='For example 10'
            isRequired
            isSubmitted={isSubmitted}
          />
          <Input
            {...register('workExperienceCurrent')}
            error={errors.workExperienceCurrent}
            type='number'
            id='workExperienceCurrent'
            label='Your work experience current'
            placeholder='For example 2'
            isRequired
            isSubmitted={isSubmitted}
          />
        </div>
      </section>
      <div className='scoring_btn'>
        <Button name='Continue' style='compBtn' type='submit' />
      </div>
    </form>
  )
}

export default ScoringForm
