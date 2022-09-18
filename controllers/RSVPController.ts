import { Db } from "mongodb";
import dbConnect from "../common/dbConntect"
import { isDBConnected } from '../common/dbConntect';

const _init = async (): Promise<Db | undefined> => {
    const connection = await dbConnect()
    if (connection) {
        const { db } = connection

        if (isDBConnected()) {
            return db
        }
    }
}

export const addEntry = async (data:
    { pname: string, email: string, en_selected: boolean, hn_selected: boolean, toDelete: boolean }): Promise<boolean> => {
    const exists = await fetchEntry({ email: data.email })

    if (!exists) {
        const db = await _init()
        if (db) {
            const collection = db.collection('rsvp')
            const result = await collection.insertOne(data)
            return result && result.acknowledged
        }
    }
    return false
}

export const fetchEntry = async (query: { [key: string]: any }): Promise<any> => {
    const db = await _init()
    if (db) {
        const collection = db.collection('rsvp')
        const result = await collection.findOne(query)
        return result
    }
    return null
}