// interface iPropsCom {
//     comment: string
//     name: string
//     data: string
// }

export default function Comstorage() {
    const comments = [{
        id: 1,
        comment: "DRACHEN, DRACHEN,DRACHEN, ME DIZ OQUE TU SIENTE AO VER DRACHEN JUEGAR,DALE DALE DALE ÔÔÔÔÔ",
        name: "~ João Victor",
        data: "20/01/2023"
    },
    {
        id: 2,
        comment: "Boa Vitoria,merecida!!",
        name: "Naruê Goncalves",
        data: "30/03/2023"
    },
    {
        id: 3,
        comment: "Vai Drachen",
        name: "Lilian Semann",
        data: "14/04/2023"
    },
    {
        id: 4,
        comment: "Belo touchdown! Vamos Drachen!",
        name: "Rodrigo Zunino Valim",
        data: "23/06/2023"
    },
    {
        id: 5,
        comment: "DIA DE GAME, VAMOS",
        name: "Patrick Dias",
        data: "07/08/2023"
    },
    {
        id: 6,
        comment: "VOCÊS SÃO, RIDICULOS!!!!!",
        name: "João Krause",
        data: "1/10/2023"
    },
    {
        id: 7,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        name: "Larissa Butzke",
        data: "7/10/2023"
    }
    ]

    const conj = comments.filter((i) => i.id === 7)
    return (
        <main className="p-10">
            <div className="mt-4 mb-9 flex w-[670px] flex-col text-2xl justify-center items-center gap-36">{conj.map((i) => (i.comment))}</div>
            <div className="gap-7">
                <div className="flex justify-end text-base">{conj.map((i) => (i.name))}</div>
                <div className="flex justify-end text-[0.5em]">{conj.map((i) => (i.data))}</div>
            </div>
        </main>
    )


}