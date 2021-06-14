import { table, minifyRecords } from "./utils/Airtable";

export default async () => {
  try {
    const records = await table.select({}).firstPage();
    const minifiedRecords = await minifyRecords(records);

    res.status(200);
    res.json(minifiedRecords);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "Something went wrong!" });
  }
};
