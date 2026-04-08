import React from 'react'

const Payments = () => {
  return (
    <div className='p-6'>
        <h3 className='text-lg tracking-tight font-bold text-zinc-900 mb-4'>
            Scheduled Payments
        </h3>

        <div>
            <table className='min-w-full divide-y divide-zinc-200'>

                {/* Head */}
                <thead className='bg-zinc-50'>
                    <tr>
                        <th scop="col" className='px-4 p-3 text-left text-xs font-medium text-zinc-500 uppercase'>
                            Payee
                        </th>

                        <th scop="col" className='px-4 p-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider'>
                            Amount
                        </th>

                        <th scop="col" className='px-4 p-3 text-left text-xs font-medium text-zinc-500 uppercase'>
                            Date
                        </th>

                        <th scop="col" className='px-4 p-3 text-left text-xs font-medium text-zinc-500 uppercase'>
                            Status
                        </th>

                    </tr>
                </thead>

                {/* Body */}
                <tbody className='divide-y divide-zinc-200'>

                    {/* Row 1 */}
                    <tr>
                        <td className='p-4 whitespace-nowrap text-sm font-medium text-zinc-900'>
                            <div className='flex items-center space-x-2'>
                                {/* Img */}
                                <div className="size-9 bg-zinc-200 rounded-full center-item text-zinc-500 overflow-clip">
                                    <img src="/user-2.png" alt="profile-image" />
                                </div>

                                {/* Text */}
                                <span>Loan Payment</span>
                            </div>
                        </td>

                        <td className='p-4 whitespace-nowrap text-sm font-medium text-zinc-600'>
                            -₹32,458.98
                        </td>

                        <td className='p-4 whitespace-nowrap text-sm font-medium text-zinc-600'>
                            Today, 15:00
                        </td>

                        <td className='p-4 whitespace-nowrap text-sm font-medium text-green-600 flex items-center'>
                            <div className='bg-green-100 py-1 px-2 rounded-full'>
                                <span className='inline-block w-2 h-2  mr-1 rounded-full bg-green-500'>

                                </span>
                                Approved
                            </div>
                        </td>


                    </tr>

                    {/* Row 2 */}
                    <tr>
                        <td className='p-4 whitespace-nowrap text-sm font-medium text-zinc-900'>
                            <div className='flex items-center space-x-2'>
                                {/* Img */}
                                <div className="size-9 bg-zinc-200 rounded-full center-item text-zinc-500 overflow-clip">
                                    <img src="/user-5.png" alt="profile-image" />
                                </div>

                                {/* Text */}
                                <span>Home Credit</span>
                            </div>
                        </td>

                        <td className='p-4 whitespace-nowrap text-sm font-medium text-zinc-600'>
                            -₹1,11,287.94
                        </td>

                        <td className='p-4 whitespace-nowrap text-sm font-medium text-zinc-600'>
                            Tomorrow, 18:30
                        </td>

                        <td className='p-4 whitespace-nowrap text-sm font-medium text-orange-600 flex items-center'>
                            <div className='bg-orange-100 py-1 px-2 rounded-full'>
                                <span className='inline-block w-2 h-2  mr-1 rounded-full bg-orange-500'>

                                </span>
                                Pending
                            </div>
                        </td>


                    </tr>

                    {/* Row 3 */}
                    <tr>
                        <td className='p-4 whitespace-nowrap text-sm font-medium text-zinc-900'>
                            <div className='flex items-center space-x-2'>
                                {/* Img */}
                                <div className="size-9 bg-zinc-200 rounded-full center-item text-zinc-500 overflow-clip">
                                    <img src="/user-4.png" alt="profile-image" />
                                </div>

                                {/* Text */}
                                <span>Student Loan</span>
                            </div>
                        </td>

                        <td className='p-4 whitespace-nowrap text-sm font-medium text-zinc-600'>
                            -₹13,900.00
                        </td>

                        <td className='p-4 whitespace-nowrap text-sm font-medium text-zinc-600'>
                            Fri, 10:00
                        </td>

                        <td className='p-4 whitespace-nowrap text-sm font-medium text-red-600 flex items-center'>
                            <div className='bg-red-100 py-1 px-2 rounded-full'>
                                <span className='inline-block w-2 h-2  mr-1 rounded-full bg-red-500'>

                                </span>
                                Declined
                            </div>
                        </td>


                    </tr>
                </tbody>

            </table>
        </div>
      
    </div>
  )
}

export default Payments
