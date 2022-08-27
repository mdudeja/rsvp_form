import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent } from 'react';

const Header = ({ onLangChange }: { onLangChange: (e: ChangeEvent<HTMLSelectElement>) => void }) => {
    return (
        <header className="fixed top-0 left-0 right-0">
            <nav className='grid grid-rows-1 grid-cols-4 gap-4 bg-slate-500 py-3 text-white'>
                <div className='col-span-1 flex justify-center items-center'>
                    <Link href='/'>
                        <a className='text-2xl font-bold'>Family Law Fundas Zoom RSVP</a>
                    </Link>
                </div>
                <div className='col-span-3 flex justify-end items-center mr-8'>
                    <select className='bg-slate-500 text-white' onChange={onLangChange}>
                        <option value='en'>English</option>
                        <option value='hn'>हिन्दी</option>
                        <option value='mt'>मराठी</option>
                    </select>
                    <FontAwesomeIcon icon={faCircleChevronDown} className="-ml-8" />
                </div>
            </nav>
        </header>
    );

}

export default Header