import { NextResponse } from "next/server";

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

    // In production with Supabase configured:
    // 1. Check rate limit
    // 2. Insert into contact_submissions table
    // 3. Queue email_events for staff notification
    // For local development / preview:
    console.log("[API/Contact] Received new submission:", {
      fullName,
      email,
      phone,
      enquiryType,
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    console.error("[API/Contact] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
