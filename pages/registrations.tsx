import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Layout from '../components/Layout';
import { IParticipant } from '../common/IParticipant';

// Registrations Page

const Registrations: NextPage = () => {
    const router = useRouter();
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState(router.query.token);

    useEffect(() => {
        setToken(router.query.token);
    }, [router.query.token]);

    useEffect(() => {
        fetch(`/api/regis?token=${token}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setUsers(data.registrations);
                }
            });
    }, [users.length, token])

    return (
        <Layout onLangChange={(e) => { }}>
            <div className="mt-16">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">English Session</th>
                            <th className="px-4 py-2">Hindi Session</th>
                            <th className="px-4 py-2">To Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: IParticipant, idx) => {
                            return (
                                <tr key={idx}>
                                    <td className="border px-4 py-2">{user.pname}</td>
                                    <td className="border px-4 py-2">{user.email}</td>
                                    <td className="border px-4 py-2">{user.en_selected ? 'Yes' : 'No'}</td>
                                    <td className="border px-4 py-2">{user.hn_selected ? 'Yes' : 'No'}</td>
                                    <td className="border px-4 py-2">{user.toDelete ? 'Yes' : 'No'}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </Layout>
    )
}

export default Registrations