<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileUpload extends Controller
{

    public function __invoke(Request $request)
    {
        dd('test', $request->all());
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,png,jpg,gif|max:3072',
        ]);

        dd($request->all());

        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('avatars', 'public');
            return back()->with('success', 'Profile image uploaded!');
        }

        return back()->withErrors(['avatar' => 'No file was uploaded.']);
    }
}
