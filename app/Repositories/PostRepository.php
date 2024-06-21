<?php

namespace App\Repositories;

use App\Models\Post;
use App\Repositories\Interfaces\PostRepositoryInterface;

class PostRepository implements PostRepositoryInterface
{
    public function allPosts()
    {
        // return $this->allPosts();
        // or
        // return Post::all();
        // or
        return Post::latest()->paginate(5);
    }

    public function storePost(array $data)
    {
        return Post::create($data);
    }

    public function findPost($id)
    {
        return Post::find($id);
    }

    public function updatePost(array $data, $id)
    {
        $post = Post::findOrFail($id);

        $post->update([
            'title' => $data['title'],
            'description' => $data['description'],
        ]);

        return $post;
    }

    public function destroyPost($id)
    {
        $post = Post::findOrFail($id);
        
        $post->delete();
    }
}