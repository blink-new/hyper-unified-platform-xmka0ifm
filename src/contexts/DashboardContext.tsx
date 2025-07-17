/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { mockUser } from '@/data/mockData'

export type UserRole = 'Manager' | 'User'

export interface User {
  id: string
  name: string
  nameEn: string
  email: string
  avatar: string
  department: string
  departmentEn: string
  role: string
  lastActive: string
  permissions: string[]
  access: string[]
}

export interface DashboardContextType {
  userRole: UserRole
  setUserRole: (role: UserRole) => void
  activeTab: string
  setActiveTab: (tab: string) => void
  calendarView: 'hijri' | 'gregorian'
  setCalendarView: (view: 'hijri' | 'gregorian') => void
  user: User
}

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<UserRole>('Manager')
  const [activeTab, setActiveTab] = useState('📊 Dashboard')
  const [calendarView, setCalendarView] = useState<'hijri' | 'gregorian'>('hijri')

  return (
    <DashboardContext.Provider value={{
      userRole,
      setUserRole,
      activeTab,
      setActiveTab,
      calendarView,
      setCalendarView,
      user: mockUser
    }}>
      {children}
    </DashboardContext.Provider>
  )
}