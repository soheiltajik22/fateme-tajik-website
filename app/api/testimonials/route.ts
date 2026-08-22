import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET — fetch all approved testimonials
export async function GET() {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST — submit new testimonial (approved = true → shows immediately)
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, level, duration, goal, text, rating } = body;

  if (!name || !level || !text) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { data, error } = await supabase.from("testimonials").insert([
    {
      name,
      level,
      duration: duration || "",
      goal: goal || "",
      text,
      rating: rating || 5,
      approved: true, // shows immediately
    },
  ]).select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data[0], { status: 201 });
}
