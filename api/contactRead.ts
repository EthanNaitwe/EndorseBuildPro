import { storage } from "../server/storage";

export default async function handler(req: any, res: any) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const id = Number(req.query.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid inquiry ID" });
  }

  try {
    await storage.markInquiryAsRead(id);
    res.status(200).json({ message: "Inquiry marked as read" });
  } catch (error) {
    res.status(500).json({ message: "Failed to mark inquiry as read" });
  }
}
