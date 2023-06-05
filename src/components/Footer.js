import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="bg-neutral-600 rounded-lg shadow m-4 dark:bg-gray-800">
            <div class="container">
                <div className='row w-full mx-auto max-w-screen-xl p-4 flex justify-between lg:gap-6 xl:gap-12 2xl:gap-24'>
                    <div className='col-md-6'>
                        <span class="text-sm text-gray-700 sm:text-center dark:text-gray-400">© 2023 <Link to="/">LoffAlert</Link>. All Rights Reserved.
                        </span>
                    </div>

                    <div className='col-md-6'>
                        <ul class="flex flex-wrap items-center text-sm font-medium text-gray-700 dark:text-gray-400 sm:mt-0">
                            <li className='mr-3'>
                                <Link to="/" class="mr-4 md:mr-6 ">Home</Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy" class="mr-4 md:mr-6">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer