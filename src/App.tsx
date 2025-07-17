import React, { useState } from 'react'
import { Toaster } from '@/components/ui/toaster'
import Dashboard from '@/components/Dashboard'
import { LanguageProvider } from '@/contexts/LanguageContext'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Dashboard />
        <Toaster />
      </div>
    </LanguageProvider>
  )
}

export default App