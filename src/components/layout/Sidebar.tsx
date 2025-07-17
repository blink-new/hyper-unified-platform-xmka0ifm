import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  LayoutDashboard,
  MessageSquare,
  CheckSquare,
  FolderOpen,
  FileText,
  Calendar,
  BarChart3,
  Settings,
  Users,
  Zap
} from 'lucide-react'

const navigationItems = [
  { key: 'dashboard', icon: LayoutDashboard, badge: null },
  { key: 'messages', icon: MessageSquare, badge: 12 },
  { key: 'tasks', icon: CheckSquare, badge: 5 },
  { key: 'projects', icon: FolderOpen, badge: null },
  { key: 'files', icon: FileText, badge: null },
  { key: 'calendar', icon: Calendar, badge: null },
  { key: 'analytics', icon: BarChart3, badge: null },
  { key: 'settings', icon: Settings, badge: null }
]

export default function Sidebar() {
  const { t, isRTL, language } = useLanguage()
  const [activeItem, setActiveItem] = React.useState('dashboard')

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.key
          
          return (
            <Button
              key={item.key}
              variant={isActive ? "default" : "ghost"}
              className={`w-full justify-start h-12 ${
                isActive 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setActiveItem(item.key)}
            >
              <Icon className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} />
              <span className="flex-1 text-left rtl:text-right">
                {t(item.key)}
              </span>
              {item.badge && (
                <Badge 
                  variant={isActive ? "secondary" : "default"}
                  className={`${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-accent text-primary'
                  }`}
                >
                  {item.badge}
                </Badge>
              )}
            </Button>
          )
        })}
      </nav>

      {/* Pulse AI Quick Access */}
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="outline"
          className="w-full justify-start h-12 border-accent text-accent hover:bg-accent/10"
        >
          <Zap className={`w-5 h-5 ${isRTL ? 'ml-3' : 'mr-3'}`} />
          <span className="flex-1 text-left rtl:text-right">
            {t('pulseAI')}
          </span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </Button>
      </div>

      {/* Team Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-500">
            {language === 'ar' ? 'الفريق' : 'Team'}
          </span>
          <Users className="w-4 h-4 text-gray-400" />
        </div>
        <div className="space-y-2">
          {[
            { name: 'أحمد محمد', status: 'online' },
            { name: 'فاطمة علي', status: 'away' },
            { name: 'محمد سالم', status: 'offline' }
          ].map((member, index) => (
            <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className={`w-2 h-2 rounded-full ${
                member.status === 'online' ? 'bg-green-500' :
                member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-300'
              }`} />
              <span className="text-sm text-gray-600">{member.name}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}