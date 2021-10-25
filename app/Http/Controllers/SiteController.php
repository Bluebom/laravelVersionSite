<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Skill;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function index()
    {
        $services = Service::get();
        $skill = Skill::get();
        $content = [
            'services' => $services,
            'skill' => $skill
        ];
        return view('franklinhenrique.sections.home', compact('content'));
    }
}
