<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class krjPoliUmumLansia extends Model
{
    use HasFactory;

    public function dokter(){
        return $this->belongsTo(Dokter::class, 'id_dokter', 'id_dokter');
    }
}
