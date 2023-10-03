export class Papagaio {
    public id : string;
    public nome : string;
    public sexo: string; //tamanho
    public idioma: string; //nome_cientifico
    public raca : string;
    
    constructor(obj?: Partial<Papagaio>) {
        if (obj) {
            this.id = obj.id
            this.nome = obj.nome
            this.raca = obj.raca
            this.sexo = obj.sexo
            this.idioma = obj.idioma
         }
    }

    toFirestore() {
        const papagaio =  {
                    id : this.id,
                    nome : this.nome,
                    raca : this.raca,
                    sexo : this.sexo,
                    idioma : this.idioma
         }
         return papagaio
    }

   
    toString() {
        const Objeto = `{
            "id": "${this.id}",
            "nome": "${this.nome}",
            "raca": "${this.raca}",
            "sexo": "${this.sexo}",
            "idioma": "${this.idioma}"  
        }`
        return Objeto
    }
};