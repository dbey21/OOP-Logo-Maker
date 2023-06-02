class SVG{
    constructor(){
        this.textEl=""
        this.svgEl=""
        
    }
    setText(color,txt){
        this.textEl= `<text x="150" y="100" fill="${color}" font-size="40" text-achor="middle">${txt}</text>`

    }
    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.svgEl}${this.textEl}</svg>`
    }
    setShape(shape){
        this.svgEl=shape.render()
    }
}
module.exports= SVG 