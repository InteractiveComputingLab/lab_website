import React from 'react'
import Professors from './Professors'
import Phdstudents from './Phdstudents'
import Mastersstudents from './Mastersstudents'
import Undergraduatestudents from './Undergraduatestudents'

const Labmembers = () => {
  return (
    <>
      <div className="container mx-auto text-center mt-10">
        <h1 className="text-4xl font-bold text-black mb-12">
          Lab Members
        </h1>
      </div>

      <Professors/>
      <Phdstudents/>
      <Mastersstudents/>
      <Undergraduatestudents/>
    </>
  )
}

export default Labmembers