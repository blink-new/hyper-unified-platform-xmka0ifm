import React, { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { 
  Zap,
  Brain,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  Send,
  Minimize2,
  Maximize2,
  X
} from 'lucide-react'

export default function PulseAI() {
  const { t, language, isRTL } = useLanguage()
  const [isMinimized, setIsMinimized] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [message, setMessage] = useState('')

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-primary shadow-lg"
        >
          <Zap className="w-6 h-6" />
        </Button>
      </div>
    )
  }

  const aiInsights = [
    {
      type: 'urgent',
      title: language === 'ar' ? 'مهام متأخرة تحتاج انتباه' : 'Overdue tasks need attention',
      description: language === 'ar' ? '3 مهام متأخرة في مشروع التحول الرقمي' : '3 overdue tasks in Digital Transformation project',
      action: language === 'ar' ? 'مراجعة المهام' : 'Review Tasks'
    },
    {
      type: 'suggestion',
      title: language === 'ar' ? 'اقتراح تحسين الكفاءة' : 'Efficiency improvement suggestion',
      description: language === 'ar' ? 'يمكن دمج اجتماعين لتوفير الوقت' : 'Two meetings can be merged to save time',
      action: language === 'ar' ? 'عرض التفاصيل' : 'View Details'
    },
    {
      type: 'trend',
      title: language === 'ar' ? 'تحسن في الأداء' : 'Performance improvement',
      description: language === 'ar' ? 'زيادة 15% في إنجاز المهام هذا الأسبوع' : '15% increase in task completion this week',
      action: language === 'ar' ? 'عرض التقرير' : 'View Report'
    }
  ]

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'urgent': return <AlertCircle className="w-5 h-5 text-red-500" />
      case 'suggestion': return <Lightbulb className="w-5 h-5 text-yellow-500" />
      case 'trend': return <TrendingUp className="w-5 h-5 text-green-500" />
      default: return <Brain className="w-5 h-5 text-blue-500" />
    }
  }

  return (
    <div className={`fixed ${isExpanded ? 'inset-4' : 'top-4 right-4 rtl:right-auto rtl:left-4 bottom-4'} z-40 transition-all duration-300`}>
      <Card className={`${isExpanded ? 'w-full h-full' : 'w-80 h-auto max-h-[calc(100vh-2rem)]'} shadow-xl border-accent/20`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-gradient-to-r from-accent/10 to-primary/10">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Zap className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2 text-accent" />
            {t('pulseAI')}
            <Badge variant="secondary" className="ml-2 rtl:ml-0 rtl:mr-2 bg-green-100 text-green-700">
              {language === 'ar' ? 'نشط' : 'Active'}
            </Badge>
          </CardTitle>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(true)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-4 space-y-4 overflow-y-auto">
          {/* AI Status */}
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-800">
                {language === 'ar' ? 'Pulse AI يراقب مساحة العمل' : 'Pulse AI monitoring workspace'}
              </span>
            </div>
            <p className="text-xs text-green-600 mt-1">
              {language === 'ar' ? 'تم تحليل 24 عملية و 8 مشاريع' : 'Analyzed 24 operations and 8 projects'}
            </p>
          </div>

          {/* AI Insights */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 flex items-center">
              <Brain className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
              {language === 'ar' ? 'رؤى ذكية' : 'Smart Insights'}
            </h4>
            
            {aiInsights.map((insight, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  {getInsightIcon(insight.type)}
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 text-sm mb-1">
                      {insight.title}
                    </h5>
                    <p className="text-xs text-gray-600 mb-2">
                      {insight.description}
                    </p>
                    <Button variant="outline" size="sm" className="text-xs h-7">
                      {insight.action}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">
              {language === 'ar' ? 'إجراءات سريعة' : 'Quick Actions'}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="text-xs">
                {language === 'ar' ? 'ملخص اليوم' : 'Daily Summary'}
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                {language === 'ar' ? 'تقرير الفريق' : 'Team Report'}
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                {language === 'ar' ? 'تحليل الأداء' : 'Performance Analysis'}
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                {language === 'ar' ? 'اقتراحات' : 'Suggestions'}
              </Button>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="space-y-3 border-t pt-4">
            <h4 className="font-medium text-gray-900">
              {language === 'ar' ? 'اسأل Pulse AI' : 'Ask Pulse AI'}
            </h4>
            <div className="space-y-2">
              <Textarea
                placeholder={language === 'ar' ? 'اكتب سؤالك هنا...' : 'Type your question here...'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[60px] text-sm"
              />
              <Button 
                size="sm" 
                className="w-full bg-accent hover:bg-accent/90 text-primary"
                disabled={!message.trim()}
              >
                <Send className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                {language === 'ar' ? 'إرسال' : 'Send'}
              </Button>
            </div>
          </div>

          {/* Recent AI Activity */}
          <div className="space-y-3 border-t pt-4">
            <h4 className="font-medium text-gray-900 text-sm">
              {language === 'ar' ? 'النشاط الأخير' : 'Recent Activity'}
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span>{language === 'ar' ? 'تم تحليل 3 مهام جديدة' : 'Analyzed 3 new tasks'}</span>
                <span className="text-gray-400">2 دقائق</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span>{language === 'ar' ? 'تم إنشاء ملخص المشروع' : 'Generated project summary'}</span>
                <span className="text-gray-400">5 دقائق</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                <span>{language === 'ar' ? 'تم اكتشاف تأخير محتمل' : 'Detected potential delay'}</span>
                <span className="text-gray-400">10 دقائق</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}