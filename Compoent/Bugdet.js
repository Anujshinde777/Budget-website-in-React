import {React, useContext} from 'react'
import { AppContext } from './Context/AppContext'

const Bugdet = () => {
  const {budget} = useContext(AppContext)
  return (
    <div className="text-center">  
       <div className="alert alert-secondary">
         <span className='text-uppercase'>Budget: ${budget}</span>
       </div> 
    </div>
  )
}

export default Bugdet
