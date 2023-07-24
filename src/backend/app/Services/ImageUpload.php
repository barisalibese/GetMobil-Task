<?php


namespace App\Services;


trait ImageUpload
{
    public array $IMAGE_TYPES = [
        'image/svg',
        'image/gif',
        'image/jpeg',
        'image/svg+xml',
        'image/png',
        'image/apng',
        'image/webp',
        'application/pdf'

    ];
    public function uploadImage($file,$model){
        try {
            if (in_array($file->getMimeType(), $this->IMAGE_TYPES)) {;
                if ($file->store('public/uploads/images/') !== false) {
                    $model->image_url=$file->hashName();
                    $model->save();
                }
            }
            return $model;
        } catch (\Exception $exception) {
            throw $exception;
        }
    }

}
