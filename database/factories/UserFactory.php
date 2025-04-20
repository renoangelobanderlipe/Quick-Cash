<?php

namespace Database\Factories;

use App\Models\Tenant;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $firstName = $this->faker->firstName();
        $lastName = $this->faker->lastName();
        $email = $this->faker->unique()->safeEmail();
        $company_email = $this->faker->unique()->companyEmail();
        $md5Email = md5($email);

        return [
            'first_name' => $firstName,
            'middle_name' => $this->faker->optional()->firstName(),
            'last_name' => $lastName,
            'gender' => $this->faker->randomElement(['male', 'female']),
            'birthdate' => $this->faker->date('Y-m-d', '-18 years'),
            'nationality' => 'PH',
            'email' => $email,
            'company_email' => $company_email,
            'md5_email' => $md5Email,
            'phone_number' => $this->faker->numerify('09#########'),
            'street' => $this->faker->streetAddress(),
            'barangay' => $this->faker->citySuffix(),
            'city' => $this->faker->city(),
            'province' => $this->faker->state(),
            'zipcode' => $this->faker->postcode(),
            'password' => Hash::make('password'), // Use Hash to mimic real behavior
            'email_verified_at' => now(),
            'is_active' => true,
            'remember_token' => Str::random(10),
            'tenant_id' => Tenant::factory(), // Assumes you have a TenantFactory
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
