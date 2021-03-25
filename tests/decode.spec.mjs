import {describe, it} from "mocha";
import {expect} from "chai";
import {decode} from "../sources/decode.mjs";

describe("decode", () => {
  it("should be a function accepting two parameters", () => {
    expect(decode).to.be.a("function").of.lengthOf(2);
  });

  it("should throw if the schema is missing", () => {
    expect(() => decode()).to.throw(Error, "schema is missing in decode(schema, data)");
  });

  it("should throw if the schema is neither a string, an array or an object", () => {
    expect(() => decode(123, 123)).to.throw(Error, "schema is neither a string, an array or an object in decode(schema, data), number provided");
  });

  it("should decode the string", () => {
    expect(decode("string", "Hello")).to.be.true;
  });

  it("should not decode the string", () => {
    expect(decode("string", 123)).to.be.false;
  });

  it("should decode the string array", () => {
    expect(decode(["string"], ["hello", "world"])).to.be.true;
  });

  it("should not decode the string array", () => {
    expect(decode(["string"], ["hello", 123])).to.be.false;
  });

  it("should decode the plain object", () => {
    expect(decode({name: "string", age: "number"}, {name: "john", age: 42})).to.be.true;
  });

  it("should decode the plain object with extra properties", () => {
    expect(decode({name: "string", age: "number"}, {name: "john", age: 42, admin: false})).to.be.true;
  });

  it("should not decode the plain object", () => {
    expect(decode({name: "string", age: "number"}, {name: "john", age: "42"})).to.be.false;
  });

  it("should decode the plain object array", () => {
    expect(decode([{name: "string", age: "number"}], [{name: "john", age: 42}, {name: "jane", age: 24}])).to.be.true;
  });

  it("should not decode the plain object array", () => {
    expect(decode([{name: "string", age: "number"}], [{name: "john", age: 42}, {name: "jane", age: "24"}])).to.be.false;
  });
});
