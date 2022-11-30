<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Requestcar;
use App\Models\User;
class RequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users=User::all();
     $req=Requestcar::all();
     dd( $users);
     return 'ssss';
    }
   
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request);
        $req=new Requestcar();
        $req->user_id=$request->user_id;
        $req->carModel=$request->carModel;
        $req->carNumber=$request->carNumber;
        $req->country=$request->country;
        $req->problem=$request->problem;
        $req->status='The Request Is Pending Until The Admin Sees It';
        $req->save();
        return response()->json(['status'=>200 , 'user'=>$req]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function accept($id)
    {
        $accept= Requestcar::where('id',$id)->first();
        $accept->status='We saw your problem and will be in touch shortly';
        $accept->save();
        
    }
    public function reject($id)
    {
        $reject= Requestcar::where('id',$id)->first();
        $reject->status='We\'ve seen your problem and can\'t help you at this time';
        $reject->save();
        
    }
    public function show($id)
    {
        $req= Requestcar::where('user_id',$id)->first();
        return $req;
        
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
