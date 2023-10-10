'use client'

import { styled } from "styled-components"
import Comstorage from "./comstorage"
import { useState,useEffect } from "react"
import {BsFillArrowRightSquareFill} from "react-icons/bs"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"

export default function Comanager() {

    return (
        <Wrapper>
            <main className="flex items-center justify-between w-[1500px] h-[300px] text-yellow-300 p-16">
                <button className="text-4xl hover:scale-125 transition-all"><BsFillArrowLeftSquareFill/></button>
                <Comstorage/>
                <button className="text-4xl hover:scale-125 transition-all"><BsFillArrowRightSquareFill/></button>
            </main>
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