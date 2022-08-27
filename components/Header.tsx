import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent } from 'react';

const Header = ({ onLangChange }: { onLangChange: (e: ChangeEvent<HTMLSelectElement>) => void }) => {
    return (
        <header className="fixed top-0 left-0 right-0 max-h-16 z-50">
            <nav className='grid grid-rows-1 grid-cols-4 bg-slate-500 py-3 text-white'>
                <div className='col-span-3 md:col-span-2 flex justify-self-start items-center'>
                    <Link href='/'>
                        <a className='text-xl md:text-2xl font-bold ml-4'>Family Law Fundas RSVP</a>
                    </Link>
                </div>
                <div className='col-span-1 md:col-span-2 flex justify-end items-center mr-8'>
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