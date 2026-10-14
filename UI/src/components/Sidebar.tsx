import { NavLink } from 'react-router'

const navigation = [
  { to: '/', label: 'Dashboard' },
  { to: '/layers', label: 'Layer Configuration' },
  { to: '/manual', label: 'Manual Control' },
  { to: '/settings', label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="flex min-h-[calc(100vh-120px)] w-[255px] shrink-0 flex-col bg-gray-800 p-4 text-white">
      <nav aria-label="Main navigation" className="flex-1">
        <ul className="space-y-2">
          {navigation.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `block rounded p-2 hover:bg-gray-700 ${
                    isActive ? 'bg-gray-700 font-semibold' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-2">System Status</div>
    </aside>
  )
}