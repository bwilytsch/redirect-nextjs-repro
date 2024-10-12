"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({
	children,
}: { children: React.ReactNode }) {
	const h = headers();
	const pathname = h.get("x-custom-pathname");

	// Some async data fetching goes here to determine if the user is onboarded
	const onboarded = false;

	if (!onboarded && !pathname?.startsWith("/dashboard/getting-started")) {
		redirect("/dashboard/getting-started");
	}

	return <>{children}</>;
}
