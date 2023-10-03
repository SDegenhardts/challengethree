'use client'

import Image from "next/image";
import { styled } from "styled-components"
import Link from "next/link";

export default function Header() {
    return (
        <Wrapper className="w-full">
            <div className="flex gap-32">
                <Link href={'/'} className="text-center hover:bg-black border-4 border-solid hover:border-yellow-300 p-2 rounded-xl w-24 hover:text-yellow-300 bg-yellow-250 text-black border-black hover:scale-125">Heim</Link>
                <Link href={'/about'} className="text-center hover:bg-black border-4 border-solid hover:border-yellow-300 p-2 rounded-xl w-24 hover:text-yellow-300 bg-yellow-250 text-black border-black hover:scale-125">Um</Link>
            </div>
            <Image width={80} height={80} src={("/drachenblack.png")} alt={'drachen'} className="ml-32 mr-32" />
            <div className="flex gap-32">
                <Link href={'/contact'} className="text-center hover:bg-black border-4 border-solid hover:border-yellow-300 p-2 rounded-xl w-24 hover:text-yellow-300 bg-yellow-250 text-black border-black hover:scale-125">Kontakt</Link>
                <Link href={'/registry'} className="text-center hover:bg-black border-4 border-solid hover:border-yellow-300 p-2 rounded-xl w-28 hover:text-yellow-300 bg-yellow-250 text-black border-black hover:scale-150">Registrieren</Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    background-color: #F2D64B;

`