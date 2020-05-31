@extends('dashboard.layouts.template')

@section('title', 'Comunidades')

@section('content')
<div class="row">
    <table id="datatables" class="table table-bordered datatable">
        <thead>
            <tr>
                <th>Nombre</th>
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
            url: '{{ route("communities.index") }}'
        },
        columns: [
            { data: 'name' }
        ],
        createdRow: function(r, d, i) {
	      	tr = '<td width="100" style="vertical-align:middle;" class="text-left">'+ (d["name"] ? d["name"] : "") +'</td>'
            $(r).html(tr)
        }
    });
</script>
@endpush
