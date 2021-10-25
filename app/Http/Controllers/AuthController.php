<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function dashboard()
    {
        if (Auth::check() === true) {
            return view('painel.main');
        } else {
            return redirect()->route('admin.login');
        }
    }

    public function showLoginForm()
    {
        return view('painel.pages.login');
    }

    public function login(Request $request)
    {
        dd($request->all());
        $cred = [
            'email' => $request->email,
            'password' => $request->password
        ];
        Auth::attempt($cred);
        dd(Auth::user());
        // if (Auth::attempt($cred)) {
        // return redirect()->route('admin');
        // } else {
        //     redirect()->back()->withInput()->withErrors(['Os dados informados não conferem']);
        // }
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('admin');
    }
}
