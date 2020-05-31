<ol class="breadcrumb bc-3">
    <li>
        <a href="{{ route('dashboard') }}">
            <i class="fa-home"></i>SASI
        </a> >
        <strong>{{ $config['moduleLabel'] }}</strong>
    </li>
    <!-- sublevel -->
    @if($breadcrumbAction != "")
        <li class="active">
            <small>{{ $breadcrumbAction }}</small>
        </li>
    @endif
</ol>

