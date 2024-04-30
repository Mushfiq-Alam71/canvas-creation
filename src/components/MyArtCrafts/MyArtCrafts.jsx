import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../Header/Navbar";


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
            <h1>my art crafts</h1>
            {
                item.map(c => (
                    <div key={item.id}>
                        <h1>{c.itemname}</h1>
                        <img src={c.photo} alt="" />
                    </div>
                ))
            }
        </div>
    );
};

export default MyArtCrafts;