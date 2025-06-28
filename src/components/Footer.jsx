import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <p className="footer-p">© {new Date().getFullYear()} Miłosz Wach</p>
    </footer>
  )
}