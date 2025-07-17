import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useDashboard } from '@/hooks/useDashboard'
import { mockData } from '@/data/mockData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { 
  Calendar, 
  Search, 
  Filter,
  Clock,
  MapPin,
  CalendarDays,
  Globe
} from 'lucide-react'

export default function EventsTab() {
  const { t, isRTL } = useLanguage()
  const { calendarView, setCalendarView } = useDashboard()

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-800'
      case 'workshop': return 'bg-green-100 text-green-800'
      case 'presentation': return 'bg-purple-100 text-purple-800'
      case 'evaluation': return 'bg-orange-100 text-orange-800'
      case 'celebration': return 'bg-pink-100 text-pink-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'meeting': return '🤝'
      case 'workshop': return '🛠️'
      case 'presentation': return '📊'
      case 'evaluation': return '📋'
      case 'celebration': return '🎉'
      default: return '📅'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    if (calendarView === 'hijri') {
      // Simplified Hijri date representation
      return date.toLocaleDateString('ar-SA-u-ca-islamic', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    return date.toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (timeString: string) => {
    return timeString
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Calendar className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">📅 {t('events')}</h1>
        </div>
        <div className="flex items-center gap-3">
          {/* Calendar View Toggle */}
          <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
            <Globe className="w-4 h-4" />
            <span className="text-sm">هجري</span>
            <Switch 
              checked={calendarView === 'gregorian'}
              onCheckedChange={(checked) => setCalendarView(checked ? 'gregorian' : 'hijri')}
            />
            <span className="text-sm">ميلادي</span>
          </div>
          
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
        </div>
      </div>

      {/* Events List */}
      <div className="grid gap-4">
        {mockData.events.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Event Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                  {getEventTypeIcon(event.type)}
                </div>

                {/* Event Details */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <Badge className={getEventTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>

                  {/* Date and Time */}
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-primary" />
                      <span className="font-medium">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-medium">{formatTime(event.time)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <Button size="sm" variant="outline">
                      عرض التفاصيل
                    </Button>
                    <Button size="sm" variant="ghost">
                      إضافة للتقويم
                    </Button>
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