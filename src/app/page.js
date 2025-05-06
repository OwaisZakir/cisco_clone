import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import InsideCisco from '@/components/InsideCisco'
import Items from '@/components/Items'
import Navbar from '@/components/Navbar'
import OurTechnology from '@/components/OurTechnology'
import QuickTasks from '@/components/QuickTasks'
import ResponsiveContentSections from '@/components/ResponsiveContentSections'
import TopHat from '@/components/TopHat'
import React from 'react'

function Page() {
  return (
    <>
      <TopHat />
      <Navbar />
      <Hero />
      <QuickTasks />
      <Items />
      <OurTechnology />
      <ResponsiveContentSections />
      <InsideCisco />
      <Footer />

    </ >
  )
}

export default Page