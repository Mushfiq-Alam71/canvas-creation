import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../Header/Navbar";
import CraftCard from "../Home/CraftCard";


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
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col">
                <div className="flex flex-col text-left pb-6 lg:pb-12 lg:pt-4">
                    <h1 className="font-bold text-[30px] lg:text-[45px] pb-4">My Collections</h1>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    item.map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>)
                }
            </div>

            {/* <UserCrafts
                key={craft._id}
            // craft={craft}
            // crafts={crafts}
            // setCrafts={setCrafts}
            ></UserCrafts> */}
        </div>

    );
};

export default MyArtCrafts;