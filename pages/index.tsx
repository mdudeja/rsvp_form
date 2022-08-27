import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react';
import Layout from '../components/Layout';
import RSVPForm from '../components/RSVPForm';
import content from '../common/content'
import { validateEmail } from '../common/validators';
import ErrorAlert from '../components/ErrorAlert';
import SuccessAlert from '../components/SuccessAlert';

const Index: NextPage = () => {
  const [lang, setLang] = useState('en');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');


  return (
    <Layout onLangChange={(e) => {
      setLang(e.target.value)
    }}>
      {errorMsg.length > 0 && <ErrorAlert message={errorMsg} />}
      {successMsg.length > 0 && <SuccessAlert message={successMsg} />}
      <div className='grid grid-cols-1 md:grid-cols-2 w-screen h-screen mx-0 place-items-center mt-16'>
        <div className='bg-cover w-full h-full' style={{ backgroundImage: `url(/images/rainbow.jpg)` }}>
          <p className='fixed bottom-0 left-4 right-0'>
            Photo by <a className='text-sky-800' href="https://unsplash.com/@sharonmccutcheon">
              Alexander Grey
            </a> on <a className='text-sky-800' href="https://unsplash.com/s/photos/queer">
              Unsplash
            </a>
          </p>
        </div>
        <div className='fixed sm:inset-auto md:relative px-10 py-10 mx-4 bg-white rounded-md'>
          <p className='text-2xl mb-8'>{content[lang].description}</p>
          <div>
            <RSVPForm lang={lang} onSubmit={async function handleSubmit(event) {
              event.preventDefault();

              const form = event.currentTarget
              const pname = form.pname.value
              const email = form.email.value
              const en_selected = form.en_selected.checked
              const hn_selected = form.hn_selected.checked
              const mt_selected = form.mt_selected.checked
              const toDelete = form.to_delete.checked

              if (email && validateEmail(email)) {
                const body = {
                  pname,
                  email,
                  en_selected,
                  hn_selected,
                  mt_selected,
                  toDelete
                }
                const response = await fetch('/api/rsvp', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(body)
                })
                const data = await response.json()
                if (data.success) {
                  setSuccessMsg(content[lang].success)
                } else {
                  setErrorMsg(content[lang].error)
                }
              }
            }} />
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default Index
