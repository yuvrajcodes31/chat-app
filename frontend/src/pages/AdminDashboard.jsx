import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {

    const { getAdminData, allUsers, deleteUser, pageCursor } = useContext(AuthContext)
    const navigate = useNavigate();
    const [page, setPage] = useState(1)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(10)
    const nextPage = () => {

        if (pageCursor !== null) {
            getAdminData(pageCursor)
        }
        if ( !(view.length < 10) ) {
            setStart(end)
            setEnd((prev) => prev + 10)
            setPage((prev)=> prev+1)

        }
    }

    const prevPage = () => {
        if(end>10){
            setEnd(start)
            setStart((prev)=> prev-10)
            setPage((prev)=> prev-1)
        }
    }

    let count = 1;
    let view = allUsers?.slice(start, end)

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='w-10/12 min-h-[95vh] backdrop-blur-2xl rounded-2xl px-2 relative'>
                <div className='flex justify-center'>
                    <h1 className='text-white text-lg md:text-2xl mt-5'>Admin Dashboard</h1>
                </div>
                <div>
                    <button onClick={()=> navigate('/')} className='text-white absolute top-4 right-5 border-t border-r border-l hover:scale-110 hover:translate-y-[-1]  transition px-1 py-1 rounded-md ease-in-out delay-150 cursor-pointer '>Go Back</button>
                </div>
                <hr className='h-1 bg-gray-400 w-full mt-2 mb-3' />
                <div className='bg-white rounded-2xl shadow p-5 pb-5'>
                    <div className=' overflow-x-scroll show-scrollbar pb-5'>
                        <h2 className='mb-3 ml-5'>All Users</h2>
                        <table className='w-full min-w-max text-left'>
                            <thead>
                                <tr className='border-b text-gray-600'>
                                    <th className='p-3'>S. No.</th>
                                    <th className='p-3'>User ID</th>
                                    <th className='p-3'>Full Name</th>
                                    <th className='p-3'>Email</th>
                                    <th className='p-3'>Bio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {view?.map((user) => (

                                    <tr key={user._id} className='border-b hover:bg-gray-50'>
                                        <td className='p-3'>{count++}</td>
                                        <td className='p-3'>{user._id}</td>
                                        <td className='p-3'>{user.fullName}</td>
                                        <td className='p-3'>{user.email}</td>
                                        <td className='p-3'>{user.bio}</td>
                                        <td className='p-3 space-x-2'>
                                            <button onClick={() => deleteUser(user._id)} className='px-3 py-1 bg-red-400 rounded-md cursor-pointer'>Delete User</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='font-semibold flex gap-10 pt-3'>
                            <button onClick={()=> prevPage()} className='cursor-pointer border hover:bg-gray-300 rounded-md py-1 px-2'>Previous</button>
                            <button onClick={() => nextPage()} className='cursor-pointer border hover:bg-gray-300 rounded-md py-1 px-2'>Next</button>

                            <p className='py-1 ml-10'>Page : {page} </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard