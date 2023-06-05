import React from 'react'
import { Route, Routes } from 'react-router'
import PrivacyPolicy from '../views/PrivacyPolicy'
import PageNotFound from '../views/PageNotFound'
import Home from '../views/Home'

const index = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default index