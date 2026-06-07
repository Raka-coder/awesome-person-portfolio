import { get } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

const BLOB_PREFIX = process.env.BLOB_PREFIX;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const pathname = `${BLOB_PREFIX}/${slug.join("/")}`;

  try {
    const result = await get(pathname, {
      access: "private",
    });

    if (!result || result.statusCode !== 200 || !result.stream) {
      return NextResponse.json(
        { error: "Image not found" },
        { status: result?.statusCode ?? 404 }
      );
    }

    const headers = new Headers();
    headers.set(
      "Content-Type",
      result.blob.contentType || "application/octet-stream"
    );
    headers.set(
      "Cache-Control",
      result.blob.cacheControl || "public, max-age=31536000, immutable"
    );
    headers.set("ETag", result.blob.etag);

    return new NextResponse(result.stream, {
      status: 200,
      headers,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 }
    );
  }
}
