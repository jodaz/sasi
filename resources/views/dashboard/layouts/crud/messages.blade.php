<div class="clearfix"></div>

<!-- alert operation success -->
@if (Session::get('success'))
    <div class="alert alert-success alert-block" style="margin-top:var(--m-top-std);">

        <!-- close alert -->
        <button type="button" class="close" data-dismiss="alert">×</button>

        <!-- message success -->
        <strong>{{ Session::get('success') }}</strong>
    </div>
@endif

<!-- alert operation error -->
@if (Session::get('error'))
    <div class="alert alert-danger alert-block" style="margin-top:var(--m-top-std);">

        <!-- close alert -->
        <button type="button" class="close" data-dismiss="alert">×</button>

        <!-- message error -->
        <strong>{{ Session::get('error') }}</strong>
    </div>
@endif

<!-- alert errors about a form -->
@if ($errors->any())
    <div class="alert alert-danger alert-block" style="margin-top:var(--m-top-std);">

        <!-- close alert -->
        <button type="button" class="close" data-dismiss="alert">×</button>

        <!-- message error -->
        @foreach ($errors->all() as $error)
            <strong><p style="margin-bottom:0;">{{ $error }}</p></strong>
        @endforeach
    </div>
@endif
