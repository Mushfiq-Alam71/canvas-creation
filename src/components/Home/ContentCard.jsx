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
                    description.length > 100
                        ? <p>{description.slice(0, 160)} <Link to={`/craft/${_id}`} className="text-blue-500 text-base font-semibold">Read More...</Link></p>
                        : <p>{description}</p>
                }
                <p>{subcategory}</p>
                <p>{price}</p>
                {/* <p>{rating}</p>
                <p>{stockstatus}</p> */}
                <div className="card-actions justify-end">
                    <Link to={`/craft/${_id}`} className="btn text-lg btn-outline font-bold rounded-xl">View</Link>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;