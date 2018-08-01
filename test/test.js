import { expect } from 'chai';
import Scrap from "../src/Scrap";

describe('Scrap.js test', () => {
    let scrap = null;
    
    it('Debe poder instanciarse', () => {
        expect(() => { scrap = new Scrap }).to.not.throw(Error) ;
    })
    
    it('No debe aceptar una URL válida', () => {
        let url = "google.cl";

        expect(() => { scrap.setUrl(null)   }).to.throw(Error, /Debe ingresar una URL válida/) ;
        expect(() => { scrap.setUrl()       }).to.throw(Error, /Debe ingresar una URL válida/) ;
        expect(() => { scrap.setUrl(1)      }).to.throw(Error, /Debe ingresar una URL válida/) ;
        expect(() => { scrap.setUrl('a')    }).to.throw(Error, /Debe ingresar una URL válida/) ;
        expect(() => { scrap.setUrl(url)    }).to.throw(Error, /Debe ingresar una URL válida/) ;
    })

    it('No debe aceptar una tienda no soportada', () => {
        let test_url = ["http://doggis.com", "http://toto.com", "http://head.com"];
        test_url.forEach(url => expect(() => { scrap.setUrl(url) }).to.throw(Error, /Tienda no soportada/));
    })

    it('Debe aceptar una URL válida', () => {
        let test_url = ["http://falabella.com", "https://paris.cl", "https://www.ripley.cl", "https://site.sodimac.cl", "https://www.easy.cl"];
        test_url.forEach(url => expect(() => { scrap.setUrl(url) }).to.not.throw(Error));
    })

    it('Debe retornar un error al obtener un producto sin su URL', () => {
        scrap = new Scrap;
        expect(() => { scrap.getProduct() }).to.throw(Error, /Debe ingresar una URL primero/)
    })

})