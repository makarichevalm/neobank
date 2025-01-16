import { FC } from 'react'
import { useForm } from 'react-hook-form'
import './ScoringForm.scss'
import { IScoringValues } from '@/types'
import FormHeader from '@/components/ui/FormHeader/FormHeader'
import Input from '@/components/ui/Input/Input'
import Select from '@/components/ui/Select/Select'
import { DEPENDENT_OPTIONS, EMPLOYMENT_OPTIONS, GENDER_OPTIONS, MARITAL_OPTIONS, POSITION_OPTIONS } from '@/constants'
import Button from '@/components/ui/Button/Button'
import { utils } from '@/utils'
import { api } from '@/api/api'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setAppStep } from '@/store/applicationSlice'

const ScoringForm: FC = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitted },
  } = useForm<IScoringValues>({ defaultValues: { account: '11223344556677889900' } })
  const applicationId = useAppSelector((state) => state.loan.applicationId)
  const dispatch = useAppDispatch()
  const onSubmit = async (data: IScoringValues) => {
    console.log(data)
    try {
      await api.finishRegistration(applicationId as number, data)
      dispatch(setAppStep(4))
    } catch (error) {
      console.log(error)
    }
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
          {...register('gender', {
            required: { value: true, message: 'Select one of the options' },
          })}
          error={errors.gender}
          onChange={setValueForm}
          isRequired
          isHidden
        />
        <Select
          id='maritalStatus'
          label='Your marital status'
          options={MARITAL_OPTIONS}
          {...register('maritalStatus', {
            required: { value: true, message: 'Select one of the options' },
          })}
          error={errors.maritalStatus}
          onChange={setValueForm}
          isRequired
          isHidden
        />
        <Select
          id='dependentAmount'
          label='Your number of dependents'
          options={DEPENDENT_OPTIONS}
          {...register('dependentAmount', {
            required: { value: true, message: 'Select one of the options' },
          })}
          error={errors.dependentAmount}
          onChange={setValueForm}
          isRequired
          isHidden
        />
        <Input
          {...register('passportIssueDate', {
            required: { value: true, message: 'Enter date of issue' },
            pattern: {
              value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
              message: 'Incorrect date of issue, format: yyyy-mm-dd',
            },
            validate: (value) => utils.validateIssueDate(value as string),
          })}
          error={errors.passportIssueDate}
          id='passportIssueDate'
          label='Date of issue of the passport'
          placeholder='Select Date and Time'
          isRequired
          isSubmitted={isSubmitted}
        />
        <Input
          {...register('passportIssueBranch', {
            required: { value: true, message: 'Enter division code' },
            minLength: { value: 6, message: 'The code must be 6 digits' },
            maxLength: { value: 6, message: 'The code must be 6 digits' },
            min: { value: 0, message: 'The code cannot be negative' },
          })}
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
            {...register('employment.employmentStatus', {
              required: { value: true, message: 'Select one of the options' },
            })}
            error={errors.employment?.employmentStatus}
            onChange={setValueForm}
            isRequired
            isHidden
          />
          <Input
            {...register('employment.employerINN', {
              required: { value: true, message: 'Enter employer INN' },
              minLength: { value: 12, message: 'The INN must be 12 digits' },
              maxLength: { value: 12, message: 'The INN must be 12 digits' },
              min: { value: 0, message: 'The INN cannot be negative' },
            })}
            error={errors.employment?.employerINN}
            type='number'
            id='employerINN'
            label='Your employer INN'
            placeholder='000000000000'
            isRequired
            isSubmitted={isSubmitted}
          />
          <Input
            {...register('employment.salary', {
              required: { value: true, message: 'Enter your salary' },
              min: { value: 0, message: 'The salary cannot be negative' },
            })}
            error={errors.employment?.salary}
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
            {...register('employment.position', {
              required: { value: true, message: 'Select one of the options' },
            })}
            error={errors.employment?.position}
            onChange={setValueForm}
            isRequired
            isHidden
          />
          <Input
            {...register('employment.workExperienceTotal', {
              required: { value: true, message: 'Enter your work experience total' },
              maxLength: { value: 2, message: 'Your work experience cannot have more than 2 digits' },
              min: { value: 0, message: 'The experience cannot be negative' },
            })}
            error={errors.employment?.workExperienceTotal}
            type='number'
            id='workExperienceTotal'
            label='Your work experience total'
            placeholder='For example 10'
            isRequired
            isSubmitted={isSubmitted}
          />
          <Input
            {...register('employment.workExperienceCurrent', {
              required: { value: true, message: 'Enter your work experience current' },
              maxLength: { value: 2, message: 'Your work experience cannot have more than 2 digits' },
              min: { value: 0, message: 'The experience cannot be negative' },
            })}
            error={errors.employment?.workExperienceCurrent}
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
