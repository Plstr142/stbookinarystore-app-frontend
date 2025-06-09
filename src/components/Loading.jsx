import React from 'react'

const Loading = () => {
    return (
        // <div className='flex justify-center items-center h-screen'>
        //     <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-[#808570] border-solid'>
        //     </div>
        // </div>
     

        <div className="flex justify-center items-center h-screen bg-transparent">
            <div className="relative w-20 h-20">
                <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-b-transparent border-l-[#808570] border-r-[#bcc4a1] animate-spin shadow-lg blur-sm"></div>
                <div className="absolute inset-2 rounded-full bg-transparent"></div>
            </div>
        </div>

    )
}

export default Loading