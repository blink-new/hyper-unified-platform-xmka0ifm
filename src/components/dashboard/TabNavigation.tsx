import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useDashboard } from '@/hooks/useDashboard'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const tabs = [
  { id: '📊 Dashboard', icon: '📊', labelKey: 'dashboard' },
  { id: '📬 Mail', icon: '📬', labelKey: 'mail' },
  { id: '📁 Projects', icon: '📁', labelKey: 'projects' },
  { id: '📅 Events', icon: '📅', labelKey: 'events' },
  { id: '🔔 Notifications', icon: '🔔', labelKey: 'notifications' }
]

export default function TabNavigation() {
  const { t, isRTL } = useLanguage()
  const { activeTab, setActiveTab, userRole } = useDashboard()

  // Filter tabs based on user role
  const availableTabs = tabs.filter(tab => {
    if (userRole === 'Manager') return true
    return ['📊 Dashboard', '📬 Mail', '📁 Projects', '📅 Events', '🔔 Notifications'].includes(tab.id)
  })

  return (
    <div className="border-b border-border bg-card">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          {availableTabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200',
                activeTab === tab.id 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground',
                isRTL && 'flex-row-reverse'
              )}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="font-medium">{t(tab.labelKey)}</span>
            </Button>
          ))}
        </div>
        
        {/* Role indicator */}
        <div className="flex items-center gap-2">
          <div className={cn(
            'px-3 py-1 rounded-full text-xs font-medium',
            userRole === 'Manager' 
              ? 'bg-primary/10 text-primary' 
              : 'bg-muted text-muted-foreground'
          )}>
            {userRole}
          </div>
        </div>
      </div>
    </div>
  )
}