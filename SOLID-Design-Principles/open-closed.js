/*
    *** Open-Closed Principles ***
        => Open-closed states that programe open for extension but closed for the modification.

        => Extension: It's mean inheritants. We mean that a class inherits from another class and automatically acquires some of its fields,some of its members, and the additional functionality.

        => Modification: I am modifying some class, which has already tested, deployed somewhere,
        i am making changed to do it.''' This is considered not as good as actually extension '''

*/

const Color = Object.freeze({
    red: "red",
    green: "green",
    blue: "blue",
});

const Size = Object.freeze({
    small: "small",
    medium: "medium",
    large: "large",
});

// make a product class

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

// make a product fileter class
class ProductFilter {
    filterByColor(products, color) {
        return products.filter((product) => product.color === color);
    }
    // client say create a filter method for Size
    filterBySize(products, size) {
        return products.filter((product) => product.size === size);
    }
    // client say create a filter method for Color and Size
    filterByColorAndSize(products, color, size) {
        return products.filter(
            (product) => product.color === color && product.size === size
        );
    }

    // another time say another filter, so its break down condition of open-closed.
    // beacuse closed for modification
    // filterByColorAndSize, filterBySize, it is modification, because,same class which has already tested and deployed.
}

const shirt = new Product("shirt", Color.blue, Size.small);
const apple = new Product("apple", Color.green, Size.medium);
const house = new Product("house", Color.red, Size.large);

const products = [shirt, apple, house];
let productFilter = new ProductFilter();

console.log(`Green Product (old):`);
for (let p of productFilter.filterByColor(products, Color.green)) {
    console.log(`* ${p.name} is green`);
}
let a = productFilter.filterByColor(products, "green");
console.log(console.log(`* ${a[0].name} is green`));

// ↑↑↑ BEFORE

// ↓↓↓ AFTER

// general interface for a specification.
// for color class
class ColorSpecification {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(item) {
        return item.color === this.color;
    }
}
// for size specification class
class SizeSpecification {
    constructor(size) {
        this.size = size;
    }
    isSatisfied(item) {
        return item.size === this.size;
    }
}

class CombinatorSpecification {
    constructor(...specification) {
        this.specification = specification;
    }
    isSatisfied(item) {
        return this.specification.every((x) => x.isSatisfied(item));
    }
}

// create a filter
class BetterFilter {
    filter(products, specification) {
        return products.filter((product) => specification.isSatisfied(product));
    }
}

// make instance for better filter
const betterFilter = new BetterFilter();

console.log(`Green Products (new): `);
// find color by filter
for (let p of betterFilter.filter(
    products,
    new ColorSpecification(Color.green)
)) {
    console.log(` * ${p.name} is green`);
}
// find size by filter
for (let p of betterFilter.filter(
    products,
    new SizeSpecification(Size.large)
)) {
    console.log(` * ${p.name} is large `);
}

// make a instance for CombinatorSpecification
const combinatorSpecification = new CombinatorSpecification(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.medium)
);

// console.log(`medium and green products: `);
for (let p of betterFilter.filter(products, combinatorSpecification)) {
    console.log(` * ${p.name} is medium and green`);
}
