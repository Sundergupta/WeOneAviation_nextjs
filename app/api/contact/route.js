import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Contact from "../../../models/Contact";

export async function POST(req) {
    try {
        const { name, email, phone, message } = await req.json();

        // ✅ Validation
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { success: false, message: "All fields are required" },
                { status: 400 }
            );
        }

        await connectDB();

        await Contact.create({
            name,
            email,
            phone,
            message,
        });

        return NextResponse.json({
            success: true,
            message: "Form submitted successfully",
        });
    } catch (error) {
        console.error("❌ CONTACT API ERROR:", error);
        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}
