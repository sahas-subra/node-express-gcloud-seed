'use strict';

import HashMap from 'hashmap';
const _secrets={
    "ORD":"Chicago",
    "MAS":"Chennai"
};
export default class Secrets{
    constructor(){
        this.map = new HashMap();
        this.secrets = _secrets;
    }
    get secrets(){
        return this.map;
    }
    set secrets(_secret){
        for(let prop in _secret){
            this.map.set(prop,_secret[prop]);
        }
    }
    getMySecret(key){
        return this.map.get(key);
    }
}