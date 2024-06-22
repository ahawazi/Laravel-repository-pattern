import { useForm } from '@inertiajs/react'

const Edit = ({ post }) => {
    const { data, setData, put, processing, errors } = useForm({
        title: post.title || '',
        description: post.description || '',
    })

    function handleChange(e) {
        setData(e.target.name, e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        put(`/posts/${post.id}`);
    }

    return (
        <>
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={data.title}
                        onChange={handleChange}
                    />
                    {errors.title && <div>{errors.title}</div>}
                </div>

                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={data.description}
                        onChange={handleChange}
                    />
                    {errors.description && <div>{errors.description}</div>}
                </div>

                <div>
                    <button type="submit" disabled={processing}>
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}

export default Edit;
