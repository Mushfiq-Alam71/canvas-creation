import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import Navbar from "../Header/Navbar";
import CraftCard from "./CraftCard";

const Home = () => {
    const crafts = useLoaderData();
    return (
        <div className="m-20">
            <Navbar></Navbar>
            <h1>this is home</h1>
            <h1>Total crafts: {crafts.length}</h1>
            <Banner></Banner>
            <div className="grid grid-cols-4 gap-4">
                {
                    crafts.map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>)
                }
            </div>
        </div>
    );
};

export default Home;