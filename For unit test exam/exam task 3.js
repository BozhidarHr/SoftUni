const bookSelection = {
    isGenreSuitable(genre, age) {
        if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
            return `Books with ${genre} genre are not suitable for kids at ${age} age`;
        } else {
            return `Those books are suitable`;
        }
    },
    isItAffordable(price, budget) {
        if (typeof price !== "number" || typeof budget !== "number") {
            throw new Error("Invalid input");
        }

        let result = budget - price;

        if (result < 0) {
            return "You don't have enough money";
        } else {
            return `Book bought. You have ${result}$ left`;
        }
    },
    suitableTitles(array, wantedGenre) {
        let resultArr = [];

        if (!Array.isArray(array) || typeof wantedGenre !== "string") {
            throw new Error("Invalid input");
        }
        array.map((obj) => {
            if (obj.genre === wantedGenre) {
                resultArr.push(obj.title);
            }
        });
        return resultArr;
    },
};






const { expect } = require('chai')
//TESTS
describe("Tests Garden", () => {
    describe("IsGenreSuitable", () => {
        it("underage watch movies", () => {
            expect(bookSelection.isGenreSuitable("Horror", 10)).to.equal("Books with Horror genre are not suitable for kids at 10 age");
        })
        it("underage watch movies", () => {
            expect(bookSelection.isGenreSuitable("Thriller", 10)).to.equal("Books with Thriller genre are not suitable for kids at 10 age");
        })
        it("underage watch movies", () => {
            expect(bookSelection.isGenreSuitable("Thriller", 17)).to.equal(`Those books are suitable`);
        })
        it("underage watch movies", () => {
            expect(bookSelection.isGenreSuitable("Thriler", 11)).to.equal(`Those books are suitable`);
        })

    })
    describe("isitaffordable", () => {
        it("underage watch movies", () => {
            expect(bookSelection.isItAffordable(10, 20)).to.equal(`Book bought. You have ${10}$ left`);
        })
        it("underage watch movies", () => {
            expect(bookSelection.isItAffordable(10, 5)).to.equal("You don't have enough money");
        })
        it("underage watch movies", () => {
            expect(() => bookSelection.isItAffordable('b', "b")).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => bookSelection.isItAffordable(5, "b")).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => bookSelection.isItAffordable(5, "5")).to.throw("Invalid input")
        })
    })
    describe("suitabletitle", () => {
        it("underage watch movies", () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "comedy" }, { title: "alabala", genre: "comedy" }], "comedy")).to.deep.equal(["The Da Vinci Code", "alabala"]);
        })
        it("underage watch movies", () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "coedy" }, { title: "alabala", genre: "comedy" }], "comedy")).to.deep.equal(["alabala"]);
        })
        it("underage watch movies", () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "comedy" }, { title: "alabala", genre: "comedy" }], "comeddy")).to.deep.equal([]);
        })
        it("underage watch movies", () => {
            expect(() => bookSelection.suitableTitles(5, "comedy")).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => bookSelection.suitableTitles({ title: "The Da Vinci Code", genre: "comedy" }, { title: "alabala", genre: "comedy" }, 5)).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => bookSelection.suitableTitles(['a','b'], 5)).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => bookSelection.suitableTitles([1,2], 5)).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "comedy" }, { title: "alabala", genre: "comedy" }], [1,2])).to.throw("Invalid input")
        })
    })
})
