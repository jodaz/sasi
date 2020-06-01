@extends('dashboard.layouts.template')

@section('title', 'Hacer denuncia')

@section('content')
<div class="row">
    {!! Form::open(['route' => 'novelties.store']) !!}
        <div class="row">
            <div class="col-sm-2 post-save-changes">
                <button type="submit" class="btn btn-green btn-lg btn-block btn-icon">
                    Enviar
                    <i class="entypo-check"></i>
                </button>
            </div>
            <div class="col-sm-10">
                {!!
                    Form::text('title', null, [
                        'placeholder' => 'Título de la denuncia',
                        'class' => 'form-control input-lg',
                        'required'
                    ])
                !!}
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-sm-12">
                {!!
                    Form::textarea('content', null, [
                        'placeholder' => 'Contenido',
                        'class' => 'form-control',
                        'rows' => 10,
                        'required'
                    ])
                !!}
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-sm-12">
                {!!
                    Form::select('category_id', $categories, null, [
                        'class' => 'form-control',
                        'placeholder' => 'Seleccione una categoría',
                        'required'
                    ])
                !!}
            </div>
        </div>
    
    {!! Form::close() !!}
</div>
@endsection

@push('css')
<style>
.ms-container .ms-list {
    width: 135px;
    height: 205px;
}
    .post-save-changes {
    float: right;
}
@media screen and (max-width: 789px)
{
.post-save-changes {
    float: none;
    margin-bottom: 20px;
}
</style>
@endpush
