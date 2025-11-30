"use client"

import LayoutStr from "@/strings/layout";
import LinksStr from "@/strings/links";
import Link from "next/link";

export default function Navbar({ lang }) {

    const toggleTheme = () => {
        const g = document.querySelector("html")
        if (g.getAttribute("data-theme") == "dark") {
            g.setAttribute("data-theme", "light")
            return
        }
        g.setAttribute("data-theme", "dark")
    }

    return (
        <header className="bg-base-100 dark:bg-gray-700 shadow-sm sticky top-0 left-p right-0 z-20">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown z-20">
                        <div aria-label="burgur menu" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            {LayoutStr[lang ?? "en"].navbar.navLinks.map((e, i) => (
                                <li key={i}>
                                    <Link className="text-lg" href={e.url}>{e.name}</Link>
                                </li>
                            ))}
                            {
                                (lang === "fa") ? (
                                    <li>
                                        <Link className="text-lg" href="/">
                                            English
                                        </Link>
                                    </li>
                                ) : (
                                    <li>
                                        <Link className="text-lg" href="/Fa">
                                            پارسی
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        {LayoutStr[lang ?? "en"].navbar.brand}
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {LayoutStr[lang ?? "en"].navbar.navLinks.map((e, i) => (
                            <li key={i}>
                                <Link href={e.url}>{e.name}</Link>
                            </li>
                        ))}
                        {
                            (lang === "fa") ? (
                                <li>
                                    <Link href="/">
                                        English
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Link href="/Fa">
                                        پارسی
                                    </Link>
                                </li>
                            )
                        }

                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <Link aria-label="LinkedIn Link" target="_blank" href={LinksStr.linkedIn} className="hidden sm:inline-flex btn btn-info btn-square rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-8 h-8 fill-white" viewBox="0 0 30 30">
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                        </svg>
                    </Link>
                    <Link aria-label="Github Link" target="_blank" href={LinksStr.github} className="hidden sm:inline-flex btn btn-neutral btn-square rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-8 h-8 fill-white" viewBox="0 0 30 30">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                    </Link>
                    <button aria-label="Theme Toggle" onClick={toggleTheme} className="btn btn-primary dark:btn-warning btn-square rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-7 dark:hidden">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-7 hidden dark:inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>

                    </button>
                </div>
            </div>
        </header>
    )
}