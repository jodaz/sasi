@extends('dashboard.layouts.template')

@section('content')

    <h2>Perfil de usuario</h2>

    <div class="panel panel-primary">
        <div class="panel-heading">
            <!-- load HTML messages -->
            @include("dashboard.layouts.crud.messages")

            <div class="panel-body">
                {!! Form::model($row, ['url' => 'dashboard/update-profile', 'method' => 'put', 'autocomplete' => 'off', 'id' => 'form']) !!}
                    @csrf
                    <input type="hidden" name="user_id" value="{{ $row->id }}">

                    <div class="form-group">
                        <label class="control-label">Primer nombre <span class="text-danger">*</span></label>
                        {!! Form::text("name", old('name', @$row->name), ["Placeholder" => "Primer nombre", "class" => "form-control", "onkeyup" => "upperCase(this);"]) !!}

                        @error('name')
                            <div class="text text-danger">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label class="control-label">Segundo nombre </label>
                        {!! Form::text("second_name", old('second_name', @$row->second_name), ["Placeholder" => "Segundo nombre", "class" => "form-control", "onkeyup" => "upperCase(this);"]) !!}
                    </div>
                    <div class="form-group">
                        <label class="control-label">Primer apellido <span class="text-danger">*</span></label>
                        {!! Form::text("surname", old('surname', @$row->surname), ["Placeholder" => "Primer apellido", "class" => "form-control", "onkeyup" => "upperCase(this);"]) !!}

                        @error('surname')
                            <div class="text text-danger">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label class="control-label">Segundo apellido</label>
                        {!! Form::text("second_surname", old('second_surname', @$row->second_surname), ["Placeholder" => "Segundo apellido", "class" => "form-control", "onkeyup" => "upperCase(this);"]) !!}
                    </div>
                    <div class="form-group">
                        <label class="control-label">Teléfono</label>
                        {!! Form::text("phone", old('phone', @$row->phone), ["Placeholder" => "Teléfono", "class" => "form-control", "data-mask" => "phone"]) !!}
                    </div>
                    <div class="form-group">
                        <label class="control-label">Correo electrónico <span class="text-danger">*</span></label>
                        {!! Form::email("email", old('email', @$row->email), ["Placeholder" => "Correo electrónico", "class" => "form-control", "data-mask" => "email"]) !!}

                        @error('email')
                            <div class="text text-danger">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success">Actualizar</button>
                        <a href="{{ url('dashboard') }}" class="btn btn-danger">Inicio</a>
                    </div>
                {{ Form::close() }}
            </div>
        </div>
    </div>

@endsection
