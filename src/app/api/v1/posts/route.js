import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // Get URL and search params
    const { searchParams } = new URL(request.url);

    // Extract query parameters
    const pageParam = searchParams.get("page");
    const page = !isNaN(Number(pageParam)) ? Number(pageParam) : 1;
    const items_per_page = Number(searchParams.get("items_per_page")) || 9;

    const apiUrl = `https://staging.homesteadexperts.com/wp-json/wp/v2/posts?page=${page}&per_page=${items_per_page}&_embed`;

    // Fetch data
    const response = await axios.get(apiUrl);

    if (!Array.isArray(response.data)) throw new Error("Failed to fetch posts");

    // Return JSON response
    return NextResponse.json(
      {
        success: true,
        page,
        items_per_page,
        total_page: Number(response.headers.get("X-WP-TotalPages")),
        data: response.data,
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
