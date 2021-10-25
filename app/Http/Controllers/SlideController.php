<?php

namespace App\Http\Controllers;

use App\Models\Slide;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\DocBlock\Tags\Since;

class SlideController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $slides = Slide::get();
        return view('painel.pages.listar.slide', compact('slides'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('painel.pages.cadastrar.slide');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $slide = new Slide();

        $slide->nome = $request->nome;
        $slide->img = '';
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $requestImage = $request->image;
            $extension = $requestImage->extension();
            $imageName = md5($requestImage->getClientOriginalName() . strtotime("now")) . "." . $extension;
            $requestImage->move(public_path('painel/assets/img/slides'), $imageName);
            $slide->img = $imageName;
            if ($slide->save()) {
                return redirect()->route('dashboard.add.slide');
            };
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(int $id)
    {
        $slide = Slide::find($id);

        return view('painel.pages.editar.slide', compact('slide'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(int $id, Request $request)
    {
        $slide = Slide::find($id);
        $updateData = [
            "nome" => $request->nome,
            "img" => $slide->img
        ];
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $requestImage = $request->image;
            $extension = $requestImage->extension();
            $imageName = md5($requestImage->getClientOriginalName() . strtotime("now")) . "." . $extension;
            $currentImagePath = public_path('painel/assets/img/slides/' . $slide->img);
            if (file_exists($currentImagePath)) {
                // exclui arquivo
                @unlink($currentImagePath);
            }
            // move novo aquivo
            $requestImage->move(public_path('painel/assets/img/slides'), $imageName);

            $updateData['img'] = $imageName;
            if ($slide->update($updateData)) {
                return redirect()->route('dashboard.list.slide');
            };
        } else {
            if ($slide->update($updateData)) {
                return redirect()->route('dashboard.list.slide');
            };
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $slide = Slide::find($id);

        $currentImagePath = public_path('painel/assets/img/slides/' . $slide->img);
        if (file_exists($currentImagePath)) {
            // exclui arquivo que existe
            @unlink($currentImagePath);
        }

        if ($slide->delete()) {
            return true;
        }
    }
}
