import React from 'react'
import Header from '../../components/sections/Header'
import ServicesCarousel from '../../components/sections/ServicesCarousel'
import ServicesSkeleton from '../../components/sections/ServicesSkeleton'
import Footer from '../../components/sections/Footer'

function ServicesPage() {
    return (
        <div className='overflow-hidden'>
            <Header />
            <ServicesCarousel />
            <ServicesSkeleton />
            <Footer />
        </div>
    )
}

export default ServicesPage
