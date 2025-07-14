import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertTestimonialSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact inquiry routes
  app.post("/api/contact", async (req, res) => {
    try {
      const inquiry = insertContactInquirySchema.parse(req.body);
      const createdInquiry = await storage.createContactInquiry(inquiry);
      res.json(createdInquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.toString() });
      } else {
        res.status(500).json({ message: "Failed to submit contact inquiry" });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact inquiries" });
    }
  });

  app.patch("/api/contact/:id/read", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid inquiry ID" });
      }
      
      await storage.markInquiryAsRead(id);
      res.json({ message: "Inquiry marked as read" });
    } catch (error) {
      res.status(500).json({ message: "Failed to mark inquiry as read" });
    }
  });

  // Testimonial routes
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getApprovedTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  app.post("/api/testimonials", async (req, res) => {
    try {
      const testimonial = insertTestimonialSchema.parse(req.body);
      const createdTestimonial = await storage.createTestimonial(testimonial);
      res.json(createdTestimonial);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.toString() });
      } else {
        res.status(500).json({ message: "Failed to submit testimonial" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
