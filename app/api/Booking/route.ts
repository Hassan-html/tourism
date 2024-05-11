import { NextRequest, NextResponse } from "next/server";
import { BookingTemplate } from "./index";
export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { Tours, Booking } = body;
  const tour = Tours.filter((item: any) => {
    if (Booking.Tour === item.Id) {
      return item;
    }
  });
  const data = { ...Booking, price: tour[0].Price * Booking.group };
  console.log(data);
  return NextResponse.json({ message: "mail sent" }, { status: 200 });
};
