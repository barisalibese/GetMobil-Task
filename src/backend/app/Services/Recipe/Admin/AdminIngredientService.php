<?php


namespace App\Services\Recipe\Admin;


use App\Libraries\Response;
use App\Models\FoodIngredient;
use App\Services\ImageUpload;
use App\Services\Recipe\Crud;
use Illuminate\Support\Facades\DB;

class AdminIngredientService implements Crud
{
    use ImageUpload;

    public function get(): Response
    {
        return new Response(Response::COMPLETE,'success',FoodIngredient::all());
    }

    public function show($id): Response
    {
        return new Response(Response::COMPLETE,'success',FoodIngredient::find($id));
    }

    public function store($data)
    {
        try {
        DB::beginTransaction();
        $model = FoodIngredient::create([
            'name' => $data['name'],
            'type' => $data['type'],
            'value' => $data['value']
        ]);
            if (!empty($data['file'])) {
                $model=$this->uploadImage($data['file'], $model);
            }
            DB::commit();
            return new Response(Response::COMPLETE,'success',$model);
        } catch (\Exception $e) {
            DB::rollBack();
            return new Response(Response::FAILED,$e);
        }
    }

    public function update($id,$data): Response
    {
        DB::beginTransaction();
        $model=FoodIngredient::find($id);
        try {
            !empty($data['name'])?$model->name=$data['name']:null;
            !empty($data['name'])?$model->type=$data['type']:null;
            !empty($data['name'])?$model->value=$data['value']:null;
            $model->save();
            if (!empty($data['file'])) {
                $model=$this->uploadImage($data['file'], $model);
            }
            DB::commit();
            return new Response(Response::COMPLETE,'success',$model);
        } catch (\Exception $e) {
            DB::rollBack();
            return new Response(Response::FAILED,$e);
        }
    }

    public function delete($id): Response
    {
        $model=FoodIngredient::find($id);
        $path=storage_path('app/public/uploads/images/'.$model->image_url);
        if (file_exists($path))
        {
            unlink($path);
        }
        $model->delete();
        return new Response(Response::COMPLETE,'success');
    }
}
