'use client'

import { styled } from "styled-components"

export default function Footer() {
    return (
        <Wrapper className="w-full">
            <div className='flex flex-col'>
                <h1 className='font-bold text-3xl'>Kontakt</h1>
                <ol className=' text-left'>
                    <li>info</li>
                    <li>info</li>
                    <li>info</li>
                </ol>
            </div>
            <div className='flex flex-col'>
                <h1 className='font-bold text-3xl'>Mein Pannel</h1>
                <ol className=' text-left'>
                    <li>info</li>
                    <li>info</li>
                    <li>info</li>
                </ol>
            </div>
            <div className='flex flex-col'>
                <h1 className='font-bold text-3xl'>Mehr info</h1>
                <ol className=' text-left'>
                    <li>info</li>
                    <li>info</li>
                    <li>info</li>
                </ol>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    display: flex;
    background-color: black;
    color: #F2D64B;
    padding: 20px;
    justify-content: space-evenly;
    align-items: center;
    height: 14vw;
    /* background-image: url("/footer.png");
    background-size: 100vw 40vh; */

`