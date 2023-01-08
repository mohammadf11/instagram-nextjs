import Header from "../../components/Header";
import { getProviders, signIn as signInProvider } from "next-auth/react";
function signIn({ providers }) {
    console.log(providers);
    return (
        <>
            <Header />
            <div className="flex flex-col -mt-56 px-14 text-center items-center justify-center min-h-screen py-2">
                <img className='w-80' src="http://localhost:3000/_next/image?url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRTeQQX8O9ot7nRcZl_OSH-sCSWuQxMFbx1IQ%26usqp%3DCAU&w=1080&q=75" alt="" />

                <p>Instagram Clone</p>
                <div className="mt-40">
                    {Object.values(providers)?.map((provider) => (
                        <div key={provider.name}>
                            <button
                                className="p-3 bg-blue-500 rounded-lg text-white"
                                onClick={() =>
                                    signInProvider(provider.id, { callbackUrl: "/" })
                                }
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default signIn;

export async function getServerSideProps() {
    const providers = await getProviders();
    console.log(providers)

    return {
        props: {
            providers,
        },
    };
}

