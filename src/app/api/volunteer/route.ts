import { NextResponse } from "next/server";

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

    console.log("[API/Volunteer] Received new application:", {
      fullName,
      email,
      phone,
      city,
      role,
      availability,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("[API/Volunteer] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
