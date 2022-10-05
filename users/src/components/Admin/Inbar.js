export default function Inbar(){
    return (
    <nav className="in-nav">
        <a href="/" className="site-title">Events</a>
        <ul>
            <li>
                <a href="/Pending">Pending</a>
            </li>
            <li>
                <a href="/Approved">Approved</a>
            </li>
            <li>
                <a href="/Declined">Declined</a>
            </li>
        </ul>
    </nav>
    )
}