const companyAdministration = {

    hiringEmployee(name, position, yearsExperience) {
        if (position == "Programmer") {
            if (yearsExperience >= 3) {
                return `${name} was successfully hired for the position ${position}.`;
            } else {
                return `${name} is not approved for this position.`;
            }
        }
        throw new Error(`We are not looking for workers for this position.`);
    },
    calculateSalary(hours) {

        let payPerHour = 15;
        let totalAmount = payPerHour * hours;

        if (typeof hours !== "number" || hours < 0) {
            throw new Error("Invalid hours");
        } else if (hours > 160) {
            totalAmount += 1000;
        }
        return totalAmount;
    },
    firedEmployee(employees, index) {

        let result = [];

        if (!Array.isArray(employees) || !Number.isInteger(index) || index < 0 || index >= employees.length) {
            throw new Error("Invalid input");
        }
        for (let i = 0; i < employees.length; i++) {
            if (i !== index) {
                result.push(employees[i]);
            }
        }
        return result.join(", ");
    }

}

const { expect } = require('chai')

describe('company', () => {
    describe('hiring', () => {
        it("input string", () => {
            expect(companyAdministration.hiringEmployee("john", "Programmer", 5)).to.be.equal(`john was successfully hired for the position Programmer.`);
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.hiringEmployee("john", "John", 3)).to.throw(`We are not looking for workers for this position.`)
        })
        it("input string", () => {
            expect(companyAdministration.hiringEmployee("john", "Programmer", 2)).to.be.equal(`john is not approved for this position.`);
        })
        it("input string", () => {
            expect(companyAdministration.hiringEmployee("john", "Programmer", 3)).to.be.equal(`john was successfully hired for the position Programmer.`);
        })
    })
    describe('salary', () => {
        it("input string", () => {
            expect(companyAdministration.calculateSalary(5)).to.be.equal(75);
        })
        it("input string", () => {
            expect(companyAdministration.calculateSalary(0)).to.be.equal(0);
        })
        it("input string", () => {
            expect(companyAdministration.calculateSalary(200)).to.be.equal((200*15)+1000);
        })
        it("input string", () => {
            expect(companyAdministration.calculateSalary(400)).to.be.equal((400*15)+1000);
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.calculateSalary("5")).to.throw(`Invalid hours`)
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.calculateSalary(-5)).to.throw(`Invalid hours`)
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.calculateSalary("as")).to.throw(`Invalid hours`)
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.calculateSalary()).to.throw(`Invalid hours`)
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.calculateSalary([1,3])).to.throw(`Invalid hours`)
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.calculateSalary([])).to.throw(`Invalid hours`)
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.calculateSalary(["5","as"])).to.throw(`Invalid hours`)
        })
    })
    describe('employee', () => {
        it("input string", () => {
            expect(companyAdministration.firedEmployee(["Peter", "ivan", "jhon"],2)).to.be.equal("Peter, ivan");
        })
        it("input string", () => {
            expect(companyAdministration.firedEmployee(["Peter", "ivan", "jhon"],0)).to.be.equal("ivan, jhon");
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.firedEmployee(["Peter", "ivan", "jhon"],-1)).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.firedEmployee(["Peter", "ivan", "jhon"],3)).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.firedEmployee(["Peter", "ivan", "jhon"],"4")).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.firedEmployee("Peter",3)).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.firedEmployee(4,3)).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.firedEmployee({"Peter":"ivan", "jhon":"3"},3)).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.firedEmployee({"Peter":"ivan", "jhon":"3"},)).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.firedEmployee([],3)).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.firedEmployee()).to.throw("Invalid input")
        })
        it("underage watch movies", () => {
            expect(() => companyAdministration.firedEmployee([],[3,5])).to.throw("Invalid input")
        })
})  
})