export class Gato {
    public id : string;
    public nome : string;
    public data_nasc: string; //data_nasc
    public raca: string; //raca
    public sexo: string;
    public comida_fav: string;
    
    constructor(obj?: Partial<Gato>) {
        if (obj) {
            this.id = obj.id
            this.nome = obj.nome
            this.data_nasc = obj.data_nasc
            this.raca = obj.raca
            this.sexo = obj.sexo
            this.comida_fav = obj.comida_fav
         }
    }

    toFirestore() {
        const arvore =  {
                    id : this.id,
                    nome : this.nome,
                    data_nasc : this.data_nasc,
                    raca : this.raca,
                    sexo : this.sexo,
                    comida_fav: this.comida_fav
         }
         return arvore
    }

   
    toString() {
        const Objeto = `{
            "id": "${this.id}",
            "nome": "${this.nome}",
            "data_nasc": "${this.data_nasc}",
            "raca": "${this.raca}",
            "sexo": "${this.sexo}",
            "comida_fav": "${this.comida_fav}"
        }`
        return Objeto
    }
};