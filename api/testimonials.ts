import { insertTestimonialSchema } from "../shared/schema";
import { storage } from "../server/storage";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    try {
      const testimonials = await storage.getApprovedTestimonials();
      res.status(200).json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  } else if (req.method === "POST") {
    try {
      const testimonial = insertTestimonialSchema.parse(req.body);
      const createdTestimonial = await storage.createTestimonial(testimonial);
      res.status(201).json(createdTestimonial);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.toString() });
      } else {
        res.status(500).json({ message: "Failed to submit testimonial" });
      }
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
