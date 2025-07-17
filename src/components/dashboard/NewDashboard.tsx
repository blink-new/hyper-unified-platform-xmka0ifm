import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/hooks/useLanguage';
import { useDashboard } from '@/hooks/useDashboard';
import { 
  Mail, 
  FolderOpen, 
  Calendar, 
  Bell, 
  TrendingUp, 
  Users, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Send,
  BarChart3,
  Eye,
  ArrowRight,
  ArrowLeft,
  Plus,
  Filter,
  Search,
  Settings
} from 'lucide-react';

interface DashboardSection {
  title: string;
  titleAr: string;
  icon: React.ReactNode;
  items: any[];
  maxItems: number;
  type: 'mail' | 'projects' | 'events' | 'notifications';
}

const NewDashboard: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const { user } = useDashboard();
  const [showPulseAI, setShowPulseAI] = useState(false);
  const [showNotifyModal, setShowNotifyModal] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Enhanced mock data with Madinah green theme
  const mailItems = [
    { 
      id: 1, 
      subject: 'Vision 2030 Project Review', 
      subjectAr: 'مراجعة مشروع رؤية 2030', 
      status: 'urgent', 
      assignedTo: 'أحمد محمد', 
      assignedToEn: 'Ahmed Mohammed',
      date: '2024-01-15',
      priority: 'high'
    },
    { 
      id: 2, 
      subject: 'Digital Transformation Budget', 
      subjectAr: 'ميزانية التحول الرقمي', 
      status: 'pending', 
      assignedTo: 'فاطمة علي', 
      assignedToEn: 'Fatima Ali',
      date: '2024-01-14',
      priority: 'medium'
    },
    { 
      id: 3, 
      subject: 'Smart City Initiative Meeting', 
      subjectAr: 'اجتماع مبادرة المدينة الذكية', 
      status: 'completed', 
      assignedTo: 'محمد سالم', 
      assignedToEn: 'Mohammed Salem',
      date: '2024-01-13',
      priority: 'high'
    },
    { 
      id: 4, 
      subject: 'NEOM Quarterly Report', 
      subjectAr: 'التقرير الربعي لنيوم', 
      status: 'in-progress', 
      assignedTo: 'نورا أحمد', 
      assignedToEn: 'Nora Ahmed',
      date: '2024-01-12',
      priority: 'medium'
    },
    { 
      id: 5, 
      subject: 'Green Saudi Initiative Update', 
      subjectAr: 'تحديث مبادرة السعودية الخضراء', 
      status: 'urgent', 
      assignedTo: 'خالد يوسف', 
      assignedToEn: 'Khalid Youssef',
      date: '2024-01-11',
      priority: 'urgent'
    }
  ];

  const projectItems = [
    { 
      id: 1, 
      name: 'NEOM Digital Infrastructure', 
      nameAr: 'البنية التحتية الرقمية لنيوم', 
      phase: 'Implementation', 
      phaseAr: 'التنفيذ', 
      progress: 75,
      status: 'on-track',
      manager: 'أحمد محمد'
    },
    { 
      id: 2, 
      name: 'Red Sea Tourism Platform', 
      nameAr: 'منصة سياحة البحر الأحمر', 
      phase: 'Development', 
      phaseAr: 'التطوير', 
      progress: 60,
      status: 'on-track',
      manager: 'فاطمة علي'
    },
    { 
      id: 3, 
      name: 'Riyadh Metro Integration', 
      nameAr: 'تكامل مترو الرياض', 
      phase: 'Testing', 
      phaseAr: 'الاختبار', 
      progress: 85,
      status: 'ahead',
      manager: 'محمد سالم'
    },
    { 
      id: 4, 
      name: 'Vision 2030 Dashboard', 
      nameAr: 'لوحة رؤية 2030', 
      phase: 'Planning', 
      phaseAr: 'التخطيط', 
      progress: 40,
      status: 'delayed',
      manager: 'نورا أحمد'
    },
    { 
      id: 5, 
      name: 'Green Riyadh Analytics', 
      nameAr: 'تحليلات الرياض الخضراء', 
      phase: 'Research', 
      phaseAr: 'البحث', 
      progress: 25,
      status: 'on-track',
      manager: 'خالد يوسف'
    }
  ];

  const eventItems = [
    { 
      id: 1, 
      title: 'Vision 2030 Board Meeting', 
      titleAr: 'اجتماع مجلس رؤية 2030', 
      date: '2024-01-20', 
      time: '10:00 AM',
      type: 'meeting',
      location: 'King Abdulaziz Conference Center'
    },
    { 
      id: 2, 
      title: 'NEOM Project Review', 
      titleAr: 'مراجعة مشروع نيوم', 
      date: '2024-01-22', 
      time: '2:00 PM',
      type: 'review',
      location: 'NEOM Headquarters'
    },
    { 
      id: 3, 
      title: 'Digital Transformation Workshop', 
      titleAr: 'ورشة التحول الرقمي', 
      date: '2024-01-25', 
      time: '9:00 AM',
      type: 'workshop',
      location: 'Riyadh Tech Hub'
    },
    { 
      id: 4, 
      title: 'Green Saudi Presentation', 
      titleAr: 'عرض السعودية الخضراء', 
      date: '2024-01-28', 
      time: '11:00 AM',
      type: 'presentation',
      location: 'Ministry of Environment'
    },
    { 
      id: 5, 
      title: 'Quarterly Performance Review', 
      titleAr: 'مراجعة الأداء الربعي', 
      date: '2024-01-30', 
      time: '3:00 PM',
      type: 'review',
      location: 'Executive Office'
    }
  ];

  const notificationItems = [
    { 
      id: 1, 
      message: 'New Vision 2030 milestone achieved', 
      messageAr: 'تم تحقيق معلم جديد في رؤية 2030', 
      type: 'Success',
      timestamp: '2024-01-15T10:30:00',
      priority: 'high'
    },
    { 
      id: 2, 
      message: 'NEOM project requires immediate attention', 
      messageAr: 'مشروع نيوم يحتاج انتباه فوري', 
      type: 'Warning',
      timestamp: '2024-01-15T09:15:00',
      priority: 'urgent'
    },
    { 
      id: 3, 
      message: 'Green Saudi budget approved', 
      messageAr: 'تمت الموافقة على ميزانية السعودية الخضراء', 
      type: 'Success',
      timestamp: '2024-01-14T16:45:00',
      priority: 'medium'
    },
    { 
      id: 4, 
      message: 'Digital transformation training scheduled', 
      messageAr: 'تم جدولة تدريب التحول الرقمي', 
      type: 'Info',
      timestamp: '2024-01-14T14:20:00',
      priority: 'low'
    },
    { 
      id: 5, 
      message: 'Red Sea project phase completed', 
      messageAr: 'تم إنجاز مرحلة مشروع البحر الأحمر', 
      type: 'Success',
      timestamp: '2024-01-13T11:00:00',
      priority: 'medium'
    }
  ];

  const sections: DashboardSection[] = [
    {
      title: '📬 Latest Mail',
      titleAr: '📬 البريد الأخير',
      icon: <Mail className="w-5 h-5" />,
      items: mailItems,
      maxItems: 5,
      type: 'mail'
    },
    {
      title: '📁 Active Projects',
      titleAr: '📁 المشاريع النشطة',
      icon: <FolderOpen className="w-5 h-5" />,
      items: projectItems,
      maxItems: 5,
      type: 'projects'
    },
    {
      title: '📅 Upcoming Events',
      titleAr: '📅 الأحداث القادمة',
      icon: <Calendar className="w-5 h-5" />,
      items: eventItems,
      maxItems: 5,
      type: 'events'
    },
    {
      title: '🔔 Recent Notifications',
      titleAr: '🔔 الإشعارات الأخيرة',
      icon: <Bell className="w-5 h-5" />,
      items: notificationItems,
      maxItems: 5,
      type: 'notifications'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'urgent': return 'bg-red-50 text-red-700 border border-red-200';
      case 'pending': return 'bg-amber-50 text-amber-700 border border-amber-200';
      case 'completed': return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
      case 'in-progress': return 'bg-blue-50 text-blue-700 border border-blue-200';
      default: return 'bg-gray-50 text-gray-700 border border-gray-200';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'Warning': return 'bg-orange-50 text-orange-700 border border-orange-200';
      case 'Success': return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
      case 'Info': return 'bg-blue-50 text-blue-700 border border-blue-200';
      default: return 'bg-gray-50 text-gray-700 border border-gray-200';
    }
  };

  const getProjectStatusColor = (status: string) => {
    switch (status) {
      case 'ahead': return 'text-emerald-600';
      case 'on-track': return 'text-blue-600';
      case 'delayed': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const renderMailSection = (items: any[]) => (
    <div className="space-y-3">
      {items.slice(0, 5).map((item) => (
        <div key={item.id} className="group flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all duration-200">
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm text-gray-900 truncate mb-1">
              {language === 'ar' ? item.subjectAr : item.subject}
            </h4>
            <p className="text-xs text-gray-600">
              {language === 'ar' ? item.assignedTo : item.assignedToEn}
            </p>
          </div>
          <div className="flex items-center gap-3 ml-4">
            <Badge className={`text-xs font-medium ${getStatusColor(item.status)}`}>
              {item.status}
            </Badge>
            <span className="text-xs text-gray-500 font-medium">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProjectsSection = (items: any[]) => (
    <div className="space-y-3">
      {items.slice(0, 5).map((item) => (
        <div key={item.id} className="group flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all duration-200">
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm text-gray-900 truncate mb-1">
              {language === 'ar' ? item.nameAr : item.name}
            </h4>
            <p className="text-xs text-gray-600">
              {language === 'ar' ? item.phaseAr : item.phase}
            </p>
          </div>
          <div className="flex items-center gap-3 ml-4">
            <div className="flex items-center gap-2">
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <span className={`text-xs font-semibold min-w-[3rem] ${getProjectStatusColor(item.status)}`}>
                {item.progress}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderEventsSection = (items: any[]) => (
    <div className="space-y-3">
      {items.slice(0, 5).map((item) => (
        <div key={item.id} className="group flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all duration-200">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full shadow-sm" />
            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-1">
                {language === 'ar' ? item.titleAr : item.title}
              </h4>
              <p className="text-xs text-gray-600">{item.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {item.type}
            </Badge>
            <span className="text-xs text-gray-500 font-medium">{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderNotificationsSection = (items: any[]) => (
    <div className="space-y-3">
      {items.slice(0, 5).map((item) => (
        <div key={item.id} className="group flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all duration-200">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-900 truncate font-medium">
              {language === 'ar' ? item.messageAr : item.message}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(item.timestamp).toLocaleString()}
            </p>
          </div>
          <Badge className={`text-xs font-medium ml-3 ${getNotificationColor(item.type)}`}>
            {item.type}
          </Badge>
        </div>
      ))}
    </div>
  );

  const renderSection = (section: DashboardSection) => {
    switch (section.type) {
      case 'mail': return renderMailSection(section.items);
      case 'projects': return renderProjectsSection(section.items);
      case 'events': return renderEventsSection(section.items);
      case 'notifications': return renderNotificationsSection(section.items);
      default: return null;
    }
  };

  const handleSendNotification = () => {
    // Here you would typically send the notification to your backend
    console.log('Sending notification:', notificationMessage);
    setNotificationMessage('');
    setShowNotifyModal(false);
    // Show success message or handle response
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto p-6">
        {/* Action Buttons Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {language === 'ar' ? 'لوحة التحكم' : 'Dashboard Overview'}
              </h2>
              <p className="text-gray-600">
                {language === 'ar' ? 'نظرة شاملة على العمليات والمشاريع' : 'Comprehensive view of operations and projects'}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Pulse AI Button */}
              <Dialog open={showPulseAI} onOpenChange={setShowPulseAI}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="pulse-glow border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-semibold">Pulse AI</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-primary">
                      {language === 'ar' ? 'ملخص Pulse AI الذكي' : 'Pulse AI Smart Summary'}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                      <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        {language === 'ar' ? 'تحليل الأداء' : 'Performance Analysis'}
                      </h3>
                      <p className="text-emerald-700">
                        {language === 'ar' 
                          ? 'الفريق يحقق تقدماً ممتازاً في مشاريع رؤية 2030. 85% من المهام مكتملة في الوقت المحدد مع تركيز قوي على التحول الرقمي.'
                          : 'Team is achieving excellent progress on Vision 2030 projects. 85% of tasks completed on time with strong focus on digital transformation.'
                        }
                      </p>
                    </div>
                    <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
                      <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        {language === 'ar' ? 'تنبيهات ذكية' : 'Smart Alerts'}
                      </h3>
                      <p className="text-amber-700">
                        {language === 'ar' 
                          ? '3 مشاريع تحتاج إلى انتباه فوري. مشروع نيوم يتطلب مراجعة الميزانية، ومبادرة السعودية الخضراء تحتاج تحديث الجدول الزمني.'
                          : '3 projects require immediate attention. NEOM project needs budget review, Green Saudi initiative requires timeline update.'
                        }
                      </p>
                    </div>
                    <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
                      <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        {language === 'ar' ? 'اقتراحات ذكية' : 'Smart Suggestions'}
                      </h3>
                      <p className="text-blue-700">
                        {language === 'ar' 
                          ? 'يُنصح بجدولة اجتماع استراتيجي لمناقشة تسريع مشاريع التحول الرقمي وتحسين التنسيق بين الفرق.'
                          : 'Recommend scheduling strategic meeting to discuss accelerating digital transformation projects and improving team coordination.'
                        }
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Manager Only: Notify Department Button */}
              {user?.role === 'Manager' && (
                <Dialog open={showNotifyModal} onOpenChange={setShowNotifyModal}>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 shadow-lg">
                      <Send className="w-4 h-4 mr-2" />
                      <span className="font-semibold">
                        {language === 'ar' ? 'إشعار القسم' : 'Notify Department'}
                      </span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-lg font-bold">
                        {language === 'ar' ? 'إرسال إشعار للقسم' : 'Send Department Notification'}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                          {language === 'ar' ? 'الرسالة' : 'Message'}
                        </label>
                        <Textarea 
                          value={notificationMessage}
                          onChange={(e) => setNotificationMessage(e.target.value)}
                          className="resize-none border-gray-200 focus:border-primary" 
                          rows={4}
                          placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Type your message here...'}
                        />
                      </div>
                      <div className="flex justify-end gap-3">
                        <Button variant="outline" onClick={() => setShowNotifyModal(false)}>
                          {language === 'ar' ? 'إلغاء' : 'Cancel'}
                        </Button>
                        <Button 
                          className="bg-primary hover:bg-primary/90"
                          onClick={handleSendNotification}
                          disabled={!notificationMessage.trim()}
                        >
                          {language === 'ar' ? 'إرسال' : 'Send'}
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )}

              {/* Analytics Button for Managers */}
              {user?.role === 'Manager' && (
                <Button variant="outline" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                  <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                  <span className="font-semibold">
                    {language === 'ar' ? 'التقارير' : 'Analytics'}
                  </span>
                </Button>
              )}
            </div>
          </div>

          {/* Quick Stats for Managers */}
          {user?.role === 'Manager' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="border-l-4 border-l-emerald-500 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {language === 'ar' ? 'المهام المكتملة' : 'Completed Tasks'}
                      </p>
                      <p className="text-3xl font-bold text-emerald-600">24</p>
                      <p className="text-xs text-emerald-600 mt-1">+12% من الشهر الماضي</p>
                    </div>
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {language === 'ar' ? 'المهام المعلقة' : 'Pending Tasks'}
                      </p>
                      <p className="text-3xl font-bold text-amber-600">8</p>
                      <p className="text-xs text-amber-600 mt-1">-3 من الأسبوع الماضي</p>
                    </div>
                    <Clock className="w-10 h-10 text-amber-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {language === 'ar' ? 'أعضاء الفريق' : 'Team Members'}
                      </p>
                      <p className="text-3xl font-bold text-blue-600">12</p>
                      <p className="text-xs text-blue-600 mt-1">نشط 100%</p>
                    </div>
                    <Users className="w-10 h-10 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-red-500 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {language === 'ar' ? 'التنبيهات العاجلة' : 'Urgent Alerts'}
                      </p>
                      <p className="text-3xl font-bold text-red-600">3</p>
                      <p className="text-xs text-red-600 mt-1">يتطلب انتباه فوري</p>
                    </div>
                    <AlertTriangle className="w-10 h-10 text-red-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card key={index} className="shadow-sm hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4 border-b border-gray-100">
                <CardTitle className="flex items-center justify-between text-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {section.icon}
                    </div>
                    <span className="font-bold text-gray-900">
                      {language === 'ar' ? section.titleAr : section.title}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                    <Eye className="w-4 h-4 text-primary" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {renderSection(section)}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button variant="ghost" className="w-full text-primary hover:bg-primary/10 font-medium">
                    {language === 'ar' ? 'عرض الكل' : 'View All'}
                    {isRTL ? <ArrowLeft className="w-4 h-4 mr-2" /> : <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewDashboard;