Package.describe({
    summary: "The Cerulean Theme for Bootstrap"
});

Package.on_use(function(api, where){
    api.use('less', 'client');
    api.add_files('js/bootstrap.js', 'client');

    api.add_files('img/glyphicons-halflings.png', 'client');
    api.add_files('img/glyphicons-halflings-white.png', 'client');

    api.add_files('less/bootstrap-full.less', 'client');
    api.add_files('less/variables.importless', 'client');
    api.add_files('less/cerulean.less', 'client');
});
