<?php

namespace Database\Factories;

use App\Models\Tenant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TenantFactory extends Factory
{
    protected $model = Tenant::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->company(),
            'details' => $this->faker->optional()->catchPhrase(),
            'address' => $this->faker->optional()->address(),
            'capital' => $this->faker->randomFloat(2, 100000, 1000000), // Capital between ₱100,000 - ₱1,000,000
        ];
    }
}
