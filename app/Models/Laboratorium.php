<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laboratorium extends Model
{
    use HasFactory;

    public function layanan(){
        return $this->hasMany(Layanan::class, 'id_layanan', 'id_layanan');
    }
}
