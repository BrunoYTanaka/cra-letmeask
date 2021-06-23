import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuth = () => {
  const { user, signInWithGoogle } = useContext(AuthContext)
  return {
    user,
    signInWithGoogle
  }
}