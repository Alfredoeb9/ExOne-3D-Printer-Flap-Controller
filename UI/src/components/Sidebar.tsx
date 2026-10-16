import { NavLink } from 'react-router'

const navigation = [
  { to: '/', label: 'Dashboard' },
  { to: '/layers', label: 'Layer Configuration' },
  { to: '/run', label: 'Run Configuration' },
  { to: '/manual', label: 'Manual Control' },
  { to: '/settings', label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="flex min-h-[calc(100vh-120px)] max-w-[255px] shrink-1 flex-col bg-gray-800 p-4 text-white">
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

      <div className="p-2"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>System Status</div>

      {/* system version */}
      <div className="p-2 text-sm text-gray-400">v1.0.0</div>
    </aside>
  )
}