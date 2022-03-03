   class Retangulo{
   constructor(largura, altura){
      this.largura= largura;
      this.altura= altura;
  }

     calcularArea(){
       
     return this.largura * this.altura
 
     }  


     area(){

    return this.calcularArea()

       
     }

 }



let retangulo = new Retangulo(8, 4);

let retangulo2 = new Retangulo(9, 7);


retangulo.calcularArea()
retangulo2.calcularArea()

console.log(retangulo.area()+"cm²")
console.log(retangulo2.area()+"cm²")
