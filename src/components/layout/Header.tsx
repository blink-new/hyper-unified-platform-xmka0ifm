import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Bell, 
  Settings, 
  Globe,
  Command,
  Plus
} from 'lucide-react'

export default function Header() {
  const { language, setLanguage, isRTL, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar')
  }

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-primary">HYPER</span>
          </div>
          
          {/* Command Bar */}
          <div className="relative">
            <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder={t('search')}
              className="pl-10 rtl:pl-4 rtl:pr-10 w-96 bg-gray-50 border-0"
            />
            <div className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 transform -translate-y-1/2">
              <Badge variant="secondary" className="text-xs">
                <Command className="w-3 h-3 mr-1 rtl:mr-0 rtl:ml-1" />
                K
              </Badge>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Quick Actions */}
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-primary">
            <Plus className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
            {t('newTask')}
          </Button>

          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="text-gray-600 hover:text-primary"
          >
            <Globe className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
            {language === 'ar' ? 'EN' : 'عر'}
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <Badge className="absolute -top-1 -right-1 rtl:-right-auto rtl:-left-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              3
            </Badge>
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="sm">
            <Settings className="w-5 h-5 text-gray-600" />
          </Button>

          {/* User Avatar */}
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-primary text-white">أح</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}