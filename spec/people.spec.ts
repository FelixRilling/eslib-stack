import { betty, steve } from "../src/main";

describe("People", () => {
    it("Betty", () => {
        expect(betty.say("Hi!")).toBe("Betty(20): Hi!");
    });

    it("Steve", () => {
        expect(steve.say()).toBe("Steve(19): Hello!");
    });
});
