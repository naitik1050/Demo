import React, { useEffect } from 'react'
import AppRouter from './router'
import './choices.min.css'
import { useDispatch } from 'react-redux'
import { userConstants } from './constants'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: userConstants.APPLY_MODE_SUCCESS, payload: true })
    // document.getElementById('theme-opt').href = './css/style.min.css'
  }, [])

  return <AppRouter />
}

// test to show Chris 

export default App
