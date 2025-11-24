import React from 'react'

export default function About() {
    return (
        <div className='my-48 max-w-7xl mx-auto px-5'>
            <h2 className="text-secondary text-2xl text-center font-semibold">About</h2>
            <h1 className="text-4xl text-center font-bold w-1/2 mx-auto mt-4">
                Our Commitment to Flawless Execution
            </h1>
            <div className='flex justify-between items-center gap-20 mt-10'>
                {/* left side text*/}
                <div className='w-1/2 flex items-start flex-col gap-5'>
                    
                    <h1 className='text-3xl w-5/6 font-bold'>Our Commitment to Flawless Execution</h1>
                    <p className='w-5/6 '>At Momentum, we believe that every gathering—from corporate conferences to intimate weddings—is an opportunity to create something truly exceptional. We are more than just event managers; we are the architects of atmosphere and the curators of connection</p>
                    <button className='btn btn-primary text-white rounded-full'>Learn More</button>
                </div>
                {/* right side cards */}
                <div className='grid grid-cols-2 gap-5 w-1/2'>
                    
                </div>
            </div>
        </div>
    )
}
