//1-misol
/**function massiv() {
    
    let m=[];
    let x=+prompt("elementlar soni");
    let y=+prompt("kerakli element");
    let index=0;
    for (let j = 1; j <= x; j++) {
        let elementlar=+prompt("elementlar")
        m.push(elementlar)
        if (elementlar==y) {
            index+=(j-1);
        }
    }
    
    let n=[];
    for (const value of m) {
        
       if (value==y) {
       console.log(index*index);
       }
        
    }
}
massiv() */

//2-misol
/**function arrs() {
    let arr1 = [1, 2, 3, 4];
    let arr2 = [5, 6, 7, 8];
    let arr3 = [9, 10, 11, 12];
    const allArr = arr2.concat(arr3, arr1);
    return allArr;

}
console.log(arrs()); */

//3-misol
/**
 * const ages = [3, 10, 18, 20];

document.innerHTML = ages.find(checkAge);

function checkAge(age) {
  return age > 5;
}
console.log(age);
 */

//4-misol
/**function juft() {
    
    let m=[];
    let x=+prompt("elementlar soni")
    let hisob=0;
    for (let j = 1; j <= x; j++) {
        let elementlar=+prompt("elementlar")
        m.push(elementlar)
        if (m[j-1]%2==1) {
            hisob++
        }
    }
    
    
    console.log(hisob);
}
juft()  */

//5-misol
/**const arr = ["apple", "banana", "orange"];
const oxirgiHarf = [];

arr.forEach(arrs=> {
  const oxirgi = arrs[arrs.length - 1];
  oxirgiHarf.push(oxirgi);
});

console.log(oxirgiHarf);  */

//6-misol
function massiv() {
    
    let m=[];
    let x=+prompt("elementlar soni");
    for (let j = 1; j <= x; j++) {
        let elementlar=+prompt("elementlar")
        m.push(elementlar)
        
    }
    
    let n=[];
    for (const value of m) {
        let hisob=0;
        let hisob1=0;

       for (let i = 1; i <= value; i++) {
        if (value%i==0) {
            hisob+=1
        }
        
        
       }
        if (hisob==2) {
            hisob1+=1;
        }
    }
    console.log(hisob1);
}
massiv()