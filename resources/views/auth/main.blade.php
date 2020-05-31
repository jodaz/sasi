<!doctype html>
<html lang="es">
<head>
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge" /><![endif]-->
	<meta name="viewport" content="width=device-width,initial-scale=1"><!-- Place favicon.ico in the root directory -->
	<link rel="apple-touch-icon" href="apple-touch-icon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="description" content="" />
	<meta name="author" content="FLAME" />
	<link rel="shortcut icon" type="image/x-icon" href="{{ asset('favicon.png') }}" />
	<title>@yield('title') | SASI</title>

	<script>var BASE_URL = "{{ url('/') }}"</script>
	
	@include('layouts.styles')
</head>
<body class="page-body login-page login-form-fall">
	<div style="overflow:hidden">
		@yield('content')
	</div>
	
	@include('layouts.scripts')

	@yield('scripts')
</body>
</html>
