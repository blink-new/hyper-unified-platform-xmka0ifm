import React, { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useDashboard } from '@/hooks/useDashboard'
import { mockData } from '@/data/mockData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { 
  Mail, 
  FolderOpen, 
  Calendar, 
  Bell, 
  Eye, 
  Brain, 
  Megaphone,
  Clock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

export default function DashboardOverview() {
  const { t, isRTL } = useLanguage()
  const { userRole, setActiveTab } = useDashboard()
  const [showPulseAI, setShowPulseAI] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'inProgress': return 'bg-blue-100 text-blue-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'urgent': return 'bg-red-100 text-red-800'
      case 'success': return 'bg-green-100 text-green-800'
      case 'warning': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
      case 'success':
        return <CheckCircle className="w-4 h-4" />
      case 'urgent':
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
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
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {t('welcome')}
          </h1>
          <p className="text-muted-foreground">
            {userRole === 'Manager' ? 'لوحة تحكم المدير' : 'لوحة تحكم المستخدم'}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Pulse AI Button */}
          <Dialog open={showPulseAI} onOpenChange={setShowPulseAI}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 pulse-glow border-primary/20 hover:border-primary"
              >
                <Brain className="w-4 h-4 text-primary" />
                {t('showSummary')}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Pulse AI - {t('aiSummary')}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold mb-2 text-primary">ملخص اليوم</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      تم إكمال 3 مهام بنجاح
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-600" />
                      مهمة واحدة تحتاج متابعة عاجلة
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      5 اجتماعات مجدولة هذا الأسبوع
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold mb-2 text-accent">التوصيات</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• متابعة تقدم مشروع التجارة الإلكترونية</li>
                    <li>• جدولة اجتماع مع فريق التطوير</li>
                    <li>• مراجعة التقارير المعلقة</li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Manager Only: Notify Department */}
          {userRole === 'Manager' && (
            <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90">
              <Megaphone className="w-4 h-4" />
              {t('notifyDepartment')}
            </Button>
          )}
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Latest Mail */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Mail className="w-5 h-5 text-primary" />
              📬 {t('latestMail')}
            </CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setActiveTab('📬 Mail')}
              className="text-primary hover:text-primary/80"
            >
              <Eye className="w-4 h-4 mr-1" />
              {t('viewAll')}
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockData.mail.slice(0, 5).map((mail) => (
              <div key={mail.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{mail.subject}</p>
                  <p className="text-xs text-muted-foreground">{mail.assignedTo}</p>
                </div>
                <div className="flex items-center gap-2 ml-3">
                  <Badge className={cn('text-xs flex items-center gap-1', getStatusColor(mail.status))}>
                    {getStatusIcon(mail.status)}
                    {t(mail.status)}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{formatDate(mail.date)}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Active Projects */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <FolderOpen className="w-5 h-5 text-primary" />
              📁 {t('activeProjects')}
            </CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setActiveTab('📁 Projects')}
              className="text-primary hover:text-primary/80"
            >
              <Eye className="w-4 h-4 mr-1" />
              {t('viewAll')}
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockData.projects.slice(0, 5).map((project) => (
              <div key={project.id} className="p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm">{project.projectName}</p>
                  <span className="text-xs text-muted-foreground">{project.phase}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={project.progress} className="flex-1 h-2" />
                  <span className="text-xs font-medium text-primary">{project.progress}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="w-5 h-5 text-primary" />
              📅 {t('upcomingEvents')}
            </CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setActiveTab('📅 Events')}
              className="text-primary hover:text-primary/80"
            >
              <Eye className="w-4 h-4 mr-1" />
              {t('viewAll')}
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockData.events.slice(0, 5).map((event) => (
              <div key={event.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.location}</p>
                </div>
                <div className="text-left ml-3">
                  <p className="text-xs font-medium">{formatDate(event.date)}</p>
                  <p className="text-xs text-muted-foreground">{event.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Notifications */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bell className="w-5 h-5 text-primary" />
              🔔 {t('recentNotifications')}
            </CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setActiveTab('🔔 Notifications')}
              className="text-primary hover:text-primary/80"
            >
              <Eye className="w-4 h-4 mr-1" />
              {t('viewAll')}
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockData.notifications.slice(0, 5).map((notification) => (
              <div key={notification.id} className={cn(
                'p-3 rounded-lg transition-colors',
                notification.read ? 'bg-muted/20' : 'bg-muted/40 border-l-4 border-primary'
              )}>
                <div className="flex items-start justify-between">
                  <p className="text-sm flex-1">{notification.message}</p>
                  <Badge className={cn('text-xs ml-2 flex items-center gap-1', getStatusColor(notification.type))}>
                    {getStatusIcon(notification.type)}
                    {t(notification.type)}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(notification.timestamp).toLocaleString('ar-SA')}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}