@extends('auth.main')

@section('content')
    <div class="login-container">
        <div class="login-header login-caret">
            <div class="login-content">
                <a href="https://demo.neontheme.com/dashboard/main/" class="logo">
                    <img src="https://demo.neontheme.com/assets/images/logo@2x.png" width="120" alt="" /> </a>
                    <p class="description">Recuperar contraseña</p> <!-- progress bar indicator -->
                </div>
            </div>
            <div class="login-form">
                <div class="login-content">
                    <form action="{{ route('password.email') }}" method="post" role="form" id="">
                        @csrf
                        <div class="form-steps">
                            <div class="step current" id="step-1">
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="entypo-mail"></i>
                                        </div>
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Correo Electrónico" data-mask="email" autocomplete="off" />

                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
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
                    </a>
                </div>
            </div>
        </div>
    </div>
@endsection
