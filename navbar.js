import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return (
            <div class="navContainer">
                <ul class="navMenu">
                    <li class="navLink"><a href="home">Home</a></li>
                    <li class="navLink"><a href="contact">Contact</a></li>
                    <li class="navLink"><a href="login">Log In</a></li>
                    <li class="navLink"><a href="social">Social</a></li>
                    <li class="navLink"><a href="about">About</a></li>
                </ul>
            </div>
        )
    }
}
