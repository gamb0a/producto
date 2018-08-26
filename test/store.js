import { expect } from 'chai';
import Store from "../src/stores/store";
import ERROR from "../src/errors";

describe('Store test', () => {

    let array_of_supp = ["cat1", "cat2", "cat3", "cat4"];

    it('shouldnt be able to be instantiated without params', () => {
        let store;
        expect(() => {store = new Store }).to.throw(Error, ERROR.SUPPORTED_CATEGORIES_EMPTY);
    })
    
    it('shouldnt be able to be instantiated without an array', () => {
        let store;
        expect(() => {store = new Store("string") }).to.throw(Error, ERROR.SUPPORTED_CATEGORIES_INVALID_TYPE);
    })

    it('should be able to be instantiated with only one array of strings', () => {
        let store;
        let array_of_supp = ["cat1", "cat2", "cat3", "cat4"];
        expect(() => {store = new Store(array_of_supp) }).to.not.throw(Error);

        expect(store.getSupportedCategories()).to.be.deep.equal(array_of_supp);
        expect(store.getCategories()).to.be.deep.equal([]);
        
    })

    it('should be able to be instantiated with two arrays of strings', () => {
        let store;
        let array_of_cat = ["cat1", "cat4"];

        expect(() => {store = new Store(array_of_supp, array_of_cat) }).to.not.throw(Error);

        expect(store.getSupportedCategories()).to.be.deep.equal(array_of_supp);
        expect(store.getCategories()).to.be.deep.equal(array_of_cat);

    })

    it('categories should be a subgroup of the supported categories', () => {
        let store;
        let array_of_cat = ["cat1", "cat4"];

        expect(() => {store = new Store(array_of_supp, array_of_cat) }).to.not.throw(Error);
        
        array_of_cat = ["HOLA", "cat4"];
        expect(() => { store = new Store(array_of_supp, array_of_cat) }).to.throw(Error, ERROR.CATEGORIES_INVALID);

    })

});