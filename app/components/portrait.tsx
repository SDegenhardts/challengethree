'use client'

import { styled } from "styled-components"
import Image from "next/image"

export default function Portrait() {
    return (
        <Wrapper>
            <Image width={1000} height={300} src={("/portrait.png")} alt={'portrait'} />
        </Wrapper>
    )
}

const Wrapper = styled.image`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5%;

`