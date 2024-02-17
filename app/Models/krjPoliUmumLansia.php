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

    public function farmasi(){
        return $this->hasOne(Farmasi::class, 'id_krj_poli_umum_lansia' , 'id_pemeriksaan');
    }
    public function Tagihan(){
        return $this->hasOne(Tagihan::class, 'id_krj_poli_umum_lansia' , 'id_pemeriksaan');
    }
}
