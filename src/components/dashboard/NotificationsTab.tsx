import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { mockData } from '@/data/mockData'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { 
  Bell, 
  Search, 
  Filter,
  Clock,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
  Check
} from 'lucide-react'

export default function NotificationsTab() {
  const { t, isRTL } = useLanguage()

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-100 text-green-800 border-green-200'
      case 'warning': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200'
      case 'info': return 'bg-blue-100 text-blue-800 border-blue-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4" />
      case 'warning':
      case 'urgent':
        return <AlertTriangle className="w-4 h-4" />
      case 'info':
        return <Info className="w-4 h-4" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) {
      return 'منذ دقائق'
    } else if (diffInHours < 24) {
      return `منذ ${diffInHours} ساعة`
    } else {
      return date.toLocaleDateString('ar-SA', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }

  const unreadCount = mockData.notifications.filter(n => !n.read).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bell className="w-6 h-6 text-primary" />
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {unreadCount}
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold">🔔 {t('notifications')}</h1>
          {unreadCount > 0 && (
            <Badge variant="destructive" className="text-xs">
              {unreadCount} غير مقروءة
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder={t('search')}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            تصفية
          </Button>
          <Button variant="outline" size="sm">
            <Check className="w-4 h-4 mr-2" />
            تحديد الكل كمقروء
          </Button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {mockData.notifications.map((notification) => (
          <Card key={notification.id} className={cn(
            'transition-all duration-200 hover:shadow-md',
            !notification.read && 'border-l-4 border-l-primary bg-primary/5'
          )}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                {/* Notification Icon */}
                <div className={cn(
                  'flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border',
                  getNotificationColor(notification.type)
                )}>
                  {getNotificationIcon(notification.type)}
                </div>

                {/* Notification Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <p className={cn(
                      'text-sm leading-relaxed',
                      !notification.read && 'font-medium'
                    )}>
                      {notification.message}
                    </p>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge className={cn('text-xs', getNotificationColor(notification.type))}>
                        {getNotificationIcon(notification.type)}
                        <span className="ml-1">{t(notification.type)}</span>
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {formatTimestamp(notification.timestamp)}
                      </div>
                    </div>

                    {!notification.read && (
                      <Button variant="ghost" size="sm" className="text-xs text-primary hover:text-primary/80">
                        تحديد كمقروء
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-6">
        <Button variant="outline" className="px-8">
          تحميل المزيد
        </Button>
      </div>
    </div>
  )
}