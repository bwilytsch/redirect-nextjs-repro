import Link from "next/link";

export default function Home() {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<a href="/dashboard">Doesn&apos;t break [regular anchor tag]</a>
			<Link href="/dashboard" prefetch={false}>
				Breaks [next/link]
			</Link>
		</div>
	);
}
