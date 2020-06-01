@extends('dashboard.layouts.template')

@section('title', 'Solicitudes pendientes')

@section('content')
<div class="row">
    <table id="datatables" class="table table-bordered datatable">
        <thead>
            <tr>
                <th>Usuario</th>
                <th>Dirección</th>
                <th>Categoría</th>
                <th>Acciones</th>
            </tr>
        </thead>
    </table>
</div>
@endsection

@push('css')
<link rel='stylesheet' src="{{ asset('dash/assets/js/datatables/datatables.css') }}">
@endpush

@push('js')
<script src="{{ asset('dash/assets/js/datatables/datatables.js') }}"></script>
<script>
    const tableInit = $('#datatables').DataTable({
        language: {
            url: "{{ asset('dash/assets/js/datatables/spanish.json') }}"
        },
        responsive: true,
        processing: true,
        serverSide: true,
        lengthChange: true,
        deferRender: true,
        autoWidth: true,
        scrollX: true,
        lengthMenu: [ 10, 50, 100, 500 ],
        ajax: {
            url: '{{ route("pending-applications") }}'
        },
        columns: [
            { data: 'user.full_name' },
            { data: 'user.address' },
            { data: 'category.name' },
        ],
        createdRow: function(r, d, i) {
            tr  = '<td width="25%" style="vertical-align:middle;" class="text-left">'+ (d["user"] ? d["user"].full_name : "") +'</td>'
            tr += '<td width="25%" style="vertical-align:middle;" class="text-left">'+ (d["user"] ? d["user"].address : "") +'</td>'
            tr += '<td width="25%" style="vertical-align:middle;" class="text-left">'+ (d["category"] ? d["category"].name : "") +'</td>'
            tr += '<td width="25%" style="vertical-align:middle;">'
            tr += 	'<div class="pull-right">'
            tr += 		'<a href="/applications/'+d['id']+'/approve" class="btn btn-xs btn-info" style="margin-left:3px;">'
            tr += 			'<i class="fa fa-pencil"></i>'
            tr += 		'</a>'
            tr += 	'</div>'
            tr += '</td>'
            $(r).html(tr)
        }
    });
</script>
@endpush
