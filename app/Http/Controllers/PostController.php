<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Repositories\Interfaces\PostRepositoryInterface;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    protected $postRepository;

    public function __construct(PostRepositoryInterface $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function index(): Response
    {
        $posts = $this->postRepository->allPosts();
        return Inertia::render('Posts/Index',[
            'posts' => $posts
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Posts/Create');
    }

    public function store(StorePostRequest $request)
    {
        $this->postRepository->storePost($request->validated());
        return redirect()->route('posts.index')->with('success', 'Post created successfully');
    }

    public function show($id): Response
    {
        $post = $this->postRepository->findPost($id);
        return Inertia::render('Posts/Show', ['post' => $post]);
    }

    public function edit($id): Response
    {
        $post = $this->postRepository->findPost($id);
        return Inertia::render('Posts/Edit', ['post' => $post]);
    }

    public function update(UpdatePostRequest $request, $id)
    {
        $this->postRepository->updatePost($request->validated(), $id);
        return redirect()->route('posts.index')->with('success', 'Post updated successfully');
    }

    public function destroy($id)
    {
        $this->postRepository->destroyPost($id);
        return redirect()->route('posts.index')->with('success', 'Post deleted successfully');
    }
}
