import { insertContactInquirySchema } from "../shared/schema";
import { storage } from "../server/storage";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      const inquiry = insertContactInquirySchema.parse(req.body);
      const createdInquiry = await storage.createContactInquiry(inquiry);
      res.status(201).json(createdInquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.toString() });
      } else {
        res.status(500).json({ message: "Failed to submit contact inquiry" });
      }
    }
  } else if (req.method === "GET") {
    try {
      const inquiries = await storage.getContactInquiries();
      res.status(200).json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact inquiries" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
