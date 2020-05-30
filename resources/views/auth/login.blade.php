@extends('auth.main')

@section('content')
    <div class="login-container">
        <div class="login-header login-caret">
            <div class="login-content">
                <a href="" class="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Nick_%28Logo%29.png" width="120" alt="" />
                </a>
                <p class="description">Accede a la plataforma administrativa</p>
            </div>
        </div>


        <div class="login-form">
            <div class="login-content">
                <!-- load HTML messages -->
                @include("dashboard.layouts.crud.messages")

                <form method="POST" action="{{ route('login') }}" role="form" id="">
                    @csrf
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="entypo-user"></i>
                            </div>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Correo Electrónico" autocomplete="off" />
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="entypo-key"></i>
                            </div>
                            <input type="password" class="form-control" name="password" id="password" placeholder="Contraseña" autocomplete="off" />
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block btn-login">
                            <i class="entypo-login"></i>
                            Acceder
                        </button>
                    </div>
                </form>

                <div class="login-bottom-links">
                    <a href="{{ url('register') }}" class="link">Registrarme</a> <br />
                    <a href="{{ url('password/reset') }}" class="link">¿Olvidate tu contraseña?</a> <br />
                </div>

            </div>
        </div>
    </div>
@endsection
