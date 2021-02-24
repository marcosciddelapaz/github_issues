import './Footer.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <p>Using <a href='https://docs.github.com/en/rest/overview'>Github’s API</a>, build an application with an autocomplete input box for searching issues for <a href='https://github.com/facebook/react/issues'>React’s repo</a>. Input and results should be able to navigate via keyboard shortcuts. Each result should have but not limited to, the issue’s title and labels.</p>
        </div>
     );
}
 
export default Footer;