<?php


namespace App\Services\Recipe;


interface Crud
{
    public function get();

    public function show($id);

    public function store($data);

    public function update($id,$data);

    public function delete($id);
}
