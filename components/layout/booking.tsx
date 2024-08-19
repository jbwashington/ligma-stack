import { H1, SectionWrapper } from "../typography";
import { BookingForm } from "./booking-form";
import { bookingConfig } from "@/config/marketing";
import { Suspense } from "react";

export const BookingSection = async () => {
  return (
    <SectionWrapper id="booking" className="space-y-4">
      <H1>{bookingConfig.subtitle}</H1>
      <Suspense fallback={<div>Loading...</div>}>
        <BookingForm />
      </Suspense>
    </SectionWrapper>
  );
};
