const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');

const {Triangle, Square, Circle}= require("./shapes")
const SVG = require("./svg")
const fs = require('fs')

class CLI {
  constructor() {
    this.title = '';

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'enter text for logo',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'enter color text for logo',
        },

        {
          type: 'list',
          name: 'shapeType',
          message: 'select your shape',
          choices: ['circle', 'square', 'triangle']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'color of shape'
        },


      ])
      .then(({ shapeType, shapeColor, textColor, text }) => {
        console.log(shapeColor)
        console.log(shapeType)
       let shape
       if (shapeType === 'circle') {
        shape = new Circle()
        } else if (shapeType === 'square') {
          shape = new Square()
      } else {
        shape = new Triangle()
      }
      shape.setColor(shapeColor)
      let svg = new SVG()
      svg.setText(textColor,text)
      svg.setShape(shape)
       return writeFile(
        "logo.svg", svg.render()

        
      );
    })
      
      
      .then(() => console.log('logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
 
  }

module.exports = CLI;

