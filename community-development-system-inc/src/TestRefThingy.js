import React from 'react'
import { useInView } from 'react-intersection-observer'

function TestRefThingy() {

    const { ref: myRef, inView, entry } = useInView()

  return (
    <div ref={myRef} className={`div-containers ${inView ? 'changeBackground' : null}`}>
        <h1>Hello From the Other Div</h1>
    </div>
  )
}

export default TestRefThingy