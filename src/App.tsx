import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { routerBasename } from '@/lib/utils'

const HomePage = lazy(() => import('@/pages/Home').then((m) => ({ default: m.HomePage })))
const ProjectsPage = lazy(() =>
  import('@/pages/Projects').then((m) => ({ default: m.ProjectsPage })),
)
const ProjectDetailsPage = lazy(() =>
  import('@/pages/ProjectDetails').then((m) => ({ default: m.ProjectDetailsPage })),
)
const MissionVisionPage = lazy(() =>
  import('@/pages/MissionVision').then((m) => ({ default: m.MissionVisionPage })),
)
const PrivacyPolicyPage = lazy(() =>
  import('@/pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicyPage })),
)
const TermsPage = lazy(() => import('@/pages/Terms').then((m) => ({ default: m.TermsPage })))

function PageLoader() {
  return (
    <div className="container-premium flex min-h-[50vh] items-center justify-center text-sm text-muted">
      Loading…
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:slug" element={<ProjectDetailsPage />} />
            <Route path="mission-vision" element={<MissionVisionPage />} />
            <Route path="about" element={<Navigate to="/mission-vision" replace />} />
            <Route path="contact" element={<Navigate to="/" replace />} />
            <Route path="book-site-visit" element={<Navigate to="/" replace />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
