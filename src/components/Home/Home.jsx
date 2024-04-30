import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Banner from "../Header/Banner";
import Navbar from "../Header/Navbar";
import ContentCard from "./ContentCard";
import Intro from "./Intro";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const Home = () => {
    const loadedCrafts = useLoaderData();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://b9-a-assignment-10-server-theta.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    console.log(categories);
    return (
        <div className="">
            <Navbar></Navbar>
            <Banner></Banner>
            <Intro></Intro>
            <div className="border-b-4 border-dotted border-gray-500 my-8"></div>
            <div className="flex flex-col">
                <div className="flex flex-col text-left pb-6 lg:pb-12 lg:pt-4">
                    <p className="text-[#34cfbf] font-semibold text-xl pb-[20px]">OUR COLLECTIONS</p>
                    <h1 className="font-bold text-[30px] lg:text-[45px] pb-4">We have collections of different category and variety of real estate properties.</h1>
                    <p className="font-normal text-base text-[#808080]">Explore our diverse collection of real estate properties, curated to cater to a variety of lifestyles and preferences. From luxurious urban apartments to serene suburban homes, we offer a range of options to suit your unique needs. Discover contemporary condos boasting modern amenities and stunning city views, or escape to picturesque countryside estates surrounded by nature&#39;s beauty. Whether you seek the excitement of city living or the tranquility of a rural retreat, our carefully selected properties ensure that you&#39;ll find the perfect place to call home. Explore our collections today and embark on your journey to finding your dream property.</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 pb-8">
                {
                    loadedCrafts.map(craft =>
                        <ContentCard
                            key={craft._id}
                            craft={craft}
                        // crafts={crafts}
                        // setCrafts={setCrafts}
                        ></ContentCard>)
                }
            </div>
            <div className="border-b-4 border-dotted border-gray-500 my-8"></div>
            <div className="flex flex-col">
                <div className="flex flex-col text-left pb-6 lg:pb-2 lg:pt-4">
                    <p className="text-[#34cfbf] font-semibold text-xl pb-[20px]">CATEGORY</p>
                    <h1 className="font-bold text-[30px] lg:text-[45px] pb-4">We have collections of different category.</h1>
                </div>
            </div>
            <div className="pb-12 grid grid-cols-3 gap-8">
                {
                    categories.map(category => <CategoryCard key={category._id} catag={category}></CategoryCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;