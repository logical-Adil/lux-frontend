"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useState } from "react";
import { kycSchema } from "@/schemas/kyc.schema";

export function KycForm() {
  const form = useForm<z.infer<typeof kycSchema>>({
    resolver: zodResolver(kycSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      state: "",
      country: "",
      nationality: "",
      address: "",
      city: "",
      emergencyContact: "",
      zipCode: "",
      phoneWithCode: "",
      email: "",
      birthday: undefined,
      passportNumber: "",
      selfieWithPassport: undefined,
      passportFrontImage: undefined,
      signImage: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof kycSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Text Inputs */}
        {[
          ["firstName", "First Name"],
          ["lastName", "Last Name"],
          ["state", "State"],
          ["address", "Address"],
          ["city", "City"],
        ].map(([name, label]) => (
          <FormField
            key={name}
            control={form.control}
            name={name as any}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* Number & Email Inputs */}
        {[
          ["emergencyContact", "Emergency Contact Number"],
          ["zipCode", "Zip Code"],
          ["phoneWithCode", "Phone with Country Code"],
          ["email", "Email"],
          ["passportNumber", "Passport Number"],
        ].map(([name, label]) => (
          <FormField
            key={name}
            control={form.control}
            name={name as any}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input
                    type={name === "email" ? "email" : "number"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* Select Dropdowns */}
        {[
          ["gender", "Gender", ["Male", "Female", "Other"]],
          ["country", "Country", ["Pakistan", "USA", "UK"]],
          ["nationality", "Nationality", ["Pakistani", "American", "British"]],
        ].map(([name, label, options]) => (
          <FormField
            key={name}
            control={form.control}
            name={name as any}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={`Select ${label}`} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {(options as string[]).map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* Date Picker */}
        <FormField
          control={form.control}
          name="birthday"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Birthday</FormLabel>
              <FormControl>
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* File Inputs */}
        {[
          ["selfieWithPassport", "Selfie with Passport"],
          ["passportFrontImage", "Passport Front Image"],
          ["signImage", "Sign Image"],
        ].map(([name, label]) => (
          <FormField
            key={name}
            control={form.control}
            name={name as any}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
