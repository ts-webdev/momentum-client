import React from 'react'

export default function LatestNews() {
    return (
        <div className='my-48 max-w-7xl mx-auto px-5 '>
            <h2 className="text-secondary text-2xl text-center font-semibold">Our Events Blog</h2>
            <h1 className="text-4xl text-center font-bold w-1/2 mx-auto mt-4">
                Latest News & Blog
            </h1>
            <div className='mt-10'>
                <div className="card card-side bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
