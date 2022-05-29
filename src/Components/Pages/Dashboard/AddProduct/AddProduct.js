
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageApiKey = '1391f873a11301e1b864913d536e7208';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageApiKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const product = {
                        name: data.name,
                        image: image,
                        price: data.price,
                        description: data.description.split("."),
                        available_quantity: data.availableQuantity,
                        minimum_order_quantity: data.minimumQuantity

                    }
                    // send to Your database
                    fetch('https://hidden-bastion-67340.herokuapp.com/tool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success("Product added successfully!!");
                            } else {
                                toast.error('Failed to add Product');
                            }
                        })
                }
            })
        reset();
    }

    return (
        <div>

            <div className='pl-2'>
                <h2 className="text-3xl text-indigo-500 font-bold py-2">Add A New product</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="text-center">

                    {/* --------------Product Name----------------- */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is Required"
                                },

                            })}
                            type="Text"
                            placeholder="Product Name"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    {/* --------------Product description----------------- */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product description</span>
                        </label>
                        <textarea
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "Description is Required.Please write product description"
                                },
                            })}
                            type="Text"
                            placeholder="Product description"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>

                    {/* --------------Price----------------- */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: "Please input the price of the product?",
                                },
                                min: {
                                    value: 1,
                                    message: "Price must be greater than 0.",
                                },
                            })}
                            type="number"
                            placeholder="Price"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.price?.type === "required" && (
                                <span className="label-text-alt  text-red-500">
                                    {errors.price.message}
                                </span>
                            )}
                            {errors.price?.type === "min" && (
                                <span className="label-text-alt  text-red-500">
                                    {errors.price.message}
                                </span>
                            )}
                        </label>
                    </div>
                    {/* --------------Available Quantity----------------- */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: "Please input the available quantity of the product?",
                                },
                                min: {
                                    value: 20,
                                    message: "Available quantity must be 20  or  greater than 20.",
                                },
                            })}
                            type="number"
                            placeholder="Available quantity"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.availableQuantity?.type === "required" && (
                                <span className="label-text-alt  text-red-500">
                                    {errors.availableQuantity.message}
                                </span>
                            )}
                            {errors.availableQuantity?.type === "min" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.availableQuantity.message}
                                </span>
                            )}
                        </label>
                    </div>
                    {/* --------------Minimum order Quantity----------------- */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum order quantity</span>
                        </label>
                        <input
                            {...register("minimumQuantity", {
                                required: {
                                    value: true,
                                    message: "Please input the minimum order quantity of the product ?",
                                },
                                min: {
                                    value: 1,
                                    message: "Minimum order quantity must be 1 or greater than 1.",
                                },

                                max: {
                                    value: 20,
                                    message: "Maximum order quantity must be 20 or less than  20.",
                                },
                            })}
                            type="number"
                            placeholder="Minimum order uantity"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.minimumQuantity?.type === "required" && (
                                <span className="label-text-alt  text-red-500">
                                    {errors.minimumQuantity.message}
                                </span>
                            )}
                            {errors.minimumQuantity?.type === "min" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.minimumQuantity.message}
                                </span>
                            )}
                            {errors.minimumQuantity?.type === "max" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.minimumQuantity.message}
                                </span>
                            )}
                        </label>
                    </div>
                    {/* --------------Image input----------------- */}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is Required"
                                },

                            })}
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.image.message}</span>}
                        </label>
                        <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white font-bold my-2' type="submit" value='Add' />
                    </div>
                </form >
                <span className="font-light text-red-500">Wait a moment to be stocked item............</span>
            </div >
        </div>
    );
};

export default AddProduct;