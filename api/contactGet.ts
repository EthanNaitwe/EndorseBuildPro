import { storage } from "../server/storage";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const inquiries = await storage.getContactInquiries();
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contact inquiries" });
  }
}
