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
        imgElementArray[i] = "<img key={ " + "image" + i + " } src={ " + "image" + i + " } alt={ " + "image" + i + " } onClick={ this.click } />";
        console.log(imgElementArray[i]);
    }
}

const className = firstToUpper(directory);

// generate the import image Array
const imgImportArray = generateImgList(directory);

const reactText1 = "import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { connect } from 'react-redux'\n\nimport { selectImage } from './actions'\n\n";
const reactText2 = importArray.join("\n");
const reactText3 = "\n\nclass " +  className + " extends Component { \n\n   componentDidMount(){\n      this.props.selectImage( image0 )\n  }\n\n   static propTypes = { \n        click: PropTypes.func,\n        selectImage: PropTypes.func\n  }\n\n     click = ( clickEvent ) => { \n        clickEvent.stopPropagation()\n      clickEvent.preventDefault()\n       this.props.selectImage( clickEvent.target.getAttribute('src') )\n }\n\nrender(){\n const { selectImage } = this.props \n return (\n<div className=\"scrollBox\">\n";
const reactText4 = imgElementArray.join("\n");
const reactText5 = "\n</div>\n)\n}\n\n}\n\nconst mapStateToProps = state => ({\nphotos: state.photos,\n})\nconst connected = connect( mapStateToProps, { selectImage })( " + className + " )\nexport default connected";
const reactText6 = "\n\n// *** this file was generated using the /lib/utilities/generatePhotosJS.js tool ***"

const textArray = [ reactText1, reactText2, reactText3, reactText4, reactText5, reactText6 ];
const fullText = textArray.join("");


fs.writeFile( outputFile, fullText, function(err){
    if(err) { console.log(err); }
    else { console.log("file has been written"); }
    
});
