import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { mockData } from '@/data/mockData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { 
  Mail, 
  Search, 
  Eye, 
  Filter,
  Clock,
  AlertTriangle,
  CheckCircle,
  User
} from 'lucide-react'

export default function MailTab() {
  const { t, isRTL } = useLanguage()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'inProgress': return 'bg-blue-100 text-blue-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'urgent': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />
      case 'urgent':
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500'
      case 'medium': return 'border-l-yellow-500'
      case 'low': return 'border-l-green-500'
      case 'urgent': return 'border-l-red-600 bg-red-50'
      default: return 'border-l-gray-300'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Mail className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">📬 {t('mail')}</h1>
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
        </div>
      </div>

      {/* Mail Cards */}
      <div className="grid gap-4">
        {mockData.mail.map((mail) => (
          <Card key={mail.id} className={cn(
            'hover:shadow-md transition-all duration-200 border-l-4',
            getPriorityColor(mail.priority)
          )}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  {/* Subject and Status */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {mail.subject}
                    </h3>
                    <Badge className={cn('flex items-center gap-1', getStatusColor(mail.status))}>
                      {getStatusIcon(mail.status)}
                      {t(mail.status)}
                    </Badge>
                  </div>

                  {/* Assigned To */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{t('assignedTo')}: {mail.assignedTo}</span>
                  </div>

                  {/* Date and Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {formatDate(mail.date)}
                    </div>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      {t('viewMail')}
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