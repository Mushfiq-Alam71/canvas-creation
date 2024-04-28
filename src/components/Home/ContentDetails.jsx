import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const ContentDetails = () => {
    const loadedCrafts = useLoaderData();
    const { id } = useParams();
    console.log(id, loadedCrafts);
    return (
        <div className="">
            <Navbar></Navbar>
            {/* <div className="flex justify-center items-center ">
                <img className='absolute' src={`/images/Rectangle 4.png`} alt="" />
            </div> */}
            <div className="flex flex-col lg:flex-row justify-center mx-auto gap-8 py-8 lg:py-16 w-full">
                <div className="flex justify-center">
                    <img className="w-[400px] md:w-[600px] lg:w-[800px] rounded-2xl" src={loadedCrafts.photo} alt="" />
                </div>
                <div className="lg:w-2/5 flex flex-col justify-evenly px-5 md:ml-14 lg:px-0">
                    <h1 className="text-4xl font-bold">{loadedCrafts.itemname}</h1>
                    <h1 className="text-3xl font-bold pt-6 pb-4"><span className="text-green-500">$</span>{loadedCrafts.price}</h1>
                    <div className="flex flex-col py-4">
                        <h1 className="font-semibold text-lg">Description:</h1>
                        <h1>{loadedCrafts.description}</h1>
                    </div>
                    <h1><span className="text-lg font-semibold">Subcategory: </span>{loadedCrafts.subcategory}</h1>
                    <h1><span className="text-lg font-semibold">Rating: </span>{loadedCrafts.rating}</h1>
                    <h1><span className="text-lg font-semibold">Process Time: </span>{loadedCrafts.processtime}</h1>
                    <h1><span className="text-lg font-semibold">Rating: </span>{loadedCrafts.stockstatus}</h1>
                    <h1><span className="text-lg font-semibold">Customization: </span>{loadedCrafts.customization}</h1>
                    <h1 className="text-2xl font-semibold text-green-500 pt-4">{loadedCrafts.status}</h1>
                </div>
            </div>
            <div className="flex justify-center pb-16">
                <Link to='/' className="btn btn-outline text-xl">Go Back</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContentDetails;