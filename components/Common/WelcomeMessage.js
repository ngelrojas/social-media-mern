import {Icon, Message, Divider} from "semantic-ui-react";
import {useRouter} from "next/router";
import Link from "next/link";

export const HeaderMessage = () => {
    const router = useRouter();
    const signupRoute = router.pathname === "/signup";
    return(
        <Message
            color={"teal"}
            attached
            header={signupRoute ? "Get Started" : "Welcome Back"}
            icon={signupRoute ? "settings" : "privacy"}
            content={signupRoute ? "Create New Account" : "Login with email and password"}
        />
    )
}

export const FooterMessage = () => {
    const router = useRouter();
    const signupRoute = router.pathname === "/signup";

    return(
        <>
            {signupRoute ? (
                <>
                    <Message attached={"bottom"} warning>
                        <Icon name={"help"} />
                        Existing User?{" "}
                        <Link href={"/login"}>
                            Log In Here
                        </Link>{" "}
                        <Divider hidden/>
                    </Message>
                </>
            ):(
                <>
                    <Message attached={"bottom"} warning>
                        <Icon name={"lock"} />
                        <Link href={"/reset"}>
                            Forgot password
                        </Link>
                    </Message>
                    <Message attached={"bottom"} warning>
                        <Icon name={"help"} />
                        New User? <Link href={"/sigup"}>
                            Signp Here
                        </Link>
                    </Message>
                </>
            )

            }
        </>
    )
}