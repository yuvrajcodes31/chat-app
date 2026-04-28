import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'


function ChangePassword() {

    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const {changePassword} = useContext(AuthContext)

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await changePassword({newPassword, currentPassword})
            navigate('/')
            return
        } catch (error) {
            toast.error(error.message)
            return
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='backdrop-blur-2xl w-5/6 max-w-2xl min-h-[50vh] text-gray-300 flex justify-center items-center rounded-2xl'>

                <form onSubmit={handleSubmit} className='flex flex-col gap-6 '>
                    <h3 className='text-2xl mb-2'>Change Password</h3>
                    <label htmlFor="currentPassword" className='flex '>
                        <input onChange={(e) => setCurrentPassword(e.target.value)} value={currentPassword} id='currentPassword' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 mr-8' type="text" />
                        Current Password
                    </label>
                    <label htmlFor="newPassword">
                        <input onChange={(e) => setNewPassword(e.target.value)} value={newPassword} id='newPassword' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 mr-8' type="text" />
                        New Password
                    </label>
                    <div className='flex justify-center mt-5'>
                        <button type='submit' className='bg-violet-500 py-1 px-2 rounded-2xl w-5/6 cursor-pointer font-semibold'>Submit</button>
                    </div>
                </form>
                <button onClick={()=> navigate('/')} className='absolute right-10 top-10 backdrop-blur-2xl border-2 border-gray-600 py-1 px-2 rounded-2xl cursor-pointer '>Go Back</button>
            </div>
        </div>
    )
}

export default ChangePassword