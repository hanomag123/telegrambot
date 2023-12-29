<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use DefStudio\Telegraph\Models\TelegraphBot;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    // \App\Models\User::factory(10)->create();

    // \App\Models\User::factory()->create([
    //     'name' => 'Test User',
    //     'email' => 'test@example.com',
    // ]);

    $bot = TelegraphBot::create([
      'token' => env('TELEGRAMBOT_TOKEN'),
      'name' => 'test',
    ]);

    $bot->registerWebhook()->send();

    Artisan::call('app:connect-by-bit');
  }
}
