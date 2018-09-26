
var fs = require('fs');
var Mustache = require('Mustache');

var writeTestCase = function (template,filename, lines) {
    console.log(filename);
    var testCase = { "stooges": [] };

    // var whitespace = {
    //     whitespace: true
    // };
    // var output = Mustache.render("{{#stooges}}<b>{{{src}}}</b> - <b>{{{desc}}}</b>{{/stooges}}", testCase, whitespace);

    var testname1= filename;
    var js = '/// <reference types="Cypress" />\n' +
        "context('Actions', () => {\n\n";

            
    lines.forEach((line, index) => {

        var parts = line.split(',');
        js = js + "\tit('" + testname1 + index + "', () => {\n";
        js = js + "\t\tcy.visit('" + parts[0] + "');\n";
        js = js + "\t\tcy.matchImageSnapshot('" + testname1 + index + "');\n";
        js = js + "\t})\n\n";
        js = js + "\tit('" + testname1 + index + "_b', () => {\n";
        js = js + "\t\tcy.visit('" + parts[1].trim() + "');\n";
        js = js + "\t\tcy.matchImageSnapshot('" + testname1 + index + "');\n";
        js = js + "\t})\n\n";
    });

    js=js+"})\n";

    fs.writeFile("./cypress/integration/generac/"+filename, js, function (err) {
        if (err) throw err;        
    });



}

fs.readFile('generac-honeywell.csv', 'utf8', function (err, contents) {
    fs.readFile('template.js','utf8',function(err, template)    {
        var lines = contents.split('\n');

        console.log("Line count:" + lines.length);
        var i = 0;
        var testCaseIndex=0;
        var testCaseLines=[];
        lines.forEach((line, index) => {
            //console.log(index + " " + line);
            i++;
            testCaseLines.push(line);
            if (i %5 ===0)
            {               
                testCaseIndex++;                
                writeTestCase(template, "test"+testCaseIndex+".js",testCaseLines);
                testCaseLines=[];
            }
        });
    });
});



  console.log('hello world');