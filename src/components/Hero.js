import { Breadcrumbs, Link } from '@material-ui/core'
import React from 'react'

export default function hero({logout}) {
    return (
        <section className="hero" >
            <nav>
                <h2>Welcome</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href='/' className="link" >
                        Home
                    </Link>
                    <Link color="inherit" href='/'  className="link">
                        View
                    </Link>
                    <Link color="inherit" href='/'  className="link" >
                        Contact
                    </Link>
                </Breadcrumbs>
                <button onClick={logout}>Logout</button>
            </nav>
            
        </section>
    )
}
