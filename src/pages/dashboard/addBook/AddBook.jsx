import React, { useEffect, useState } from 'react'

import SelectField from './SelectField';
import InputField from './InputField';
import { useForm } from 'react-hook-form'
import { useAddBookMutation } from '../../../redux/features/books/booksApi'
import Swal from 'sweetalert2'

const AddBook = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageFile, setimageFile] = useState(null);
    const [imageFileName, setimageFileName] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');
    const [addBook, { isLoading, isError }] = useAddBookMutation();

    const onSubmit = async (data) => {

        const newBookData = {
            ...data,
            coverImage: imageFileName
        }
        console.log(newBookData)

        try {
            // axios เพิ่ม
            await addBook(newBookData).unwrap();
            Swal.fire({
                title: `<span style="color: #bcc4a1;">Book added</span>`,
                text: "Your book is uploaded successfully!",
                icon: "success",
                iconColor: "#808570",
                showCancelButton: true,
                confirmButtonColor: "#808570",
                cancelButtonColor: "#000",
                confirmButtonText: "Yes, It's Okay!",
                customClass: {
                    confirmButton: "swal2-confirm",
                    cancelButton: "swal2-cancel",
                },
            });
            reset();
            setimageFileName('')
            setimageFile(null);
            setPreviewUrl(null);
        } catch (error) {
            console.error(error)
            alert("Failed to add Book. Please try again.")
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setimageFile(file);
            setimageFileName(file.name);
            setPreviewUrl(URL.createObjectURL(file));
        }
        else {
            setimageFile(null);
            setimageFileName('');
            setPreviewUrl(null);
        }
    }

    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);



    return (
        <>
            <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Book</h2>

                {/* Form starts here */}
                <form onSubmit={handleSubmit(onSubmit)} className=''>
                    {/* Reusable Input Field for Title */}
                    <InputField
                        label="Title"
                        name="title"
                        placeholder="Enter book title"
                        register={register}
                    />

                    {/* Reusable Textarea for Description */}
                    <InputField
                        label="Description"
                        name="description"
                        placeholder="Enter book description"
                        type="textarea"
                        register={register}

                    />

                    {/* Reusable Select Field for Category */}
                    <SelectField
                        label="Category"
                        name="category"
                        options={[
                            { value: '', label: 'Choose A Category' },
                            { value: 'programming', label: 'programming' },
                            { value: 'nonfiction', label: 'nonfiction' },
                            { value: 'fiction', label: 'fiction' },
                            { value: 'maths', label: 'maths' },
                            { value: 'sport', label: 'sport' },
                            // Add more options as needed
                        ]}
                        register={register}
                    />

                    {/* Trending Checkbox */}
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                {...register('trending')}
                                className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
                        </label>
                    </div>

                    {/* Old Price */}
                    <InputField
                        label="Old Price"
                        name="oldPrice"
                        type="number"
                        placeholder="Old Price"
                        register={register}

                    />

                    {/* New Price */}
                    <InputField
                        label="New Price"
                        name="newPrice"
                        type="number"
                        placeholder="New Price"
                        register={register}

                    />

                    {/* Cover Image Upload */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
                        <input type="file" accept="image" onChange={handleFileChange} className="mb-2 w-full" />
                        {imageFileName && <p className="text-sm text-gray-500">Selected: {imageFileName}</p>}
                        {/* {previewUrl && (
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="mt-2 w-32 h-auto object-cover rounded border border-gray-300 shadow-sm "
                            />
                        )} */}
{/* 
                        {previewUrl
                            ? (
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    className="mt-2 w-32 h-auto object-cover rounded border border-gray-300 shadow-sm"
                                />
                            )
                            : (
                                <p className="text-sm italic text-gray-400">No image selected</p>
                            )
                        } */}

                        {typeof previewUrl === 'string' && previewUrl !== '' && (
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="mt-2 w-32 h-auto object-cover rounded border border-gray-300 shadow-sm"
                            />
                        )}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full py-2 bg-black text-white hover:text-black hover:bg-white focus:bg-black focus:text-white font-bold rounded-md">
                        {
                            isLoading ? <span className="">Adding.. </span> : <span>Add Book</span>
                        }
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddBook




