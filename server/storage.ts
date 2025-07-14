import { users, contactInquiries, testimonials, type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, type Testimonial, type InsertTestimonial } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  markInquiryAsRead(id: number): Promise<void>;
  
  getApprovedTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactInquiries: Map<number, ContactInquiry>;
  private testimonials: Map<number, Testimonial>;
  private currentUserId: number;
  private currentInquiryId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.testimonials = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
    this.currentTestimonialId = 1;
    
    // Add some sample approved testimonials
    this.initializeTestimonials();
  }

  private initializeTestimonials() {
    const sampleTestimonials = [
      {
        name: "John Mukasa",
        position: "Homeowner",
        company: null,
        message: "Excellent work on our family home. The team was professional, timely, and delivered exactly what we wanted.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
        isApproved: true,
        createdAt: new Date(),
      },
      {
        name: "Sarah Nakato",
        position: "Business Owner",
        company: "Nakato Enterprises",
        message: "Outstanding commercial construction services. Our office building was completed on time and within budget.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
        isApproved: true,
        createdAt: new Date(),
      },
      {
        name: "Robert Kiprotich",
        position: "Property Developer",
        company: "Kiprotich Properties",
        message: "Reliable and skilled construction team. We've worked together on multiple projects with great results.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
        isApproved: true,
        createdAt: new Date(),
      }
    ];

    sampleTestimonials.forEach(testimonial => {
      const id = this.currentTestimonialId++;
      this.testimonials.set(id, { ...testimonial, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentInquiryId++;
    const contactInquiry: ContactInquiry = {
      ...inquiry,
      id,
      createdAt: new Date(),
      isRead: false,
      phone: inquiry.phone || null,
      projectType: inquiry.projectType || null,
    };
    this.contactInquiries.set(id, contactInquiry);
    return contactInquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async markInquiryAsRead(id: number): Promise<void> {
    const inquiry = this.contactInquiries.get(id);
    if (inquiry) {
      inquiry.isRead = true;
      this.contactInquiries.set(id, inquiry);
    }
  }

  async getApprovedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .filter(testimonial => testimonial.isApproved)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const newTestimonial: Testimonial = {
      ...testimonial,
      id,
      isApproved: false,
      createdAt: new Date(),
      company: testimonial.company || null,
      rating: testimonial.rating || 5,
      imageUrl: testimonial.imageUrl || null,
    };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }
}

export const storage = new MemStorage();
