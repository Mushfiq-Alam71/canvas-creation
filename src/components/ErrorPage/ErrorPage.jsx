import { useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {

    useEffect(() => {
        document.title = "404 Error";
    }, [])

    return (
        <div>
            <section className="flex items-center h-full p-52 ">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl ">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn&#39;t find this page.</p>
                        <p className="mt-4 mb-8 ">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to='/' rel="noopener noreferrer" href="#" className="btn btn-outline font-semibold text-xl rounded">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;