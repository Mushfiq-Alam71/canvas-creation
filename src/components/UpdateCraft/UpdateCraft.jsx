import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { useEffect } from "react";


const UpdateCraft = () => {
    const craft = useLoaderData();

    useEffect(() => {
        document.title = "Update Items";
    }, [])

    const { _id, itemname, subcategory, description, price, rating, customization, processtime, stockstatus, useremail, username, photo } = craft;

    const handleUpdateCraft = event => {
        event.preventDefault();

        const form = event.target;

        const itemname = form.itemname.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processtime = form.processtime.value;
        const stockstatus = form.stockstatus.value;
        const useremail = form.useremail.value;
        const username = form.username.value;
        const photo = form.photo.value;

        const newCraft = { itemname, subcategory, description, price, rating, customization, processtime, stockstatus, useremail, username, photo };
        console.log(newCraft);

        // send data to server
        fetch(`https://b9-a-assignment-10-server-theta.vercel.app/craft/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#f4f3f0] py-24 px-48 bg-gradient-to-r from-[#2556eb84] via-[#1284bd7d] to-[#05f5dd80] rounded-xl mb-8">
                <div className="text-center pb-8">
                    <h2 className="text-4xl font-semibold">Update Craft Item: {itemname}</h2>
                </div>
                <form onSubmit={handleUpdateCraft} className="border-2 border-blue-900 p-8 rounded-2xl ">

                    {/* form row 1*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Item Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={itemname} placeholder="Enter item Name" name="itemname" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Sub-Category Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={subcategory} placeholder="Enter Sub-Category Name" name="subcategory" className="input input-bordered w-full" />
                            </label>
                            {/* <details className="dropdown w-full">
                            <summary className=" btn bg-white w-full ">-- Select Sub-Category Name </summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </details> */}
                        </div>

                    </div>
                    {/* form row 2*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={description} placeholder="Enter short description" name="description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form row 3*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={price} placeholder="Enter price" name="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={rating} placeholder="Enter rating" name="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Customization</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={customization} placeholder="Painting Name" name="customization" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* form row 4*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Processing Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={processtime} placeholder="Painting Name" name="processtime" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Stock Status</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={stockstatus} placeholder="Enter stock status" name="stockstatus" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* form row 5*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-semibold">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" defaultValue={useremail} placeholder="Painting Name" name="useremail" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-base font-semibold">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={username} placeholder="Painting Name" name="username" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* form row 6*/}
                    <div className="md:flex gap-4 mb-6">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Image URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={photo} placeholder="Enter image URL" name="photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-block text-white bg-[#04041cd8] hover:bg-[#04041cbf]" value="Update Craft" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateCraft;