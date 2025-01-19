import { FC, useEffect, useRef, useState } from 'react'
import './CodeModule.scss'
import Loader from '../../ui/Loader/Loader'
import { api } from '@/api/api'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setAppStep } from '@/store/applicationSlice'

const CodeModule: FC = () => {
  const [digits, setDigits] = useState(['', '', '', ''])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorSubmit, setErrorSubmit] = useState<null | string>(null)
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, position: number) => {
    const num = e.target.value
    if (/[^0-9]/.test(num)) return
    const newCode = [...digits]
    newCode[position] = num
    setDigits(newCode)
    if (position !== 3) {
      inputRefs.current[position + 1]?.focus()
    }
    if (newCode.every((num) => num !== '')) {
      handleSubmit(newCode.join(''))
    }
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, position: number) => {
    if (e.key === 'Backspace' && !digits[position] && position !== 0) {
      const newCode = [...digits]
      newCode[position - 1] = ''
      setDigits(newCode)
      inputRefs.current[position - 1]?.focus()
    }
  }
  const dispatch = useAppDispatch()
  const applicationId = useAppSelector((state) => state.loan.applicationId)
  const handleSubmit = async (code: string) => {
    console.log(code)
    setIsLoading(true)
    setErrorSubmit(null)
    try {
      if (applicationId) {
        await api.sendCode(applicationId, code)
        dispatch(setAppStep(7))
      }
    } catch (error) {
      setErrorSubmit('Invalid confirmation code')
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])
  return (
    <article className='code'>
      <h2>Please enter confirmation code</h2>
      <section className='code_number'>
        {digits.map((digit, index) => (
          <input
            key={index}
            className='code_number-input'
            type='text'
            inputMode='numeric'
            maxLength={1}
            placeholder=''
            value={digit}
            onChange={(e) => handleChangeInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </section>
      {isLoading ? <Loader /> : <div>{errorSubmit}</div>}
    </article>
  )
}

export default CodeModule
