'use client'

import { styled } from "styled-components"
import Comstorage from "./comstorage"
import { useState,useEffect } from "react"

export default function Comanager() {

    const setad = "->"
    const setae = "<-"

    return (
        <Wrapper>
            <main className="flex justify-center items-center text-yellow-300 p-16">
                <button>{setae}</button>
                <Comstorage/>
                <button>{setad}</button>
            </main>
        </Wrapper>
    )
}

const Wrapper = styled.image`

    display: flex;
    justify-content: center;
    width: 1000px;
    height: 300px;
    background-color: #000000a2;
    margin: 7%;

`