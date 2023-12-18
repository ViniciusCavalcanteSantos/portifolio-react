"use client";

import Image from "next/image";
import styled from "styled-components";
import logo from "@/assets/logo.svg"

import { Abril_Fatface } from "next/font/google";
import Link from "next/link";
const AbrilFatface = Abril_Fatface({ weight: ["400"], subsets: ['latin'] });


const TagHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  width: 100%;
  height: 80px;
  top: 0;
  /* background: rgba(43, 37, 60, 0.6); */
  background-color: var(--bg-color-2);
  box-shadow: 0 5px 20px 0.1px rgb(0 0 0 / 10%);
  backdrop-filter: blur(15px);
  color: var(--text-primary);

  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: var(--max-width);
`

const PageTitle = styled.h1`
  font-size: 1.5rem;
  ${AbrilFatface.style}
`

const List = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  color: var(--text-secondary);
`

const ListItem = styled.li`
  position: relative;
  transition: .3s;
  
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    height: 6px;
    transform: translateX(-50%);
    width: 0;
    border-radius: 8px;
    background-color: var(--white);
    transition: .3s;
  }

  &:hover {
    color: var(--text-primary);

    &::after {
      width: 110%;
    }
  }
  
`

export default function Header() {
    return (
      <TagHeader>
        <Container>
          <PageTitle>
            <Image src={logo} alt="Logo" width={40}/>
            inicius C. Santos
          </PageTitle>

          <nav>
            <List>
              <ListItem>
                <Link href="#home">Home</Link>
              </ListItem>
              <ListItem>
                <Link href="#sobre">Sobre</Link>
              </ListItem>
              <ListItem>
                <Link href="#portfolio">Portfolio</Link>
              </ListItem>
              <ListItem>
                <Link href="#contato">Contato</Link>
              </ListItem>
            </List>
          </nav>
        </Container>
      </TagHeader>
    )
  }
  