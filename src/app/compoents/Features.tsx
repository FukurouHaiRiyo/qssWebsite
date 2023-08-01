'use client'
import React from 'react';

const Features = () => {
    const StatsText = ({children}: {children: React.ReactNode}) => (
        <span className='font-bold text-white'>{children}</span>
    )

    const stats = [
        {
            title: '10+',
            content: (
                <>
                    <StatsText> Software modules </StatsText> for deailed monitoring and real-time analytics
                </>
            ),
        },

        {
            title: '24/7',
            content: (
                <>
                    <StatsText>Analytics</StatsText> enabled right in your dashboard without limitations
                </>
            ),
        },

        {
            title: '250M+',
            content: (
                <>
                    <StatsText>Plants</StatsText> currently connected and monitored by QSS™ software
                </>
            ),
        },
    ]

    return (
        <div className='bg-gray-800 relatve'>
            <div className='flex-1 z-0 lg:flex' style={{
                backgroundImage: "url('/templates/stats-grid-with-image.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                width: '50%',
                inset: 0,
                right: 0
            }}>
                <div className='bg-gradient-to-r from-gray-800 via-transparent to-transparent w-ull h-full'/>
            </div>

            <div className='max-w-7xl relative z-10'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex-1 lg:justify-center py-4 md:py-20 xl:py-60' style={{color: '#A0AECO'}}>
                        <div className='mb-8 md:mb-20'>
                            <span className='font-heading font-semibold text-xl uppercase mb-3 text-gray-500'>
                                Technology
                            </span>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                            {stats.map((stat) => (
                                <div key={stat.title} className='text-white'>
                                    <h3 className='text-3xl font-heading mb-3'>
                                        {stat.title}
                                    </h3>
                                    <p className='text-xl text-gray-400'>{stat.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;