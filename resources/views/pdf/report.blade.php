<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <!-- CSRF Token -->
        <title> Reporte de solicitudes </title>
        <style>
           body {
                font-family: 'Helvetica';
                font-size: 15px;
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
                font-size: 12px;
                padding: 2px 1px;
            }
            table {
                border-collapse: collapse;
                width: 100%;                
                margin-top: 5px;
            }
            .details td {
                text-align: center;
            }
            .details .object-payment {
                text-align: left;
                padding-left: 3px;
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
                font-size: 16px;
            }
            .total-amount {
                text-align: right;
            }
            .miscellaneus {
                font-size: 12px;
            }
            caption {
                font-weight: bold;
            }
            th {
                font-size: 10px;
                padding: 3px 1px;
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
                DESPACHO MUNICIPAL<br>
                RIF: G-20000222-1<br>
                DIRECCIÓN: AV. CARABOBO, EDIFICIO MUNICIPAL
                </p>
            </div>
            <div id="mayorLOGO">
                <img src="{{ base_path().'/public/images/logo.png' }}" height="70px" width="130px" alt="logo" />
            </div>
        </div>
        
        <div class="tables">
           <table style="text-align: center">
                <caption>REPORTE DE SOLICITUDES</caption>
                <thead>
                  <tr>
                    <th width="10%">NO. SOLICITUD</th>
                    <th width="75%">TÍTULO</th>
                    <th width="15%">CATEGORÍA</th>
                  </tr>
                </thead>
                <tbody>
                @foreach($applications as $application)
                 <tr>
                    <td>{{ $application->num }}</td> 
                    <td>{{ $application->title }}</td>   
                    <td>{{ $application->category->name }}</td>
                </tr>
                @endforeach   
             </table>
            <br>
            <div class="bill-info">
                <div class="col-bill-info">
                    FECHA: {{ $emissionDate }}
                </div>
            </div>
        </div>
    </body>
</html>
