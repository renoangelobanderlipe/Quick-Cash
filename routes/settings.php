<?php

use App\Http\Controllers\ProfileUpload;
use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {

    Route::redirect('settings', 'settings/profile');

    Route::controller(ProfileController::class)->prefix('settings')->group(function () {
        Route::get('profile', 'edit')->name('profile.edit');
        Route::patch('profile', 'update')->name('profile.update');
        Route::delete('profile', 'destroy')->name('profile.destroy');
        // Route::post('profile/avatar', ProfileUpload::class)->name('profile.avatar');
        Route::post('profile/avatar', function () {
            dd('test', request()->all());
        })->name('profile.avatar');
    });

    Route::controller(PasswordController::class)->group(function () {
        Route::get('settings/password',  'edit')->name('password.edit');
        Route::put('settings/password',  'update')->name('password.update');
    });
});
