import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Banner from "../Header/Banner";
import Navbar from "../Header/Navbar";
import ContentCard from "./ContentCard";


const Home = () => {
    const loadedCrafts = useLoaderData();
    return (
        <div className="mx-20">
            <Navbar></Navbar>
            <Banner></Banner>
            <h1>Now this is home</h1>
            <div className="grid grid-cols-4 gap-4">
                {
                    loadedCrafts.map(craft =>
                        <ContentCard
                            key={craft._id}
                            craft={craft}
                        // crafts={crafts}
                        // setCrafts={setCrafts}
                        ></ContentCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;