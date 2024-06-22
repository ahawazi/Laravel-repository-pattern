import { useForm } from '@inertiajs/react'

const Edit = ({ post }) => {
    const { data, setData, put, processing, errors } = useForm({
        title: post.title || '',
        description: post.description || '',
    })

    function handleChange(e) {
        setData(e.target.title, e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        put(`/posts/${post.id}`);
    }

    return (
        <>
            <h1>Edit post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">title:</label>
                    <input type="text" name="title" id="title" value={data.title} onChange={handleChange}/>
                    {errors.title && <div>{errors.title}</div>}
                </div>
                
                <div>
                    <label htmlFor="description">description:</label>
                    <input type="text" name="description" id="description" value={data.description} onChange={handleChange}/>
                    {errors.description && <div>{errors.description}</div>}
                </div>

                <div>
                    <button type='submit' disabled={processing} >save</button>
                </div>
            </form>
        </>
    )
}

export default Edit;