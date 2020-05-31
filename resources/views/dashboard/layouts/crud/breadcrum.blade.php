<ol class="breadcrumb bc-3">
    <li>
        <a href="{{ url('/dashboard') }}">
            <i class="fa-home"></i>SOAP
        </a> >
        <strong>{{ $config['moduleLabel'] }}</strong>
    </li>
    <!-- sublevel -->
    @if($breadcrumAction != "")
        <li class="active">
            <small>{{ $breadcrumAction }}</small>
        </li>
    @endif
</ol>

