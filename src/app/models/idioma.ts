export class Idioma {
    private _cod: string;
    img: string;
    nombre: string;
    set cod(cod: string) {
        this.cod=cod;
    }   
    get cod(){
        return this.cod;
    }
    constructor(_cod?: string,img?: string, nombre?: string) {
         this._cod="fr";
         this.img = "https://www.countryflags.io/"+this._cod+"/shiny/16.png";
         this.nombre = "francia"
    }

}
