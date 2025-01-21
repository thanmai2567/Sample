function updateproductinfo(product,discount,instock){
   const {id,name}=product
   return {...{id,name},discount,instock}

}
const product = {id: 101, name: "Laptop", price: 1000, category: "Electronics"}
const update=updateproductinfo(product,20,false);
console.log(update)

const product1= {id: 101, name: "ipad", price: 10000, category: "Electronics"}
const updateproduct=updateproductinfo(product1,20,true);
console.log(updateproduct)