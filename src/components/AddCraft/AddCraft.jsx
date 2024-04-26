const AddCraft = () => {

    const handleAddCraft = event => {
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
    }
    return (
        <div className="bg-[#f4f3f0] py-24 px-48">
            <div className="text-center pb-8">
                <h2 className="text-4xl font-semibold">Add Craft Item</h2>
            </div>
            <form onSubmit={handleAddCraft} className="border-2 p-8 rounded-2xl ">

                {/* form row 1*/}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter item Name" name="itemname" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Sub-Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Sub-Category Name" name="subcategory" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Enter short description" name="description" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Enter price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter rating" name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Painting Name" name="customization" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Painting Name" name="processtime" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-base font-semibold">Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter stock status" name="stockstatus" className="input input-bordered w-full" />
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
                            <input type="email" placeholder="Painting Name" name="useremail" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-base font-semibold">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Painting Name" name="username" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="Enter image URL" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" className="btn btn-block text-white bg-[#04041cd8] hover:bg-[#04041cbf]" value="Add Painting" />
            </form>
        </div>
    );
};

export default AddCraft;