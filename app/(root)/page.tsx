"use client";
import { Button } from "@/components/ui/button";
import { useClerk, useUser } from "@clerk/nextjs";

const Home = () => {
	const { user } =  useUser();
	const { signOut } = useClerk();

	console.log("user", user);
	return (
		<div>
			<h1>Root Page Need be protected</h1>
			<Button onClick={() => signOut({ redirectUrl: "/sign-in" })}>Sign out</Button>
		</div>
	);
};

export default Home;
