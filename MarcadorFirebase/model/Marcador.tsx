export class Marcador {
    public id : string;
    public lat : number;
    public long: number;
    public titulo: string;
    public descricao : string;
    
    constructor(obj?: Partial<Marcador>) {
        if (obj) {
            this.id = obj.id
            this.lat = obj.lat
            this.long = obj.long
            this.titulo = obj.titulo
            this.descricao = obj.descricao
         }
    }

    toFirestore() {
        const papagaio =  {
                    id : this.id,
                    lat : this.lat,
                    long : this.long,
                    titulo : this.titulo,
                    descricao : this.descricao
         }
         return papagaio
    }

   
    toString() {
        const Objeto = `{
            "id": "${this.id}",
            "lat": "${this.lat}",
            "long": "${this.long}",
            "titulo": "${this.titulo}",
            "descricao": "${this.descricao}"  
        }`
        return Objeto
    }
};