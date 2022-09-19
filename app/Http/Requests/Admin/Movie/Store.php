<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Store extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'category' => 'required',
            'video_url' => 'required',
            'thumbnail' => 'required',
            'rating' => 'required',
            'is_featured' => 'nullable',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => "Nama tidak boleh kosong",
            'category.required' => "Kategori tidak boleh kosong",
            'video_url.required' => "Video URL tidak boleh kosong",
            'thumbnail.required' => "Thumbnail tidak boleh kosong",
            'rating.required' => "Rating tidak boleh kosong",
        ];
    }
}
