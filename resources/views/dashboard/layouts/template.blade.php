<!DOCTYPE html>
<html lang="es">
	<head>
		<!-- Meta -->
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <link rel="shortcut icon" type="image/x-icon" href="assets/{{ asset('web/images/favicon.png') }}">
	    <meta name="author" content="">
	    <meta name="description" content="">
	    <meta name="keywords" content="">
    	<title>Título</title>

		<!-- Loads CSS -->
		<link rel="stylesheet" href="{{ asset('dash') }}/assets/js/jquery-ui/css/no-theme/jquery-ui-1.10.3.custom.min.css" id="style-resource-1">
		<link rel="stylesheet" href="{{ asset('dash') }}/assets/css/font-icons/entypo/css/entypo.css" id="style-resource-2">
		<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic" id="style-resource-3">
		<link rel="stylesheet" href="{{ asset('dash') }}/assets/css/bootstrap.css" id="style-resource-4">
		<link rel="stylesheet" href="{{ asset('dash') }}/assets/css/neon-core.css" id="style-resource-5">
		<link rel="stylesheet" href="{{ asset('dash') }}/assets/css/neon-theme.css" id="style-resource-6">
		<link rel="stylesheet" href="{{ asset('dash') }}/assets/css/neon-forms.css" id="style-resource-7">
		<link rel="stylesheet" href="{{ asset('dash') }}/assets/css/custom.css" id="style-resource-8">
		<script src="https://demo.neontheme.com/assets/js/jquery-1.11.3.min.js"></script>
	</head>
	<body class="page-body" data-url="{{ url('/') }}">
		<div class="page-container">
			<div class="sidebar-menu">
				<div class="sidebar-menu-inner">
					<header class="logo-env">
						<div class="logo">
							<a href="#">
								<img src="{{ asset('dash') }}/assets/images/logo@2x.png" width="120" alt="" />
							</a>
						</div>
						<div class="sidebar-collapse">
							<a href="#" class="sidebar-collapse-icon">
								<i class="entypo-menu"></i>
							</a>
						</div>
						<div class="sidebar-mobile-menu visible-xs">
							<a href="#" class="with-animation">
								<i class="entypo-menu"></i>
							</a>
						</div>
					</header>
					<ul id="main-menu" class="main-menu">
						<li>
							<a href="#">
								<i class="entypo-home"></i>
								<span class="title">Escritorio</span>
							</a>
						</li>
						<li class="has-sub root-level">
							<a href="#">
								<i class="entypo-bookmarks"></i>
								<span class="title">Servicios</span>
							</a>
							<ul class="">
								<li>
									<a href="#">
										<span class="title">Proveedores</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="title">Productos o servicios</span>
									</a>
								</li>
							</ul>
						</li>
						<li class="has-sub root-level">
							<a href="#">
								<i class="entypo-briefcase"></i>
								<span class="title">Revendedores</span>
							</a>
							<ul class="">
								<li>
									<a href="#">
										<span class="title">Tiendas</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span class="title">Ventas</span>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">
								<i class="entypo-star-empty"></i>
								<span class="title">Reporte de visitas</span>
							</a>
						</li>
						<li>
							<a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
								<i class="entypo-logout right"></i>
                                Salir
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>
						</li>
					</ul>
				</div>
			</div>
			<div class="main-content">
				<div class="row">
					<div class="col-md-6 col-sm-8 clearfix">
						<ul class="user-info pull-left pull-none-xsm">
							<li class="profile-info dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">
									<img src="http://geekha.cl/photografy/photo1_crop.jpg" alt="" class="img-circle" width="44" />
									Irwing Naranjo
								</a>
								<ul class="dropdown-menu">
									<li class="caret"></li>
									<li>
										<a href="{{ url('dashboard/profile/'.Auth::user()->id) }}">
											<i class="entypo-user"></i>
											Editar perfil
										</a>
									</li>
								</ul>
							</li>
						</ul>
						<ul class="user-info pull-left pull-right-xs pull-none-xsm">
						</ul>
					</div>
					<div class="col-md-6 col-sm-4 clearfix hidden-xs">
						<ul class="list-inline links-list pull-right">
							<li>
								<a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                    Salir <i class="entypo-logout right"></i>
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>
							</li>
						</ul>
					</div>
				</div>
                <hr />
                @include("dashboard.layouts.crud.breadcrum")

                @yield('content')

			</div>
		</div>

		<!-- loads scripts -->
		<script src="https://demo.neontheme.com/assets/js/gsap/TweenMax.min.js"></script>
		<script src="https://demo.neontheme.com/assets/js/jquery-ui/js/jquery-ui-1.10.3.minimal.min.js"></script>
		<script src="https://demo.neontheme.com/assets/js/bootstrap.js"></script>
		<script src="https://demo.neontheme.com/assets/js/joinable.js"></script>
		<script src="https://demo.neontheme.com/assets/js/resizeable.js"></script>
		<script src="https://demo.neontheme.com/assets/js/neon-api.js"></script>
		<script src="https://demo.neontheme.com/assets/js/cookies.min.js"></script>
		<script src="https://demo.neontheme.com/assets/js/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
		<script src="https://demo.neontheme.com/assets/js/jvectormap/jquery-jvectormap-europe-merc-en.js"></script>
		<script src="https://demo.neontheme.com/assets/js/jquery.sparkline.min.js"></script>
		<script src="https://demo.neontheme.com/assets/js/rickshaw/vendor/d3.v3.js"></script>
		<script src="https://demo.neontheme.com/assets/js/rickshaw/rickshaw.min.js"></script>
		<script src="https://demo.neontheme.com/assets/js/raphael-min.js"></script>
		<script src="https://demo.neontheme.com/assets/js/morris.min.js"></script>
		<script src="https://demo.neontheme.com/assets/js/toastr.js"></script>
		<script src="https://demo.neontheme.com/assets/js/neon-chat.js"></script>
		<script src="https://demo.neontheme.com/assets/js/neon-custom.js"></script>
		<script src="https://demo.neontheme.com/assets/js/neon-demo.js"></script>
        <script src="https://demo.neontheme.com/assets/js/neon-skins.js"></script>
        <script src="https://demo.neontheme.com/assets/js/jquery.inputmask.bundle.js"></script>
	</body>
</html>
