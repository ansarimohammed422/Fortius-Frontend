import React from 'react'

const Test = () => {
    return (
        <>
            <div className='h-screen w-full bg-teal-50 flex justify-center items-center'>
                <div className='[background:linear-gradient(45deg,#F0FDFA,theme(colors.teal.50)_50%,#F0FDFA)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.teal.400)_80%,_theme(colors.teal.500)_86%,_theme(colors.teal.600)_90%,_theme(colors.teal.700)_94%,_theme(colors.blue.950))_border-box] border-4 border-transparent animate-border rounded-full overflow-hidden'>
                    <div className="bg-[url('./assets/New_teal.jpg')] bg-cover bg-no-repeat">
                        <div className='text-6xl font-black text-blue-950 bg-teal-400/30 backdrop-blur-lg p-20'>Book Appointment Now</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Test