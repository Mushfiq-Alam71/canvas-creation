import { Link } from "react-router-dom";

const ContentCard = ({ craft }) => {
    const { _id, itemname, subcategory, description, price, photo } = craft;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{itemname}</h2>
                {/* <p>{description}</p> */}
                {
                    description.length > 200
                        ? <p>{description.slice(0, 200)} <Link to={`/craft/${_id}`} className="text-blue-500 text-base font-semibold">Read More...</Link></p>
                        : <p>{description}</p>
                }
                <p>{subcategory}</p>
                <p>{price}</p>
                {/* <p>{rating}</p>
                <p>{stockstatus}</p> */}
                <div className="card-actions justify-end">
                    <Link to={`/craft/${_id}`} className="btn bg-blue-500 hover:bg-blue-800 text-white font-bold rounded-xl">View</Link>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;