import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import Navbar from "../Header/Navbar";
import CraftCard from "./CraftCard";
import { useState } from "react";
import Footer from "../Footer/Footer";

const AllArtCrafts = () => {
    const loadedCrafts = useLoaderData();
    const [crafts, setCrafts] = useState(loadedCrafts);
    return (
        <div className="m-20">
            <Navbar></Navbar>
            <h1>this is (home) All Art & Crafts</h1>
            <h1>Total crafts: {loadedCrafts.length}</h1>
            <Banner></Banner>
            <div className="grid grid-cols-4 gap-4">
                {
                    loadedCrafts.map(craft =>
                        <CraftCard
                            key={craft._id}
                            craft={craft}
                            crafts={crafts}
                            setCrafts={setCrafts}
                        ></CraftCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllArtCrafts;