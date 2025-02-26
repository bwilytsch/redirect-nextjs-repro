import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const headers = new Headers();
	headers.set("x-custom-pathname", request.nextUrl.pathname);

	return NextResponse.next({ headers });
}

export const config = {
	matcher: "/:path*",
};
