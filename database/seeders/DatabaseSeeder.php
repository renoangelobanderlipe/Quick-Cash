<?php

namespace Database\Seeders;

use App\Models\Tenant;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create 5 tenants with 10 users each
        Tenant::factory()
            ->count(5)
            ->hasUsers(10)
            ->create();
        // Optionally create an admin user (not tied to a tenant)
        User::factory()->create([
            'first_name' => 'Admin',
            'middle_name' => null,
            'last_name' => 'User',
            'gender' => 'male',
            'birthdate' => '1990-01-01',
            'nationality' => 'PH',
            'email' => 'admin@example.com',
            'company_email' => 'admin@company.com',
            'md5_email' => md5('admin@example.com'),
            'phone_number' => '09123456789',
            'street' => '123 Admin St.',
            'barangay' => 'Barangay Admin',
            'city' => 'Admin City',
            'province' => 'Metro Manila',
            'zipcode' => '1000',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
            'is_active' => true,
            'tenant_id' => null,
        ]);
    }
}
