@extends('auth.main')

@section('content')
    <div class="login-container">
        <div class="login-header login-caret">
            <div class="login-content">
                <a href="" class="logo">
                    <img src="https://demo.neontheme.com/assets/images/logo@2x.png" width="120" alt="" />
                </a>
                <p class="description">Creat tu cuenta!!</p>
            </div>
        </div>
        <div class="login-progressbar"> <div></div> </div>
        <div class="login-form">
            <div class="login-content">
                <form method="POST" action="{{ route('register') }}">
                    @csrf

                    <!-- load HTML messages -->
                    @include("dashboard.layouts.crud.messages")
                    
                    <div class="form-steps">
                        <div class="step current" id="step-1">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon"> <i class="entypo-user"></i> </div>

                                    <input type="text" id="name" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="off" autofocus placeholder="Nombres">

                                    @error('name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon"> <i class="entypo-user"></i> </div>

                                    <input type="text" id="surname" class="form-control @error('surname') is-invalid @enderror" name="surname" value="{{ old('surname') }}" required autocomplete="off" autofocus placeholder="Apellidos">

                                    @error('surname')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="entypo-mail"></i>
                                    </div>

                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="off" placeholder="Email">

                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-info btn-block btn-login"> <i class="entypo-right-open-mini"></i>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="login-bottom-links">
                    <a href="{{ url('login') }}" class="link">Regresar al Inicio</a> <br />
                </div>
            </div>
        </div>
    </div>
@endsection
