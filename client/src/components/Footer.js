import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Footer Content</h5>
                        <p class="grey-text text-lighten-4">Astronomy and learning lovers</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                            <li><Link class="grey-text text-lighten-3" to="/">Home</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2020 dropeditions
                </div>
            </div>
        </footer>
    )
}
