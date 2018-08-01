import {URL} from 'url';
import parseDomain from 'parse-domain';

export default class Scrap {
    
    constructor() {
        this._url = null;
        this._domains = ["paris", "ripley", "falabella", "sodimac", "easy"];
    }

    setUrl(url) {
        if (!this._isURL(url)) {
            throw Error("Debe ingresar una URL válida");
        }

        this._url = new URL(url);

        let domain = parseDomain(this._url.hostname).domain;
        if (!this._domains.includes(domain)) {
            throw Error("Tienda no soportada: " + this._url.hostname);
        }
    }
    
    getProduct() {
        if (this._url == null) {
            throw Error("Debe ingresar una URL primero");
        }
    }

    _isURL(str) {

        if (typeof str !== 'string') {
            return false;
        }

        let urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
        let url = new RegExp(urlRegex, 'i');
        return str.length < 2083 && url.test(str);
   }
}