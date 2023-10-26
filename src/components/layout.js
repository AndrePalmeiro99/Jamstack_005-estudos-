import React from "react"
import { Link } from "gatsby"
import "./layout.css"

export default function Layout({ children }) {
    return (
        <main className="layout">
            <div className="header">
                <h3>Estudos de Jamstack - Gatsby</h3>
                <nav className="topnav">
                    <Link to="/">Inicio</Link>
                    <Link to="pagina2">Página 2</Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
            <div className="footer">
                <h3>Aqui vai um rodapé</h3>
            </div>
        </main>
    )
}