import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CraftCard = ({ craft, crafts, setCrafts }) => {

    const { _id, itemname, subcategory, description, price, stockstatus, photo } = craft;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://b9-a-assignment-10-server-theta.vercel.app/craft/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your craft item has been deleted.",
                                icon: "success"
                            })
                            const remaining = crafts.filter(craf => craf._id !== _id)
                            setCrafts(remaining);
                        }
                    })
            }
        });
    }
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
                    <Link to={`/updateCraft/${_id}`}>
                        <button className="btn bg-green-500 hover:bg-green-800 text-2xl text-white rounded-full"><FiEdit /></button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)} className="btn bg-red-500 hover:bg-red-800 text-2xl text-white rounded-full"><MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;