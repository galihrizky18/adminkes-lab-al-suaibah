<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laboratorium Adminkes Al-Suaibah Palembang') }}</title>

    {{-- Favicon --}}
    <link rel="icon" href="{{ asset('asset/logo/al-suaibah.png') }}" type="image/x-icon">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Della+Respira&family=Istok+Web:wght@400;700&family=Jomhuria&family=Karma:wght@400;500;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lora:wght@400;500;600;700&family=Mirza:wght@400;500;600;700&family=Montserrat:wght@400;500;700&family=Open+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=Poppins:wght@300;400;500;600;700&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:wght@500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,100;1,400;1,500;1,700&family=Tajawal:wght@300;400;500;700;800&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased bg-[#F5F7FA]">
    @inertia
</body>

</html>
