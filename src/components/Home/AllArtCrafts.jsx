import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import Navbar from "../Header/Navbar";
import { useState } from "react";
import Footer from "../Footer/Footer";
import UserCrafts from "../Users/UserCrafts";

const AllArtCrafts = () => {
    const loadedCrafts = useLoaderData();
    const [crafts, setCrafts] = useState(loadedCrafts);
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
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
                            loadedCrafts.map(craft => <tr key={craft._id} className="hover">
                                <th>2</th>
                                <td>{craft.itemname}</td>
                                <td>{craft.subcategory}</td>
                                <td>{craft.price}</td>
                                <td>{craft.processtime}</td>
                                <td>{craft.stockstatus}</td>
                                <td>{craft.useremail}</td>
                                <td><Link className="text-blue-600 hover:underline" to={`/craft/${craft._id}`}>View Details</Link></td>
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