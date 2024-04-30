import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../Header/Navbar";
import CraftCard from "../Home/CraftCard";
import Footer from "../Footer/Footer";


const MyArtCrafts = () => {
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`https://b9-a-assignment-10-server-theta.vercel.app/craft/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [user])

    useEffect(() => {
        document.title = "My Collections";
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col">
                <div className="flex flex-col text-left pb-6 lg:pb-8 lg:pt-4 lg:mx-0 md:mx-4 mx-2">
                    <h1 className="font-bold text-[30px] lg:text-[45px]">My Collections</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mx-0 md:mx-4 mx-2">
                {
                    item.map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>)
                }
            </div>
            <div className="mb-20"></div>
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

export default MyArtCrafts;