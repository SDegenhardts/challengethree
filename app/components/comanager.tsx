'use client'

import { styled } from "styled-components"
import { useState, useEffect } from "react"
import { BsFillArrowRightSquareFill } from "react-icons/bs"
import { BsFillArrowLeftSquareFill } from "react-icons/bs"

export default function Comanager() {

    let comments = [{
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
    const conj = comments.filter((i) => i.id === 6)

    // const [previous, setPrevious] = useState(comments[0])
    const [advence, setAdvence] = useState(comments[0])

    return (
        <Wrapper>
            <section className="flex items-center justify-between w-[1500px] h-[300px] text-yellow-300 p-16">
                <button onClick={() => advence == comments[(comments.length)] ? setAdvence(comments[0]) : setAdvence(comments[comments.indexOf(advence) + 1])} className="text-4xl hover:scale-125 transition-all"><BsFillArrowLeftSquareFill /></button>
                <main className="p-10">
                    <div className="mt-20 mb-9 flex w-[670px] flex-col text-2xl justify-center items-center gap-36">{advence.comment}</div>
                    <div className="gap-7">
                        <div className="flex justify-end text-base">{advence.name}</div>
                        <div className="flex justify-end text-[0.5em]">{advence.data}</div>
                    </div>
                </main>
                <button onClick={() => advence == comments[comments.length] ? setAdvence(comments[0]) : setAdvence(comments[comments.indexOf(advence) + 7])} className="text-4xl hover:scale-125 transition-all"><BsFillArrowRightSquareFill /></button>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.image`

    display: flex;
    justify-content: space-around;
    width: 1000px;
    height: 300px;
    background-color: #000000a2;
    margin: 7%;
    overflow: auto;

`