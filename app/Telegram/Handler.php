<?php

namespace App\Telegram;

use DefStudio\Telegraph\Facades\Telegraph;
use DefStudio\Telegraph\Handlers\WebhookHandler;
use DefStudio\Telegraph\Keyboard\Button;
use DefStudio\Telegraph\Keyboard\Keyboard;
use DefStudio\Telegraph\Models\TelegraphChat;
use Illuminate\Support\Stringable;

class Handler extends WebhookHandler
{
  public function hello()
  {
    return $this->reply('Это тестовый ответ');
  }

  public function start() {
    return $this->reply('Привет!');
  }


  protected function handleUnknownCommand(Stringable $text): void
  {
    if ($text->value()) {
      $this->reply('Ошибка');
    };
  }

  public function actions () {
    $chat = TelegraphChat::find(1);
    return $this->reply($chat->name);
  }

  protected function handleChatMessage(Stringable $text): void
  {
    $this->reply("Вы написали: $text");
  }

}
