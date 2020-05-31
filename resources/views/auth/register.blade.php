@extends('auth.main')

@section('title', 'Regístrate')

@section('content')
    <div class="login-container">
        <div class="login-header login-caret">
            <div class="login-content">
                <a href="" class="logo">
                    <img src="https://demo.neontheme.com/assets/images/logo@2x.png" width="120" alt="" />
                </a>
                <p class="description">Regístrate</p>
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

                                    <input type="text" id="name" class="form-control @error('name') is-invalid @enderror" name="names" value="{{ old('name') }}" required autocomplete="off" autofocus placeholder="Nombres">

                                    @error('names')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon"> <i class="entypo-user"></i> </div>

                                    <input type="text" id="surname" class="form-control @error('surname') is-invalid @enderror" name="surnames" value="{{ old('surname') }}" required autocomplete="off" autofocus placeholder="Apellidos">

                                    @error('surname')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon"> <i class="entypo-user"></i> </div>

                                    <input type="text" id="surname" class="form-control @error('identification') is-invalid @enderror" name="identification" value="{{ old('identification') }}" required autocomplete="off" autofocus placeholder="Cédula de identidad">

                                    @error('identification')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="input-group">
                                    {!!
                                        Form::select('genre_id', $genres, null, [
                                            'class' => 'form-control',
                                            'placeholder' => 'Seleccione su género'
                                        ])
                                    !!}

                                    @error('genre_id')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="input-group">
                                    {!!
                                        Form::select('parish_id', $parishes, null, [
                                            'class' => 'form-control',
                                            'placeholder' => 'Parroquia'
                                        ])
                                    !!}

                                    @error('parish_id')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="input-group">
                                    {!!
                                        Form::select('community_id', $communities, null, [
                                            'class' => 'form-control',
                                            'placeholder' => 'Seleccione su communidad'
                                        ])
                                    !!}

                                    @error('genre_id')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon"> <i class="entypo-user"></i> </div>

                                    <input type="text" id="address" class="form-control @error('address') is-invalid @enderror" name="address" value="{{ old('address') }}" required autocomplete="off" autofocus placeholder="Dirección">

                                    @error('identification')
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
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="entypo-mail"></i>
                                    </div>

                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" value="{{ old('password') }}" required autocomplete="off" placeholder="Contraseña">

                                    @error('password')
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

                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password_confirmation" value="{{ old('password') }}" required autocomplete="off" placeholder="Contraseña">

                                    @error('password_confirmation')
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
