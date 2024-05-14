import { NextRequest, NextResponse } from "next/server";
import { BookingTemplate } from "./index";
import { sendBooking } from "@/app/models/nodeMailerTransport";
export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { Tours, Booking } = body;
  const tour = Tours.filter((item: any) => {
    if (Booking.Tour === item.Id) {
      return item;
    }
  });
  const data = {
    ...Booking,
    price: tour[0].Price * Booking.group,
    title: tour[0].Title,
  };
  console.log(data, tour);
  try {
    const mail = sendBooking(
      BookingTemplate(
        data.Email,
        data.group,
        data.BookingDate,
        data.title,
        data.price
      ),
      data.Email
    );
    console.log("mail sent");
    return NextResponse.json({ message: mail }, { status: 200 });
  } catch (error) {
    console.log("Mail error: " + error);
    return NextResponse.json({ message: "mail sent" }, { status: 200 });
  }
};
