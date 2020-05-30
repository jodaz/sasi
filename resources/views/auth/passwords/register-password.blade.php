@extends('auth.main')

@section('content')
    <div class="login-container">
        <div class="login-header login-caret">
            <div class="login-content">
                <a href="" class="logo">
                    <img src="https://demo.neontheme.com/assets/images/logo@2x.png" width="120" alt="" /> </a>
                    <p class="description">Configura tu contraseña</p> <!-- progress bar indicator -->
                </div>
            </div>
            <div class="login-form">
                <div class="login-content">
                    <form method="POST" action="{{ url('register-password') }}" role="form" id="">
                        @csrf
                        <input type="hidden" name="user_token" value="{{ $row }}">
                        <!-- load HTML messages -->
                        @include("dashboard.layouts.crud.messages")

                        <div class="form-steps">
                            <div class="step current" id="step-1">
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
            </div>
        </div>
    </div>
@endsection
