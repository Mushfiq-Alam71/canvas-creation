const ContentCard = ({ craft }) => {
    const { _id, itemname, subcategory, price, rating, customization, processtime, stockstatus, useremail, username, photo } = craft;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{itemname}</h2>
                <p>{subcategory}</p>
                <p>{price}</p>
                <p>{stockstatus}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-blue-500 hover:bg-blue-800 text-white font-bold rounded-xl">View</button>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;