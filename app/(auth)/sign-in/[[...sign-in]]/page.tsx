"use client";
import { Button } from "@/components/ui/button";
import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/types";

const Page = () => {
	const { signIn } = useSignIn();

	if (!signIn) return null;

	const signInWith = (strategy: OAuthStrategy) => {
		return signIn.authenticateWithRedirect({
			strategy,
			redirectUrl: "/sign-up/sso-callback",
			redirectUrlComplete: "/",
		});
	};
	return (
		<div className="min-h-screen grid place-content-center bg-background">
			<Button onClick={() => signInWith("oauth_google")}>Sign in with Google</Button>
		</div>
	);
};

export default Page;
