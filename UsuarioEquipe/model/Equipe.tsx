export class Equipe {
    public id : string;
    public nome : string;
    public data_criacao: string; //data_criacao
    public qtd_participantes: number; //qtd_participantes
    
    constructor(obj?: Partial<Equipe>) {
        if (obj) {
            this.id = obj.id
            this.nome = obj.nome
            this.data_criacao = obj.data_criacao
            this.qtd_participantes = obj.qtd_participantes
         }
    }

    toFirestore() {
        const arvore =  {
                    id : this.id,
                    nome : this.nome,
                    data_criacao : this.data_criacao,
                    qtd_participantes : this.qtd_participantes
         }
         return arvore
    }

   
    toString() {
        const Objeto = `{
            "id": "${this.id}",
            "nome": "${this.nome}",
            "data_criacao": "${this.data_criacao}",
            "qtd_participantes": "${this.qtd_participantes}"  
        }`
        return Objeto
    }
};