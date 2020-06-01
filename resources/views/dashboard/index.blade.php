@extends('dashboard.layouts.template')

@section('title', 'Dashboard')

@section('content')
<div class="row">
    <div class="col-md-6">
        <div class="sorted ui-sortable">
            <div class="panel panel-success" data-collapsed="0">
                <div class="panel-heading">
                    <div class="panel-title">Solicitudes</div>
                    <div class="panel-options">
                        <a href="{{ route('applications.create') }}">
                            <i class="entypo-list-add"></i>
                        </a>
                    </div>
                </div>
                <div class="panel-body">
                    <p>Solicitudes pendientes más recientes</p> 
                </div> 
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="sorted ui-sortable">
            <div class="panel panel-info" data-collapsed="0">
                <div class="panel-heading">
                    <div class="panel-title">Denuncias</div>
                    <div class="panel-options">
                        <a href="{{ route('novelties.create') }}">
                            <i class="entypo-list-add"></i>
                        </a>
                    </div>
                </div>
                <div class="panel-body">
                    <p>Denuncias pendientes más recientes</p>
                </div> 
            </div>
        </div>
    </div>
</div>
<div class="row">
	<div class="col-sm-3 col-xs-6">
		<div class="tile-stats tile-red">
			<div class="icon"><i class="entypo-users"></i></div>
			<div class="num" data-start="0" data-end="{{ $users }}" data-postfix="" data-duration="1500" data-delay="0">
				0
			</div>
			<h3>Usuarios registrados</h3>
		</div>
	</div>
	<div class="col-sm-3 col-xs-6">
		<div class="tile-stats tile-green">
			<div class="icon"><i class="entypo-chart-bar"></i></div> 
			<div class="num" data-start="0" data-end="{{ $apps }}" data-postfix="" data-duration="1500" data-delay="600">0</div>
			<h3>Solicitudes recibidas</h3>
		</div>
	</div>
	<div class="clear visible-xs"></div>
	<div class="col-sm-3 col-xs-6">
		<div class="tile-stats tile-aqua">
			<div class="icon"><i class="entypo-mail"></i></div>
			<div class="num" data-start="0" data-end="{{ $novelties }}" data-postfix="" data-duration="1500" data-delay="1200">
				0
			</div>
            <h3>Denuncias recibidas</h3>
        </div>
	</div>
	<div class="col-sm-3 col-xs-6">
		<div class="tile-stats tile-blue">
			<div class="icon"><i class="entypo-rss"></i></div>
			<div class="num" data-start="0" data-end="{{ $organizations }}" data-postfix="" data-duration="1500" data-delay="1800">
				0
			</div>
			<h3>Organizaciones registradas</h3>
			</div>
		</div>
	</div>
@endsection
