import { FormEvent } from "react";
import content from '../common/content'

export default function RSVPForm(
    { lang, onSubmit }: { lang: string, onSubmit: (e: FormEvent<HTMLFormElement>) => void }
) {
    return <form onSubmit={onSubmit}>
        <label className="block">
            <span>{content[lang].email}</span>
            <input type="email" name="email" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"></input>
        </label>
        <label className="block mt-8">
            <span>{content[lang].lang_pref}</span>
            <select name="language" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black">
                <option value='en'>{content[lang].lang_option_en}</option>
                <option value='hn'>{content[lang].lang_option_hn}</option>
                <option value='mt'>{content[lang].lang_option_mt}</option>
            </select>
        </label>
        <label className="inline-block align-middle mt-8">
            <input name="to_delete" type='checkbox' />
            <span className='ml-2'>{content[lang].checkbox}</span>
        </label>
        <button type="submit" className="block mt-8 bg-slate-600 p-4 rounded-md hover:bg-slate-800 disabled:bg-slate-200 text-white">{content[lang].submit}</button>
    </form>

}