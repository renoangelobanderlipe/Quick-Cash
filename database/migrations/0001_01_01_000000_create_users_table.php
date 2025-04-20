<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tenants', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('details')->nullable();
            $table->text('address')->nullable();
            $table->decimal('capital', 15, 2)->default(0);
            $table->timestamps();
        });

        Schema::create('users', function (Blueprint $table) {
            $table->id();

            // Personal Info
            $table->string('first_name', 100);
            $table->string('middle_name', 100)->nullable();
            $table->string('last_name', 100);
            $table->enum('gender', ['male', 'female', 'other'])->nullable();
            $table->date('birthdate');
            $table->char('nationality', 2)->default('PH'); // ISO Alpha-2 format
            $table->string('email')->unique();
            $table->string('company_email')->unique();
            $table->string('md5_email')->unique(); // Used for gravatar / hash matching
            $table->string('phone_number', 20)->nullable(); // Optional if SMS/OTP used

            // Address
            $table->string('street', 255);
            $table->string('barangay', 100);
            $table->string('city', 100);
            $table->string('province', 100);
            $table->string('zipcode', 10);

            // Auth & Status
            $table->string('password');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->boolean('is_active')->default(true)->index();

            // Foreign Keys
            $table->foreignId('tenant_id')
                ->nullable()
                ->constrained('tenants')
                ->onDelete('set null');

            // Timestamps
            $table->timestamps();

            $table->index(['first_name', 'last_name', 'email']);
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
