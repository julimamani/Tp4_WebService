import { Idioma } from "./idioma";

export class Translate {
    source: Idioma;
    target: Idioma;
    input: string;
    constructor(source?:Idioma,target?: Idioma, texto?: string) {
         this.source = source;
         this.target = target;
         this.input = texto;
    }

}
