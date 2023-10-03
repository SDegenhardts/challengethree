// interface iPropsCom {
//     comment: string
//     name: string
//     data: string
// }

export default function Comstorage() {
    const comments = [{
        comment: "DRACHEN, DRACHEN,DRACHEN, ME DIZ OQUE TU SIENTE AO VER DRACHEN JUEGAR,DALE DALE DALE ÔÔÔÔÔ",
        name: "João Victor",
        data: "20/01/2023"
    },
    {
        comment: "Boa Vitoria,merecida!!",
        name: "Naruê Goncalves",
        data: "30/03/2023"
    },
    {
        comment: "Vai Drachen",
        name: "Lilian Semann",
        data: "14/04/2023"
    },
    {
        comment: "Belo touchdown",
        name: "Rodrigo Valim",
        data: "23/06/2023"
    },
    {
        comment: "DIA DE GAME, VAMOS",
        name: "Patrick Dias",
        data: "07/08/2023"
    },
    {
        comment: "VOCÊS SÃO, RIDICULOS!!!!!",
        name: "João Krause",
        data: "1/10/2023"
    }
    ]
    return (
        <main>
            {comments.map((i)=>(i.comment,i.name,i.data))}
        </main>
    )


}