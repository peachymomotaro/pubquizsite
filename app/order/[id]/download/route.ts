import { NextResponse } from "next/server";

type DownloadRouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: DownloadRouteContext
) {
  const { id } = await params;
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  return NextResponse.json(
    {
      message:
        "Secure order download endpoint placeholder. Token validation and streaming are implemented in PR5.",
      orderId: id,
      tokenPresent: Boolean(token)
    },
    { status: 501 }
  );
}
