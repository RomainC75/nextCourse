import { getCommentsOnEvent, saveComment } from "../../../dummy-data";
import {
  getAllComments,
  mongoCommentSavingHandler,
  mongoConnect,
} from "../../../helpers/mongodb";

async function handler(req, res) {
  const { eventId } = req.query;
  console.log("==> eventId : ", eventId, req.url, req.body);
  let client;
  try {
    client = await mongoConnect();
  } catch (error) {
    return res.status(500).json({ message: "connecting to the db failed" });
  }

  if (req.method === "POST") {
    try {
      const newComment = JSON.parse(req.body);
      const id = new Date().toISOString();
      const comment = mongoCommentSavingHandler(client, "comment", {
        ...newComment,
        id,
        eventId,
      });

      return res.status(201).json({
        message: "comment saved",
        comment: { ...comment, id },
      });
    } catch (error) {
        return res.status(400).json({message : "saving comment failed"})
    }
  }

  const foundComments = await getAllComments(client, "comment", eventId);
  res.status(200).json(foundComments);
}

export default handler;
