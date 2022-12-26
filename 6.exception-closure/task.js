function parseCount(value) {
if (isNaN(Number.parseFloat(value))) {
    throw new Error("Невалидное значение");
 } else {
    return Number.parseFloat(value);
};

}

function validateCount(value) {
   try {
    return parseCount(value);
   } catch (error) {
    return error;
   }
}

class Triangle {
   constructor(firstSide, secondSide, thirdSide){
      if (firstSide + secondSide < thirdSide || 
         secondSide + thirdSide < firstSide || 
         firstSide + thirdSide < secondSide) {
      throw new Error("Треугольник с такими сторонами не существует");
      }
   this.firstSide = firstSide;
   this.secondSide = secondSide;
   this.thirdSide = thirdSide;
   }

   get perimeter() {
      return this.firstSide + this.secondSide + this.thirdSide;
   }

   get area() {
      let halfP = (this.firstSide + this.secondSide + this.thirdSide) / 2;
      let areaCount = Math.sqrt(halfP * (halfP - this.firstSide) * (halfP - this.secondSide) * (halfP - this.thirdSide));
      return Math.round(areaCount * 1000) / 1000;
   }
}


   function getTriangle(a, b, c) {
      try { 
        return new Triangle(a, b, c);
        }
      catch(error) {
         let triangle = {
            get perimeter() {
               return "Ошибка! Треугольник не существует";
            },
            get area() {
               return "Ошибка! Треугольник не существует";
            }
         }
         return triangle;
      }
   }