import {
  mongoConnect,
  mongoEmailRegistrationHandler,
} from "../../../helpers/mongodb";

async function handle(req, res) {
  let client;
  try {
    client = await mongoConnect();
  } catch (error) {
    return res.status(400).json({ message: "connecting to the db failed" });
  }
  console.log(req.body);
  if (req.method === "POST") {
    try {
      const ans = await mongoEmailRegistrationHandler(
        client,
        "registration",
        req.body
      );
      return res.status(201).json({
        message: "registered",
        email: ans,
      });
    } catch (error) {
        return res.status(400).json({ message: "inserting email failed" });
    }
  }
  res.status(400).json({ message: "expect a POST request" });
}

export default handle;
