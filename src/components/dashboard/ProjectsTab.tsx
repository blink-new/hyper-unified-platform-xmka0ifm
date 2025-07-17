import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { mockData } from '@/data/mockData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { 
  FolderOpen, 
  Search, 
  Eye, 
  Filter,
  User,
  Calendar,
  TrendingUp
} from 'lucide-react'

export default function ProjectsTab() {
  const { t, isRTL } = useLanguage()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'inProgress': return 'bg-blue-100 text-blue-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 50) return 'bg-blue-500'
    if (progress >= 25) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FolderOpen className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">📁 {t('projects')}</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder={t('search')}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            تصفية
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            + {t('newProject')}
          </Button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6">
        {mockData.projects.map((project) => (
          <Card key={project.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl">{project.projectName}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {t('phase')}: {project.phase}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {project.manager}
                    </div>
                  </div>
                </div>
                <Badge className={getStatusColor(project.status)}>
                  {t(project.status)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {t('progress')}
                  </span>
                  <span className="font-semibold text-primary">{project.progress}%</span>
                </div>
                <Progress 
                  value={project.progress} 
                  className="h-3"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    'w-3 h-3 rounded-full',
                    getProgressColor(project.progress)
                  )} />
                  <span className="text-sm text-muted-foreground">
                    {project.progress >= 80 ? 'قريب من الإنجاز' : 
                     project.progress >= 50 ? 'في المسار الصحيح' : 
                     project.progress >= 25 ? 'يحتاج متابعة' : 'بداية المشروع'}
                  </span>
                </div>
                <Button size="sm" variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  {t('openProject')}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-6">
        <Button variant="outline" className="px-8">
          تحميل المزيد
        </Button>
      </div>
    </div>
  )
}