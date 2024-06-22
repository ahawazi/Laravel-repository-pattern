import { useForm } from '@inertiajs/react'

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('posts.store'));
    };

    return (
        <>
            <h1 className='mt-6 text-3xl'>Create Post</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input name='title' type="text" value={data.title} onChange={e => setData('title', e.target.value)} />
                {errors.title && <div>{errors.title}</div>}

                <label htmlFor="description">Description:</label>
                <input name='description' type="text" value={data.description} onChange={e => setData('description', e.target.value)} />
                {errors.description && <div>{errors.description}</div>}

                <button type='submit'>Create</button>
            </form>
        </>
    )
}

export default Create;