import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    // Get URL slug
    const slug = (await params).slug;

    const apiUrl = `https://staging.homesteadexperts.com/wp-json/wp/v2/posts?slug=${slug}&_embed`;

    // Fetch data
    const response = await axios.get(apiUrl);

    if (!Array.isArray(response.data) || !response.data[0]) {
      throw new Error("Failed to fetch post");
    }

    // Return JSON response
    return NextResponse.json(
      {
        success: true,
        data: response.data[0],
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
