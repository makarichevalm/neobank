import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from '@/store'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
export const useCheckApplicationId = () => {
  const applicationId = useAppSelector((state) => state.loan.applicationId)
  const navigate = useNavigate()
  const { id } = useParams()
  useEffect(() => {
    if (applicationId !== Number(id) || !applicationId) navigate('/')
  }, [])
}
