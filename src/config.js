// In real applications, you should not transpile code in the browser. You can see how to create your own application with Angular and DevExtreme here:
// https://github.com/DevExpress/devextreme-angular/blob/master/README.md 

System.config({
    transpiler: 'ts',
    typescriptOptions: {
        module: "commonjs",
        emitDecoratorMetadata: true,
        experimentalDecorators: true
    },
    meta: {
        'typescript': {
            "exports": "ts"
        }
    },
    paths: {
        'npm:': 'https://unpkg.com/'
    },
    map: {
        'ts': 'npm:plugin-typescript@7.0.6/lib/plugin.js',
        'typescript': 'npm:typescript@2.2.2/lib/typescript.js',

        '@angular/core': 'npm:@angular/core@4.1.0/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common@4.1.0/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler@4.1.0/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser@4.1.0/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@4.1.0/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http@4.1.0/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router@4.1.0/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms@4.1.0/bundles/forms.umd.js',

        'rxjs': 'npm:rxjs@5.3.1',

        'devextreme': 'npm:devextreme@17.1',
        // 'jquery': 'npm:jquery@3.1.1/dist/jquery.min.js',
        'jszip': 'npm:jszip@3.1.3/dist/jszip.min.js',
        'devextreme-angular': 'npm:devextreme-angular@17.1'
    },
    packages: {
        'app': {
            main: './app.component.ts',
            defaultExtension: 'ts'
        },
        'devextreme': {
            defaultExtension: 'js'
        },
        'devextreme-angular': {
            main: 'index.js',
            defaultExtension: 'js'
        }
    }
});