<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = User::join('requestcars', 'requestcars.user_id', '=', 'users.id')
              ->where('role','user')->get(['users.*', 'requestcars.*']);
        // $user = User::where('role','user')->get();  
        return $user;
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
        $user=new User();

        $user->firstname=$request->firstname;
        $user->lastname=$request->lastname;
        $user->password=Hash::make($request->password);
        $user->email=$request->email;
        $user->role=$request->role;
        $user->status=$request->status;

        $user->save();
        return response()->json(['status'=>200 , 'user'=>$user]);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public  function login(Request $request) {
        $user = User::where('email',$request->email)->first();
 
 
         $error = "ERROR!";
 
        // if (!$user || !Hash::check($request->password, $user->password)){
        //      return $error;
        // }
 
        return $user;
     }
 


    public function show($id)
    {
        $user = User::where('id',$id)->first();  
        return $user;
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
