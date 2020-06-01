<!DOCTYPE html>

@php
set_time_limit(120);
@endphp

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <!-- CSRF Token -->
        <title>  Solicitud aprobada </title>
        <style>
           body {
                font-family: sans-serif, serif;
                font-size: 14px;
            }
            .header {
                width: 100%;
                font-size: 9px;
                position: relative;
                display: block;
            }
            .header div {
                display: inline-block;
            }
            #mayorLOGO {
                float: right;
            }
            table, td, th {
                border: 1px #000 solid;
            }
            td {
                font-size: 11px;
                padding: 4px;
            }
            table {
                border-collapse: collapse;
                width: 100%;                
                margin-top: 5px;
            }
            .tables {
                display:block;
            }
            .bill-info {
                width: 100%;
                clear: both;
                font-weight: bold;
            }
            .col-bill-info {
                float: left;
                width: 50%;
            }
            .total-amount {
                text-align: right;
            }
            .miscellaneus {
                font-size: 10px;
            }
            caption {
                font-weight: bold;
            }
        </style>
    </head>

    <body>
        <div class="header">
            <div class="description">
               <p>
                REPÚBLICA BOLIVARIANA DE VENEZUELA<br>
                ESTADO SUCRE<br>
                ALCALDÍA DEL MUNICIPIO BERMÚDEZ<br>
                DESPACHO DE LA ALCALDÍA DE BERMÚDEZ<br>
                RIF: G-20000222-1<br>
                DIRECCIÓN: AV. CARABOBO, EDIFICIO MUNICIPAL
                </p>
            </div>
            <div id="mayorLOGO">
                <img src="{{ base_path().'/public/logo.png' }}" height="70px" width="130px" alt="logo" />
            </div>
        </div>
        <div class="tables">
            Usuario: {{ $user->full_name }}
            <br>
            <div class="bill-info">
                <div class="col-bill-info">
                    FECHA DE EMISIÓN: {{ $application->approved_at }}
                </div>
            </div>
        </div>
    </body>
</html>
