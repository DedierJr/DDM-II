export class Cachorro {
    public id: number;
    public nome: string;
    public raca: string;
    public datanascimento: string;
    public corpelo: string;

    constructor(obj?: Partial<Cachorro>) {
        if(obj){
            this.id=obj.id
            this.nome=obj.nome
            this.raca=obj.raca
            this.datanascimento=obj.datanascimento
            this.corpelo=obj.corpelo
        }
    }

    toString(){
        const Cachorro=`{
            "id":"${this.id}",
            "nome":"${this.nome}",
            "raca":"${this.raca}",
            "datanascimento":"${this.datanascimento}",
            "corpelo":"${this.corpelo}",
        }`
        return Cachorro
    }
}