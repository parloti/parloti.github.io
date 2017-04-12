var cdnizerFactory = require("cdnizer"),
    cdnizer = cdnizerFactory({
        defaultCDNBase: "//my.cdn.host/base",
        allowRev: true,
        allowMin: true,
        files: [

            // This file is on the default CDN, and will replaced with //my.cdn.host/base/js/app.js
            'js/app.js',

            // On Google's public CDN
            {
                file: 'node_modules/jquery/dist/jquery.min.js',
                package: 'jquery',
                test: 'window.jquery',
                cdn: '//ajax.googleapis.com/ajax/libs/jquery/${ version }/jquery.min.js'
            },

            // On Firebase's public CDN
            {
                file: 'vendor/firebase/firebase.js',
                test: 'window.Firebase',
                cdn: '//cdn.firebase.com/v0/firebase.js'
            }
        ]
    });

// Load the file
var contents = fs.readFileSync('index.html', 'utf8');
fs.writeFileSync("./preferences.json", contents);
// Replace the file's contents
contents = cdnizer(contents);