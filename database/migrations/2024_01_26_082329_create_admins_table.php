<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->string('id_admin')->primary();
            $table->string('id_staff')->unique();
            $table->string('name');
            $table->string('phone');
            $table->string('email')->unique();
            $table->string('gender');
            $table->date('birth');
            $table->string('religion');
            $table->string('province');
            $table->string('city');
            $table->string('nationality');
            $table->string('address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
