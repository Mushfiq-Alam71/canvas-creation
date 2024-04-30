
import { Link } from 'react-router-dom';

const CategoryCard = ({ catag }) => {
    return (
        <Link to={`/categorydetails/${catag._id}`}  >
            <h1 className='p-12 bg-green-300 rounded-lg text-4xl font-bold hover:shadow-lg'>{catag.
                subcategory_name}</h1>
        </Link>
    );
};

export default CategoryCard;