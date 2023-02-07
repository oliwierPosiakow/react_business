const imgMe = './public/me.png'

export default function Header(){
    return(
        <header>
            <img 
                className="header--img"
                src={imgMe}
            />
            <h1>Oliwier Posiakow</h1>
            <h3> Junior Frontend Developer</h3>
            <div className="button-wrapper">
                <a 
                    href="mailto: oliwierposiakow@gmail.com" 
                    target="_blank"
                    className="email-btn">
                        <i className="fa-regular fa-envelope"></i> Email
                </a>
                <a 
                    href="https://www.linkedin.com/in/oliwier-posiakow-128649263/"
                    target="_blank"
                    className="linkedin-btn">
                        <i className="fa-brands fa-linkedin"></i> LinkedIn</a>
            </div>
        </header>
    )
}