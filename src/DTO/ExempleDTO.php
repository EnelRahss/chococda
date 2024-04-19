<?php

namespace App\DTO;

readonly class ExempleDTO{
    public function __construct(
        public string $firstname, 
        public string $lastname,
        public int $count
    ){}
}