import { Request } from "express";

declare module "express" {
  export interface Request {
    sub?: {
      id: string;
      role: string;
    };
  }
}