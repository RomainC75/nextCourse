import { MongoClient } from "mongodb";

const mongoConnect = async (res) => {
  const { MongoClient } = require("mongodb");
  const url =
    "mongodb+srv://mongoAUser:i6m3jV7kqz8XP2S@cluster0.cl4dl.mongodb.net/nextjs";
  const client = new MongoClient(url);
  await client.connect();
  return client;
};

const mongoEmailRegistrationHandler = async (client, collection, data) => {
  
    const db = client.db();
    const ans = await db
      .collection(collection)
      .insertOne({ email: data.email });
    console.log("ans : ", ans);
    await client.close();
    return ans;
  
};

const mongoCommentSavingHandler = async (client, collection, data) => {
  
    const db = client.db();
    const ans = await db.collection(collection).insertOne(data);
    console.log("ans : ", ans);
    await client.close();
    return ans;
  
};

const getAllComments = async (client, collection, eventId) => {
    const db = client.db();
    const ans = await db
      .collection(collection)
      .find({ eventId })
    //   .toSort({ _id: -1 })
      .toArray();

    console.log("==>ans : ", ans);
    await client.close();
    return ans;
};

export {
  mongoEmailRegistrationHandler,
  mongoCommentSavingHandler,
  getAllComments,
  mongoConnect,
};
