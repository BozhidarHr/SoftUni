class VegetableStore {
    constructor(owner, location) {
      this.owner = owner;
      this.location = location;
      this.availableProducts = [];
    }
  
    loadingVegetables(vegetables) {
      let productsName = [];
      for (const v of vegetables) {
        let [type, quantity, price] = v.split(" ");
        quantity = Number(quantity);
        price = Number(price);
  
        let product = this.availableProducts.find((p) => p.type == type);
  
        if (product == undefined) {
          productsName.push(type);
          this.availableProducts.push({
            type,
            quantity,
            price,
          });
        } else if (product.price < price) {
          product.price = price;
          product.quantity += quantity;
        }
      }
      return `Successfully added ${productsName.join(", ")}`;
    }
  
    buyingVegetables(selectedProducts) {
      let totalPrice = 0;
  
      for (let p of selectedProducts) {
        let [type, quantity] = p.split(" ");
        quantity = Number(quantity);
  
        let product = this.availableProducts.find((p) => p.type === type);
  
        if (!product) {
          throw new Error(
            `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
              2
            )}.`
          );
        }
        if (quantity > product.quantity) {
          throw new Error(
            `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
              2
            )}.`
          );
        }
        let price = product.price * quantity;
        product.quantity -= quantity;
        totalPrice += price;
      }
  
      return `Great choice! You must pay the following amount $${totalPrice.toFixed(
        2
      )}.`;
    }
  
    rottingVegetable(type, quantity) {
      quantity = Number(quantity);
  
      let product = this.availableProducts.find((p) => p.type === type);
  
      if (!product) {
        throw new Error(`${type} is not available in the store.`);
      }
  
      if (quantity > product.quantity) {
        product.quantity = 0;
        return `The entire quantity of the ${type} has been removed.`;
      }
      product.quantity -= quantity;
  
      return `Some quantity of the ${type} has been removed.`;
    }
  
    revision() {
      let resultArr = ["Available vegetables:"];
      this.availableProducts.sort((a, b) => a.price - b.price);
      this.availableProducts.forEach((v) =>
        resultArr.push(`${v.type}-${v.quantity}-$${v.price}`)
      );
      resultArr.push(
        `The owner of the store is ${this.owner}, and the location is ${this.location}.`
      );
  
      return resultArr.join("\n");
    }
  }let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
  console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
  console.log(vegStore.rottingVegetable("Okra", 1));
  console.log(vegStore.rottingVegetable("Okra", 2.5));
  console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
  console.log(vegStore.revision());
  
  