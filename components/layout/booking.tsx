import { H2, H3, SectionWrapper } from "../typography";
import { BookingForm } from "./booking-form";
import { bookingConfig } from "@/config/marketing";

export const BookingSection = async () => {
  const calLink: string = "jbwashington/30min";
  return (
    <SectionWrapper id="booking" className='space-y-4'>
      <H2>{bookingConfig.title}</H2>
      <H3>{bookingConfig.subtitle}</H3>
      <BookingForm calLink={calLink} />
    </SectionWrapper>
  );
};
