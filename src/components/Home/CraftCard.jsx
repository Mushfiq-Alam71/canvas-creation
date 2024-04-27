import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const CraftCard = ({ craft }) => {

    const { itemname, subcategory, description, price, rating, customization, processtime, stockstatus, useremail, username, photo } = craft;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{itemname}</h2>
                <p>{subcategory}</p>
                <p>{price}</p>
                <p>{stockstatus}</p>
                <div className="card-actions justify-evenly">
                    <button className="btn bg-blue-500 hover:bg-blue-800 text-white font-bold rounded-full">View</button>
                    <button className="btn bg-green-500 hover:bg-green-800 text-2xl text-white rounded-full"><FiEdit /></button>
                    <button className="btn bg-red-500 hover:bg-red-800 text-2xl text-white rounded-full"><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;