export class Arvore {
    public id : string;
    public nome : string;
    public tamanho: string; //tamanho
    public nome_cientifico: string; //nome_cientifico
    
    constructor(obj?: Partial<Arvore>) {
        if (obj) {
            this.id = obj.id
            this.nome = obj.nome
            this.tamanho = obj.tamanho
            this.nome_cientifico = obj.nome_cientifico
         }
    }

    toFirestore() {
        const arvore =  {
                    id : this.id,
                    nome : this.nome,
                    tamanho : this.tamanho,
                    nome_cientifico : this.nome_cientifico
         }
         return arvore
    }

   
    toString() {
        const Objeto = `{
            "id": "${this.id}",
            "nome": "${this.nome}",
            "tamanho": "${this.tamanho}",
            "nome_cientifico": "${this.nome_cientifico}"  
        }`
        return Objeto
    }
};