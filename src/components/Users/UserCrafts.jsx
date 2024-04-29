import { useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar";


const UserCrafts = () => {
    const loadedUsers = useLoaderData();
    return (
        <div>
            {/* <h1>users: {loadedUsers.length}</h1> */}
        </div>
    );
};

export default UserCrafts;