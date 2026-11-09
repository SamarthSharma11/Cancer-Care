import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, enquiryType, message, consent } = body;

    if (!fullName || !email || !message || !consent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email notification to cccf.cancer@gmail.com
    await sendContactEmail({
      fullName,
      email,
      phone,
      enquiryType: enquiryType || "general",
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully and forwarded to cccf.cancer@gmail.com",
    });
  } catch (error) {
    console.error("[API/Contact] Error:", error);
    const message = error instanceof Error ? error.message : "Failed to process enquiry";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
