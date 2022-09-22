import { Db } from "mongodb";
import dbConnect from "../common/dbConntect";
import { isDBConnected } from "../common/dbConntect";
import { IParticipant } from "../common/IParticipant";

const _init = async (): Promise<Db | undefined> => {
  const connection = await dbConnect();
  if (connection) {
    const { db } = connection;

    if (isDBConnected()) {
      return db;
    }
  }
};

export const getRegistrations = async (): Promise<IParticipant[]> => {
  const db = await _init();
  if (db) {
    const collection = db.collection("rsvp");
    const result = await collection.find({}).toArray();
    return result.map((item: any) => {
      return {
        pname: item.pname,
        email: item.email,
        en_selected: item.en_selected,
        hn_selected: item.hn_selected,
        toDelete: item.toDelete,
      };
    });
  }

  return [];
};
