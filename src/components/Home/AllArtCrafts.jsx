import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import Navbar from "../Header/Navbar";
import { useState } from "react";
import Footer from "../Footer/Footer";

const AllArtCrafts = () => {
    const loadedCrafts = useLoaderData();
    const [crafts, setCrafts] = useState(loadedCrafts);
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="overflow-x-auto py-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th></th>
                            <th>Item Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Process Time</th>
                            <th>Stock Status</th>
                            <th>User Email</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 2 */}

                        {
                            crafts.map((craft, index) => <tr key={craft._id} className="hover">
                                <th className="py-6 text-lg">{index + 1}</th>
                                <td className="py-6 text-lg">{craft.itemname}</td>
                                <td className="py-6 text-lg">{craft.subcategory}</td>
                                <td className="py-6 text-lg">{craft.price}</td>
                                <td className="py-6 text-lg">{craft.processtime}</td>
                                <td className="py-6 text-lg">{craft.stockstatus}</td>
                                <td className="py-6 text-lg">{craft.useremail}</td>
                                <td className="py-6 text-lg"><Link className="text-blue-600 hover:underline" to={`/craft/${craft._id}`}>View Details</Link></td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {/* <UserCrafts
                key={craft._id}
            // craft={craft}
            // crafts={crafts}
            // setCrafts={setCrafts}
            ></UserCrafts> */}
            <Footer></Footer>
        </div>
    );
};

export default AllArtCrafts;