import { Postagem } from "./Postagem";

export class Tema{
    public id: number;
    public descricao: string;
    public qtd: number;
    public postagem: Postagem[];
}