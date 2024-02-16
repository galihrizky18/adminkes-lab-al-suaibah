<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Farmasi extends Model
{
    use HasFactory;

    public function layanan(){
        return $this->belongsTo(Layanan::class, 'id_layanan', 'id_layanan');
    }

    public function krjPoliUmumLansia(){
        return $this->belongsTo(KrjPoliUmumLansia::class, 'id_pemeriksaan', 'id_krj_poli_umum_lansia');
    }
    public function krjPoliKIA(){
        return $this->belongsTo(krjPoliKIA::class, 'id_pemeriksaan', 'id_krj_poli_KIA');
    }
    public function krjPoliAnak(){
        return $this->belongsTo(krjPoliAnak::class, 'id_pemeriksaan', 'id_krj_poli_anak');
    }

    public function krjPoliGigi(){
        return $this->belongsTo(KrjPoliGigi::class, 'id_pemeriksaan', 'id_krj_poli_gigi');
    }


}
