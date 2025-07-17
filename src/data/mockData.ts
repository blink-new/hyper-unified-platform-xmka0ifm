// Mock data for the dashboard
export const mockUser = {
  id: '1',
  name: 'أحمد محمد السعودي',
  nameEn: 'Ahmed Mohammed Al-Saudi',
  email: 'ahmed.mohammed@vision2030.gov.sa',
  avatar: '/api/placeholder/40/40',
  department: 'التحول الرقمي',
  departmentEn: 'Digital Transformation',
  role: 'Manager',
  lastActive: '2024-01-15T10:30:00Z',
  permissions: [
    'can_send_notifications',
    'can_view_reports',
    'can_manage_team',
    'can_access_analytics'
  ],
  access: [
    'all_tabs',
    'Mail',
    'Projects', 
    'Events',
    'Notifications',
    'Dashboard',
    'Analytics'
  ]
};

export const mockData = {
  mail: [
    {
      id: '1',
      subject: 'تحديث المشروع الجديد',
      assignedTo: 'أحمد محمد',
      status: 'pending',
      date: '2024-01-15',
      priority: 'high'
    },
    {
      id: '2',
      subject: 'اجتماع الفريق الأسبوعي',
      assignedTo: 'فاطمة علي',
      status: 'completed',
      date: '2024-01-14',
      priority: 'medium'
    },
    {
      id: '3',
      subject: 'مراجعة التقرير الشهري',
      assignedTo: 'محمد سالم',
      status: 'inProgress',
      date: '2024-01-13',
      priority: 'high'
    },
    {
      id: '4',
      subject: 'تدريب الموظفين الجدد',
      assignedTo: 'سارة أحمد',
      status: 'pending',
      date: '2024-01-12',
      priority: 'low'
    },
    {
      id: '5',
      subject: 'تحديث النظام الأمني',
      assignedTo: 'خالد عبدالله',
      status: 'urgent',
      date: '2024-01-11',
      priority: 'urgent'
    }
  ],
  projects: [
    {
      id: '1',
      projectName: 'منصة التجارة الإلكترونية',
      phase: 'التطوير',
      progress: 75,
      status: 'inProgress',
      manager: 'أحمد محمد'
    },
    {
      id: '2',
      projectName: 'تطبيق الهاتف المحمول',
      phase: 'التصميم',
      progress: 45,
      status: 'inProgress',
      manager: 'فاطمة علي'
    },
    {
      id: '3',
      projectName: 'نظام إدارة المحتوى',
      phase: 'الاختبار',
      progress: 90,
      status: 'inProgress',
      manager: 'محمد سالم'
    },
    {
      id: '4',
      projectName: 'موقع الشركة الجديد',
      phase: 'الإطلاق',
      progress: 100,
      status: 'completed',
      manager: 'سارة أحمد'
    },
    {
      id: '5',
      projectName: 'نظام إدارة الموارد البشرية',
      phase: 'التخطيط',
      progress: 20,
      status: 'pending',
      manager: 'خالد عبدالله'
    }
  ],
  events: [
    {
      id: '1',
      title: 'اجتماع مجلس الإدارة',
      date: '2024-01-20',
      time: '10:00',
      type: 'meeting',
      location: 'قاعة الاجتماعات الرئيسية'
    },
    {
      id: '2',
      title: 'ورشة عمل التطوير المهني',
      date: '2024-01-22',
      time: '14:00',
      type: 'workshop',
      location: 'قاعة التدريب'
    },
    {
      id: '3',
      title: 'عرض المشروع الجديد',
      date: '2024-01-25',
      time: '11:30',
      type: 'presentation',
      location: 'قاعة العروض'
    },
    {
      id: '4',
      title: 'تقييم الأداء الربعي',
      date: '2024-01-28',
      time: '09:00',
      type: 'evaluation',
      location: 'مكتب الموارد البشرية'
    },
    {
      id: '5',
      title: 'احتفالية إنجاز المشروع',
      date: '2024-01-30',
      time: '16:00',
      type: 'celebration',
      location: 'القاعة الكبرى'
    }
  ],
  notifications: [
    {
      id: '1',
      message: 'تم تحديث حالة المشروع إلى مكتمل',
      type: 'success',
      timestamp: '2024-01-15T10:30:00',
      read: false
    },
    {
      id: '2',
      message: 'تأخير في تسليم التقرير الشهري',
      type: 'warning',
      timestamp: '2024-01-15T09:15:00',
      read: false
    },
    {
      id: '3',
      message: 'موظف جديد انضم للفريق',
      type: 'success',
      timestamp: '2024-01-14T16:45:00',
      read: true
    },
    {
      id: '4',
      message: 'اجتماع طارئ في الساعة 3 مساءً',
      type: 'urgent',
      timestamp: '2024-01-14T14:20:00',
      read: false
    },
    {
      id: '5',
      message: 'تم إرسال التقرير الأسبوعي',
      type: 'success',
      timestamp: '2024-01-13T11:00:00',
      read: true
    }
  ]
}