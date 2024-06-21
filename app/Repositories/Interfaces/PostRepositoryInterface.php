<?php

namespace App\Repositories\Interfaces;

interface PostRepositoryInterface
{
    public function allPosts();
    public function storePost(array $data);
    public function findPost($id);
    public function updatePost(array $data, $id);
    public function destroyPost($id);
}