<?php

namespace App\Console\Commands;

use App\Models\BTC;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class ConnectByBit extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'app:connect-by-bit';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Command description';

  /**
   * Execute the console command.
   */
  public function handle()
  {
    $response = Http::withoutVerifying()->get("https://api-testnet.bybit.com/v5/market/recent-trade?category=spot&symbol=BTCUSDT&limit=10");

    //Если ответ успешен, то преобразуем его в массив
    if ($response->successful()) {

      $response = $response->json();

      $arr = $response['result']['list'];

      if (count($arr) > 0) {
        foreach ($arr as $value) {
          $mil = $value['time'];
          $seconds = $mil / 1000;
          $date = date("Y-m-d H:i:s.u", $seconds);
          BTC::create([
            'time' => $date,
            'value' => $value['price'],
          ]);
        }
      }
    }
  }
}
