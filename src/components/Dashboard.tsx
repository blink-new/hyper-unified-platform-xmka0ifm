import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import DashboardGrid from '@/components/dashboard/DashboardGrid'
import PulseAI from '@/components/ai/PulseAI'

export default function Dashboard() {
  const { isRTL } = useLanguage()

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <DashboardGrid />
          </div>
        </main>
      </div>
      
      {/* Pulse AI Panel */}
      <PulseAI />
    </div>
  )
}