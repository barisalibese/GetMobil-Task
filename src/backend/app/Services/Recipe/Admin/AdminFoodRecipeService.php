<?php


namespace App\Services\Recipe\Admin;


use App\Libraries\Response;
use App\Models\FoodRecipe;
use App\Services\ImageUpload;
use App\Services\Recipe\Crud;
use Illuminate\Support\Facades\DB;

class AdminFoodRecipeService implements Crud
{
    use ImageUpload;

    public function get()
    {
        return new Response(Response::COMPLETE, 'success', FoodRecipe::all());
    }

    public function show($id)
    {
        return new Response(Response::COMPLETE, 'success', FoodRecipe::where('id', $id)->with(['ingredients'=>function($q){

        }])->get());
    }

    public function store($data)
    {
        try {
            DB::beginTransaction();
            $model = FoodRecipe::create([
                'name' => $data['name']
            ]);
            if (isset($data['ingredients'])){
                $data['ingredients']=$this->organizeIngredientData($data['ingredients']);
                $model->ingredients()->attach($data['ingredients']);
            }
            if (!empty($data['file'])) {
                $model = $this->uploadImage($data['file'], $model);
            }
            DB::commit();
            return new Response(Response::COMPLETE, 'success', $model);
        } catch (\Exception $e) {
            DB::rollBack();
            return new Response(Response::FAILED, $e);
        }
    }

    public function update($id, $data)
    {
        try {
            DB::beginTransaction();
             $model = FoodRecipe::find($id);
            !empty($data['name']) ? $model->name = $data['name'] : null;
            $model->save();
            if (isset($data['ingredients'])){
                $data['ingredients']=$this->organizeIngredientData($data['ingredients']);
                $model->ingredients()->sync($data['ingredients']);
            }
            if (!empty($data['file'])) {
                $model = $this->uploadImage($data['file'], $model);
            }
            DB::commit();
            return new Response(Response::COMPLETE,'success',$model);
        } catch (\Exception $e) {
            DB::rollBack();
            return new Response(Response::FAILED,$e);
        }
    }

    public function delete($id)
    {
        $model = FoodRecipe::find($id);
        $path = storage_path('app/public/uploads/images/' . $model->image_url);
        if (file_exists($path))
        {
            unlink($path);
        }
        $model->ingredients()->detach();
        $model->delete();
        return new Response(Response::COMPLETE,'success');
    }
    private function organizeIngredientData($ingredients){
        $data=[];
        foreach ($ingredients as $ingredient){
            $data[$ingredient['id']]=['complete_value'=>$ingredient['complete_value']];
        }
        return $data;
    }
}
