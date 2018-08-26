import ERROR from '../errors';

export default class Store {
    /**
     * @param {String[]} categories Supportes categories
     */
    constructor(supported_categories, categories) {
        
        if (supported_categories === undefined)
            throw new Error(ERROR.SUPPORTED_CATEGORIES_EMPTY);
        
        if (!Array.isArray(supported_categories))
            throw new Error(ERROR.SUPPORTED_CATEGORIES_INVALID_TYPE);
            
            if (categories === undefined) 
            categories = []
            
        categories.forEach(cat => {
            if (!supported_categories.includes(cat))
                throw new Error(ERROR.CATEGORIES_INVALID);
        });

        this.supported_categories = supported_categories;
        this.categories = categories
    }

    getSupportedCategories() {
        return this.supported_categories;
    }

    getCategories() {
        return this.categories;
    }
}