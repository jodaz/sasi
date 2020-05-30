@extends('auth.main')

@section('content')
    <div class="login-container">
        <div class="login-header login-caret">
            <div class="login-content">
                <a href="" class="logo">
                    <img src="https://demo.neontheme.com/assets/images/logo@2x.png" width="120" alt="" /> </a>
                    <p class="description">Restablecer contraseña.</p> <!-- progress bar indicator -->
                </div>
            </div>
            <div class="login-form">
                <div class="login-content">
                    <form action="{{ route('password.update') }}" method="post" role="form" id="">
                        @csrf
                        <!-- load HTML messages -->
                        @include("dashboard.layouts.crud.messages")
                        <div class="form-steps">
                            <div class="step current" id="step-1">
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="entypo-mail"></i>
                                        </div>

                                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email"
                                        placeholder="Correo Electrónico" autofocus>

                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="entypo-key"></i>
                                        </div>
                                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Nueva Contraseña">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="entypo-key"></i>
                                        </div>
                                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="Confirmar Contraseña">
                                    </div>
                                </div>
                                <div class="form-group"> <button type="submit" class="btn btn-info btn-block btn-login">
                                    Enviar
                                    <i class="entypo-right-open-mini"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="login-bottom-links">
                    <a href="{{ url('login') }}" class="link">
                        <i class="entypo-lock"></i>
                        Regresar al Inicio
                    </a> <br />
                    <a href="#">ToS</a> - <a href="#">Politicas de Privacidad</a>
                </div>
            </div>
        </div>
    </div>
@endsection
