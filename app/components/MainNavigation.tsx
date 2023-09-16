import Link from 'next/link'

function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Ana Sayfa</Link>
        </li>
        <li>
          <Link href="/questions">Sorular</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
