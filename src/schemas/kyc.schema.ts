// schema/kycSchema.ts
import { z } from "zod";

export const kycSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  gender: z.string().min(1, "Gender is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  nationality: z.string().min(1, "Nationality is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  emergencyContact: z
    .string()
    .min(7)
    .max(15)
    .refine((val) => /^[0-9]+$/.test(val), "Must be a valid number"),
  zipCode: z
    .string()
    .min(4)
    .max(10)
    .refine((val) => /^[0-9]+$/.test(val), "Must be a valid number"),
  phoneWithCode: z
    .string()
    .min(7)
    .max(15)
    .refine((val) => /^[0-9]+$/.test(val), "Must be a valid number"),
  email: z.string().email(),
  birthday: z.date({ required_error: "Birthday is required" }),
  passportNumber: z
    .string()
    .min(6, "Passport number too short")
    .max(9, "Passport number too long")
    .refine((val) => /^[0-9]+$/.test(val), "Must be numeric"),
  selfieWithPassport: z.instanceof(File, { message: "Required" }),
  passportFrontImage: z.instanceof(File, { message: "Required" }),
  signImage: z.instanceof(File, { message: "Required" }),
});
