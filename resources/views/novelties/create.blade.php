@extends('dashboard.layouts.template')

@section('title', 'Añadir denuncia')

@section('content')
<div class="row">
    {!! Form::open(['route' => 'novelties.store']) !!}
        <div class="row">
            <div class="col-sm-2 post-save-changes">
                <button type="button" class="btn btn-green btn-lg btn-block btn-icon">
                    Enviar
                    <i class="entypo-check"></i>
                </button>
            </div>
            <div class="col-sm-10">
                {!!
                    Form::text('title', null, [
                        'title' => 'Título de la denuncia',
                        'class' => 'form-control input-lg'
                    ])
                !!}
            </div>
        </div>

        <div class="row">
        </div>

        <div class="row">
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
