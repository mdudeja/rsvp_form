import { faBell, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function ErrorAlert({ message }: { message: string }) {
    const [showAlert, setShowAlert] = useState(true)

    return (
        <>
            {showAlert && (
                <div className={`error-alert bg-red-500 text-white px-6 py-4 border-0 rounded relative mb-4`}>
                    <span className='text-xl inline-block mr-5 align-middle'>
                        <FontAwesomeIcon icon={faBell} />
                    </span>
                    <span className='inline-block align-middle mr-8'>
                        <b className='capitalize'>Alert!</b> {message}
                    </span>
                    <button
                        className='absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-4 outline-none focus:outline-none'
                        onClick={() => setShowAlert(false)}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            )}
        </>
    )
}