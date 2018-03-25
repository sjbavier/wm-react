const fs = require('fs');
const readImgDir = require('./readImgDir');

const directory = process.argv[2];
const pathToImg = "../../img/gallery/" + directory + "/";
const importArray = [];
const imgElementArray = [];


const outputFile = "../../components/photos/" + directory + ".js";

function firstToUpper(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateImgList(){
    readImgDir(pathToImg, function(imgList){

        // launch the function that generates the array of import image from ../ strings
        generateImport(imgList);
    });
}

function generateImport(imgList){
    console.log(imgList);
    for( var i = 0; i < imgList.length; i++ ){
        importArray[i] = "import image" + i + " from \"" + pathToImg + imgList[i] + "\""; 
        console.log(importArray[i]);
        imgElementArray[i] = "<img key={ " + "image" + i + " } src={ " + "image" + i + " } alt={ " + "image" + i + " } />";
        console.log(imgElementArray[i]);
    }
}

const className = firstToUpper(directory);

// generate the import image Array
const imgImportArray = generateImgList(directory);

const reactText1 = "import React, { Component } from 'react'\n\n";
const reactText2 = importArray.join("\n");
const reactText3 = "\n\nclass " +  className + " extends Component { \n\nrender(){\n return (\n<div className=\"scrollBox\">\n";
const reactText4 = imgElementArray.join("\n");
const reactText5 = "</div>\n)\n}\n\n}\n\nexport default " + className;

const textArray = [ reactText1, reactText2, reactText3, reactText4, reactText5 ];
const fullText = textArray.join("");


fs.writeFile( outputFile, fullText, function(err){
    if(err) { console.log(err); }
    else { console.log("file has been written"); }
    
});
