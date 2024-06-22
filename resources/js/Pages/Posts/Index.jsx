import { Link } from '@inertiajs/inertia-react';
import { router } from '@inertiajs/react';

const Index = ({ posts = [] }) => {
    function deletePost(id) {
        router.delete(`/posts/${id}`);
    }

    return (
        <>
            <h1 className="mt-6 text-3xl">Home</h1>
            <hr />
            {posts.data?.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <button type="button" onClick={() => deletePost(post.id)}>Delete</button>
                    <Link href={`/posts/${post.id}/edit`}>edit</Link>
                </div>
            ))
            }
        </>
    );
};

export default Index;