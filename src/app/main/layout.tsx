import Bg from '@/components/Bg'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import Loader from '@/components/Loader'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export default function layout({ children }: Props) {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Bg />
           
        </>
    )
}
