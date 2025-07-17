/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isRTL: boolean
  t: (key: string) => string
}

const translations = {
  ar: {
    // Navigation
    dashboard: 'لوحة التحكم',
    messages: 'الرسائل',
    tasks: 'المهام',
    projects: 'المشاريع',
    files: 'الملفات',
    calendar: 'التقويم',
    analytics: 'التحليلات',
    settings: 'الإعدادات',
    mail: 'البريد',
    events: 'الفعاليات',
    notifications: 'الإشعارات',
    
    // Dashboard
    welcome: 'مرحباً بك في HYPER',
    activeOperations: 'العمليات الجارية',
    activeProjects: 'المشاريع النشطة',
    teamMessages: 'رسائل الفريق',
    smartNotifications: 'الإشعارات الذكية',
    upcomingEvents: 'الفعاليات القادمة',
    latestMail: 'أحدث البريد',
    recentNotifications: 'الإشعارات الأخيرة',
    
    // Status
    inProgress: 'قيد التنفيذ',
    completed: 'مكتمل',
    pending: 'معلق',
    urgent: 'عاجل',
    warning: 'تحذير',
    success: 'نجح',
    
    // Actions
    viewAll: 'عرض الكل',
    newTask: 'مهمة جديدة',
    newProject: 'مشروع جديد',
    search: 'بحث...',
    viewMail: 'عرض البريد',
    openProject: 'فتح المشروع',
    notifyDepartment: 'إشعار القسم',
    
    // Pulse AI
    pulseAI: 'Pulse AI',
    aiSummary: 'ملخص ذكي',
    suggestions: 'اقتراحات',
    showSummary: 'عرض الملخص',
    
    // Time
    today: 'اليوم',
    thisWeek: 'هذا الأسبوع',
    overdue: 'متأخر',
    
    // Fields
    subject: 'الموضوع',
    assignedTo: 'مُعيّن إلى',
    status: 'الحالة',
    date: 'التاريخ',
    projectName: 'اسم المشروع',
    phase: 'المرحلة',
    progress: 'التقدم',
    title: 'العنوان',
    time: 'الوقت',
    message: 'الرسالة',
    type: 'النوع'
  },
  en: {
    // Navigation
    dashboard: 'Dashboard',
    messages: 'Messages',
    tasks: 'Tasks',
    projects: 'Projects',
    files: 'Files',
    calendar: 'Calendar',
    analytics: 'Analytics',
    settings: 'Settings',
    mail: 'Mail',
    events: 'Events',
    notifications: 'Notifications',
    
    // Dashboard
    welcome: 'Welcome to HYPER',
    activeOperations: 'Active Operations',
    activeProjects: 'Active Projects',
    teamMessages: 'Team Messages',
    smartNotifications: 'Smart Notifications',
    upcomingEvents: 'Upcoming Events',
    latestMail: 'Latest Mail',
    recentNotifications: 'Recent Notifications',
    
    // Status
    inProgress: 'In Progress',
    completed: 'Completed',
    pending: 'Pending',
    urgent: 'Urgent',
    warning: 'Warning',
    success: 'Success',
    
    // Actions
    viewAll: 'View All',
    newTask: 'New Task',
    newProject: 'New Project',
    search: 'Search...',
    viewMail: 'View Mail',
    openProject: 'Open Project',
    notifyDepartment: 'Notify Department',
    
    // Pulse AI
    pulseAI: 'Pulse AI',
    aiSummary: 'AI Summary',
    suggestions: 'Suggestions',
    showSummary: 'Show Summary',
    
    // Time
    today: 'Today',
    thisWeek: 'This Week',
    overdue: 'Overdue',
    
    // Fields
    subject: 'Subject',
    assignedTo: 'Assigned To',
    status: 'Status',
    date: 'Date',
    projectName: 'Project Name',
    phase: 'Phase',
    progress: 'Progress',
    title: 'Title',
    time: 'Time',
    message: 'Message',
    type: 'Type'
  }
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar')
  const isRTL = language === 'ar'

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}