import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  ArrowRight,
  ArrowLeft,
  Clock,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Calendar,
  MessageSquare,
  FileText
} from 'lucide-react'

export default function DashboardGrid() {
  const { t, isRTL, language } = useLanguage()
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  // Sample data
  const activeOperations = [
    {
      id: 1,
      title: language === 'ar' ? 'مراجعة التقرير الشهري' : 'Monthly Report Review',
      status: 'urgent',
      assignee: 'أحمد محمد',
      dueDate: '2024-01-20',
      progress: 75
    },
    {
      id: 2,
      title: language === 'ar' ? 'تطوير النظام الجديد' : 'New System Development',
      status: 'inProgress',
      assignee: 'فاطمة علي',
      dueDate: '2024-01-25',
      progress: 45
    },
    {
      id: 3,
      title: language === 'ar' ? 'اجتماع الفريق الأسبوعي' : 'Weekly Team Meeting',
      status: 'pending',
      assignee: 'محمد سالم',
      dueDate: '2024-01-18',
      progress: 0
    }
  ]

  const activeProjects = [
    {
      id: 1,
      name: language === 'ar' ? 'مشروع التحول الرقمي' : 'Digital Transformation Project',
      completion: 68,
      team: 8,
      deadline: '2024-03-15'
    },
    {
      id: 2,
      name: language === 'ar' ? 'تطوير التطبيق المحمول' : 'Mobile App Development',
      completion: 34,
      team: 5,
      deadline: '2024-02-28'
    }
  ]

  const notifications = [
    {
      id: 1,
      type: 'urgent',
      message: language === 'ar' ? 'مهمة متأخرة تحتاج متابعة' : 'Overdue task needs attention',
      time: '5 دقائق'
    },
    {
      id: 2,
      type: 'info',
      message: language === 'ar' ? 'تم رفع ملف جديد للمشروع' : 'New file uploaded to project',
      time: '15 دقيقة'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'urgent': return 'bg-red-500'
      case 'inProgress': return 'bg-blue-500'
      case 'completed': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('welcome')}
        </h1>
        <p className="text-gray-600">
          {language === 'ar' 
            ? 'إدارة شاملة لمهامك ومشاريعك في مكان واحد' 
            : 'Comprehensive management of your tasks and projects in one place'
          }
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {language === 'ar' ? 'المهام النشطة' : 'Active Tasks'}
                </p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {language === 'ar' ? 'المشاريع الجارية' : 'Ongoing Projects'}
                </p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {language === 'ar' ? 'الرسائل الجديدة' : 'New Messages'}
                </p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <MessageSquare className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {language === 'ar' ? 'الملفات المشتركة' : 'Shared Files'}
                </p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <FileText className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Operations */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">
              {t('activeOperations')}
            </CardTitle>
            <Button variant="ghost" size="sm">
              {t('viewAll')}
              <ArrowIcon className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeOperations.map((operation) => (
              <div key={operation.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">
                      {operation.title}
                    </h4>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
                        {operation.assignee}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
                        {operation.dueDate}
                      </span>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${getStatusColor(operation.status)} text-white`}
                  >
                    {t(operation.status)}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {language === 'ar' ? 'التقدم' : 'Progress'}
                    </span>
                    <span className="font-medium">{operation.progress}%</span>
                  </div>
                  <Progress value={operation.progress} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Smart Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2 text-accent" />
              {t('smartNotifications')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    notification.type === 'urgent' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 mb-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Active Projects */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold">
              {t('activeProjects')}
            </CardTitle>
            <Button variant="ghost" size="sm">
              {t('viewAll')}
              <ArrowIcon className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeProjects.map((project) => (
              <div key={project.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {project.name}
                    </h4>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
                        {project.team} {language === 'ar' ? 'أعضاء' : 'members'}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1" />
                        {project.deadline}
                      </span>
                    </div>
                  </div>
                  <div className="text-right rtl:text-left">
                    <div className="text-2xl font-bold text-primary">
                      {project.completion}%
                    </div>
                    <div className="text-xs text-gray-500">
                      {language === 'ar' ? 'مكتمل' : 'Complete'}
                    </div>
                  </div>
                </div>
                <Progress value={project.completion} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center">
              <Calendar className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2 text-blue-500" />
              {t('upcomingEvents')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: language === 'ar' ? 'اجتماع المراجعة الأسبوعية' : 'Weekly Review Meeting',
                time: '10:00 AM',
                date: language === 'ar' ? 'اليوم' : 'Today'
              },
              {
                title: language === 'ar' ? 'عرض المشروع للعميل' : 'Client Project Presentation',
                time: '2:00 PM',
                date: language === 'ar' ? 'غداً' : 'Tomorrow'
              },
              {
                title: language === 'ar' ? 'ورشة التدريب التقني' : 'Technical Training Workshop',
                time: '9:00 AM',
                date: language === 'ar' ? 'الأحد' : 'Sunday'
              }
            ].map((event, index) => (
              <div key={index} className="p-3 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-gray-900 mb-1">
                  {event.title}
                </h5>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{event.time}</span>
                  <span>{event.date}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}