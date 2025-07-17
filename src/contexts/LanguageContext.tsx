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
    
    // Dashboard
    welcome: 'مرحباً بك في HYPER',
    activeOperations: 'العمليات الجارية',
    activeProjects: 'المشاريع النشطة',
    teamMessages: 'رسائل الفريق',
    smartNotifications: 'الإشعارات الذكية',
    upcomingEvents: 'الفعاليات القادمة',
    
    // Status
    inProgress: 'قيد التنفيذ',
    completed: 'مكتمل',
    pending: 'معلق',
    urgent: 'عاجل',
    
    // Actions
    viewAll: 'عرض الكل',
    newTask: 'مهمة جديدة',
    newProject: 'مشروع جديد',
    search: 'بحث...',
    
    // Pulse AI
    pulseAI: 'Pulse AI',
    aiSummary: 'ملخص ذكي',
    suggestions: 'اقتراحات',
    
    // Time
    today: 'اليوم',
    thisWeek: 'هذا الأسبوع',
    overdue: 'متأخر'
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
    
    // Dashboard
    welcome: 'Welcome to HYPER',
    activeOperations: 'Active Operations',
    activeProjects: 'Active Projects',
    teamMessages: 'Team Messages',
    smartNotifications: 'Smart Notifications',
    upcomingEvents: 'Upcoming Events',
    
    // Status
    inProgress: 'In Progress',
    completed: 'Completed',
    pending: 'Pending',
    urgent: 'Urgent',
    
    // Actions
    viewAll: 'View All',
    newTask: 'New Task',
    newProject: 'New Project',
    search: 'Search...',
    
    // Pulse AI
    pulseAI: 'Pulse AI',
    aiSummary: 'AI Summary',
    suggestions: 'Suggestions',
    
    // Time
    today: 'Today',
    thisWeek: 'This Week',
    overdue: 'Overdue'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
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

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}