import Image from 'next/image'
import React from 'react'

export default function EventOrganizer() {
    return (
        <div className='my-48 bg-linear-to-b from-[#FFC8DD]/30 to-white'>
            <div className="max-w-7xl mx-auto py-20 px-5">
                <h2 className="text-[#CDB4DB] text-2xl text-center font-semibold">Event Organizer</h2>
                <h1 className="text-4xl text-center font-bold w-1/2 mx-auto mt-4">
                    Our Passionate Planners
                </h1>
                <div className='flex justify-between items-center gap-20 mt-10'>
                    {/* left side text*/}
                    <div className='w-1/2 flex items-center flex-col gap-5 text-center'>
                    <Image src="/logo.png" height={100} width={100} alt='Momentum logo'/>
                        <h1 className='text-5xl w-5/6 font-bold mx-auto'>Meet Our Creative Event Organizer</h1>
                        <p className='w-5/6 '>Our team is a collective of highly creative, dedicated, and experienced event professionals committed to transforming your unique vision into a seamless and spectacular reality. We go beyond mere logistics; we focus on the emotional flow, personalized design that makes your event truly stand out.</p>
                        <button className='btn btn-primary text-white rounded-full'>Learn More</button>
                    </div>
                    {/* right side cards */}
                    <div className='grid grid-cols-2 gap-5 w-1/2'>
                        <div className='bg-white shadow-sm flex  flex-col items-center p-5'>
                            <Image src="/organizers/1.png" width={250} height={100} alt='organier photo'/>
                           <h3 className='text-2xl mt-3 font-bold'> Lucy Deans</h3>
                        </div>
                        <div className='bg-white shadow-sm flex  flex-col items-center p-5'>
                            <Image src="/organizers/1.png" width={250} height={100} alt='organier photo'/>
                           <h3 className='text-2xl mt-3 font-bold'> Lucy Deans</h3>
                        </div>
                        <div className='bg-white shadow-sm flex  flex-col items-center p-5'>
                            <Image src="/organizers/1.png" width={250} height={100} alt='organier photo'/>
                           <h3 className='text-2xl mt-3 font-bold'> Lucy Deans</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
