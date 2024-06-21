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

    public function storePost($data)
    {
        return Post::create($data);
    }

    public function findPost($id)
    {
        return Post::find($id);
    }

    public function updatePost($data, $id)
    {
        $post = Post::where('id', $id)->first();

        $post->title = $data['title'];
        $post->description = $data['description'];

        $post->save();
    }

    public function destroyPost($id)
    {
        $post = Post::find($id);
        
        $post->delete();
    }
}