import { Link } from '@inertiajs/inertia-react';
import { router } from '@inertiajs/react';

const Index = ({ posts = [] }) => {
    function deletePost(id) {
        router.delete(`/posts/${id}`);
    }

    console.log('Posts:', posts);

    return (
        <>
            <h1 className="mt-6 text-3xl">Home</h1>
            <hr />
            {posts.length ? (
                posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button type="button" onClick={() => deletePost(post.id)}>Delete</button>
                        <Link href={`/posts/${post.id}/edit`}>edit</Link>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )}
        </>
    );
};

export default Index;