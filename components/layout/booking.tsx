import { H2, H3 } from "../typography";
import { BookingForm } from "./booking-form";
import { bookingConfig } from "@/config/marketing";

export const BookingSection = async () => {
  const calLink: string = "jbwashington/30min";
  return (
    <section
      id="booking"
      className="container py-6"
    >
      <H2>{bookingConfig.title}</H2>
      <H3>{bookingConfig.subtitle}</H3>
      <BookingForm calLink={calLink} />
    </section>
  );
};
