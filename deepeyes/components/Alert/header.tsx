import { Bell } from "lucide-react"
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          <Bell className="mr-2" />
          Home Security App
        </h1>
        <nav>
          <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Alerts
                </Link>
              </li>
            <li>
              <a href="#" className="hover:underline">
                Cameras
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

