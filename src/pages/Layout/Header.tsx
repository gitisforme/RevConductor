import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { NavBar } from '../../components/NavBar'

const Header = () => {
  return (
    <div className='bg-white mb-2'>
      <div className='container divide-y'>
        <div className='p-2'>
          <NavBar />
        </div>
        <Breadcrumb />
      </div>
    </div>
  )
}

export default Header