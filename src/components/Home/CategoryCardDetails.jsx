import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ContentCard from "./ContentCard";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const CategoryCardDetails = () => {

    const category = useLoaderData();
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`https://b9-a-assignment-10-server-theta.vercel.app/craft/category/${category?.
            subcategory_name}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [category])
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl font-bold text-blue-500 py-8"><span className="text-black">Subcategory:</span> {category.subcategory_name}</h1>
            <div className='grid grid-cols-4 pb-12'>
                {
                    item.map(craft => (<ContentCard key={craft._id} craft={craft}></ContentCard>)
                    )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CategoryCardDetails;