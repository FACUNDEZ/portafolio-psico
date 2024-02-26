import { useState } from "react"

function Header() {
    const skillsSection = document.getElementById("about-skills")
    const testimonialsSection = document.getElementById("testimonials-section")
    const hoverDiv = document.getElementById("hoverDiv")

    const [darkModeActive, setDarkModeActive] = useState(false)

    const toggleDarkMode = () => {
        setDarkModeActive(!darkModeActive)

        if (!darkModeActive) {
            document.body.classList.add("dark-theme")
            hoverDiv.classList.add("hover-dark-theme")
            skillsSection.classList.add("dark-theme2")
            testimonialsSection.classList.add("dark-theme2")
            document.body.classList.remove("light-theme")
        } else {
            document.body.classList.remove("dark-theme")
            hoverDiv.classList.remove("hover-dark-theme")
            skillsSection.classList.remove("dark-theme2")
            testimonialsSection.classList.remove("dark-theme2")
            document.body.classList.add("light-theme")
        }
    }

    return (
        <header className="flex justify-end items-center gap-5 pr-8 py-6">
            <button onClick={toggleDarkMode}><svg width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke={`${darkModeActive === false ? "#000000" : "#ffffff"} `} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                <path d="M19 11h2m-1 -1v2" />
            </svg></button>
            <button className='font-bold text-xl'>Idioma</button>
        </header>
    )
}

export default Header