import React, { useState } from 'react'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/layout/Header'
import NewDashboard from '@/components/dashboard/NewDashboard'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { DashboardProvider } from '@/contexts/DashboardContext'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <DashboardProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <NewDashboard />
          <Toaster />
        </div>
      </DashboardProvider>
    </LanguageProvider>
  )
}

export default App