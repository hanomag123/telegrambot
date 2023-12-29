<?php

namespace App\Http\Controllers;

use DefStudio\Telegraph\Models\TelegraphChat;
use Illuminate\Http\Request;

class TelegramController extends Controller
{
  public function index()
  {
    return view('custom');
  }

  public function send(Request $request)
  {
    $chat = TelegraphChat::find(3);
    $chat->message($request->message)->send();
    return redirect()->back();
  }
}
