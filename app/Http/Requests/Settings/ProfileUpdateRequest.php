<?php

namespace App\Http\Requests\Settings;

use App\Models\User;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        return [
            'first_name' => ['required', 'string', 'max:255'],
            'middle_name' => ['nullable', 'string', 'max:255'], // middle name should be optional
            'last_name' => ['required', 'string', 'max:255'],

            'birthdate' => ['required', 'date', 'before:-18 years'], // user must be at least 18
            'nationality' => ['required', 'string', 'max:100'],

            'street' => ['required', 'string', 'max:255'],
            'barangay' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'province' => ['required', 'string', 'max:255'],
            'zipcode' => ['required', 'digits:4'], // PH zip codes are 4 digits

            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                'lowercase',
                Rule::unique('users', 'email')->ignore(optional($this->user())->id),
            ],
        ];
    }
}
