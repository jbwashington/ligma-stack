import { BookingForm } from "./booking-form";
import { bookingConfig } from "@/config/marketing";

export const BookingSection = async () => {
  const calLink: string = "jbwashington/30min";
  return (
    <section id="booking"  className="container space-y-6 py-8 md:py-12 lg:py-24">
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        {bookingConfig.title}
      </h2>
      <p className="text-2xl font-light">{bookingConfig.subtitle}</p>
      <BookingForm calLink={calLink} />
    </section>
  );
};
