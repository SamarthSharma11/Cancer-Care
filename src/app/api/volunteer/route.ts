import { NextResponse } from "next/server";
import { sendVolunteerEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, city, role, skills, availability, consent } = body;

    if (!fullName || !email || !phone || !city || !consent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send volunteer application email to cccf.cancer@gmail.com
    await sendVolunteerEmail({
      fullName,
      email,
      phone,
      city,
      role: role || "awareness",
      skills,
      availability: availability || "weekends",
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully and forwarded to cccf.cancer@gmail.com",
    });
  } catch (error) {
    console.error("[API/Volunteer] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
