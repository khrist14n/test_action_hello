// npm install @actions/core --save-dev

const core = require('@actions/core')
 
const inputText = core.getInput('input_text');
 
let outputText = "";

for(var i=0;i<100;i++){
    outputText = outputText + "*";
}
outputText = outputText + "\n";
outputText = outputText + inputText;
outputText = outputText + "\n";
for(var i=0;i<100;i++){
    outputText = outputText + "*";
}
core.setOutput('output_text', outputText)