import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <form>
                    <h3 class="input">L o g I n</h3>
                    <div>
                        <input className="input" type="text" name="username" placeholder="username"/>
                    </div>
                    <div>
                        <input className="input" type="password" name="password" placeholder="password"/>
                    </div>
                    <div>
                        <input class="button" type="submit" value="Submit"/>
                    </div>
                </form>

            </div>
        )
    }
}