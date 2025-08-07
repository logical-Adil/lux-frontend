"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { kycSchema, KycFormData } from "@/schemas/kyc.schema";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Select as MantineSelect } from "@mantine/core";
import { labelFormatter } from "@/utils";
import styles from "./form.module.css";

export function KycForm() {
  const form = useForm<KycFormData>({
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

  const onSubmit = (values: KycFormData) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div
          className={`${styles.scrollContainer} max-h-[500px] px-4 space-y-6 overflow-y-scroll`}
        >
          {/* Grid 1: firstName, lastName, gender, state, country, nationality */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {["firstName", "lastName", "state"].map((name) => (
              <FormField
                key={name}
                control={form.control}
                name={name as keyof KycFormData}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{labelFormatter(name)}</FormLabel>
                    <FormControl>
                      <Input
                        value={String(field.value || "")}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            {/* Gender Select */}
            <Controller
              control={form.control}
              name="gender"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <MantineSelect
                      // ------------------

                      maxDropdownHeight={200}
                      comboboxProps={{
                        // background: "#fff",
                        transitionProps: { transition: "pop", duration: 200 },
                        dropdownPadding: 5,
                        size: "sm",
                      }}
                      variant="filled"
                      size="md"
                      checkIconPosition="right"
                      clearable
                      // ------------------

                      bg={"white"}
                      data={["Male", "Female", "Other"]}
                      placeholder="Select Gender"
                      value={field.value || ""}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                      styles={{
                        input: {
                          backgroundColor: "transparent",
                          border: "none",
                          boxShadow: "none",
                        },
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country Select */}
            <Controller
              control={form.control}
              name="country"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <MantineSelect
                      bg={"white"}
                      data={["Pakistan", "USA", "UK"]}
                      placeholder="Select Country"
                      value={field.value || ""}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                      styles={{
                        input: {
                          backgroundColor: "transparent",
                          border: "none",
                          boxShadow: "none",
                        },
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Nationality Select */}
            <Controller
              control={form.control}
              name="nationality"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                    <MantineSelect
                      bg={"white"}
                      data={["Pakistani", "American", "British"]}
                      placeholder="Select Nationality"
                      value={field.value || ""}
                      onChange={field.onChange}
                      error={fieldState.error?.message}
                      styles={{
                        input: {
                          backgroundColor: "transparent",
                          border: "none",
                          boxShadow: "none",
                        },
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Independent Field: Address */}
          <div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      value={String(field.value || "")}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Grid 2: Remaining fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "city",
              "emergencyContact",
              "zipCode",
              "phoneWithCode",
              "email",
            ].map((name) => (
              <FormField
                key={name}
                control={form.control}
                name={name as keyof KycFormData}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{labelFormatter(name)}</FormLabel>
                    <FormControl>
                      <Input
                        type={name === "email" ? "email" : "number"}
                        value={String(field.value || "")}
                        onChange={field.onChange}
                        name={`no-autofill-${name}`}
                        autoComplete="off"
                        inputMode="numeric"
                        autoCorrect="off"
                        spellCheck="false"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            {/* Birthday */}
            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birthday</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      value={field.value || ""}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {["passportNumber"].map((name) => (
              <FormField
                key={name}
                control={form.control}
                name={name as keyof KycFormData}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{labelFormatter(name)}</FormLabel>
                    <FormControl>
                      <Input
                        type={name === "email" ? "email" : "number"}
                        value={String(field.value || "")}
                        onChange={field.onChange}
                        name={`no-autofill-${name}`}
                        autoComplete="off"
                        inputMode="numeric"
                        autoCorrect="off"
                        spellCheck="false"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            {/* File Inputs */}
            {["selfieWithPassport", "passportFrontImage", "signImage"].map(
              (name) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name as keyof KycFormData}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{labelFormatter(name)}</FormLabel>
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
              )
            )}
          </div>
        </div>
        <button
          // disabled={loading}
          type="submit"
          className="mt-4 w-full py-[6px] text-[10px] text-white bg-[var(--theme-color)] hover:bg-[var(--theme-hover-color)] rounded-[5px] cursor-pointer"
        >
          Submit
        </button>

        {/* <Button type="submit" className="w-full">
          Submit
        </Button> */}
      </form>
    </Form>
  );
}
