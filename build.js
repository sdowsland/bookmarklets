const fs = require('fs');

const inputFile = process.argv[2];

if (inputFile) {
    const bookmarklet = require("bookmarklet");

    let inputPath = 'src/' + inputFile + '.js'
    console.log("File read from: " + inputPath);

    fs.readFile(inputPath, 'utf8', (err, data) => {
        if (err) console.error(err)

        parsedData = bookmarklet.parseFile(data);
        
        let output = bookmarklet.convert(parsedData.code, parsedData.options);

        let outputPath = inputPath.replace("src", "dist").replace(".js", ".txt");

        fs.writeFileSync(outputPath, output);

        console.log("File written to: " + outputPath)
    })
} else {
    console.error("Please add argument in format 'node build.js script-file'")
}





