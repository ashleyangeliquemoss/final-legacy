import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome to Final Legacy</h1>
        <p className="text-gray-500 mb-8">Signed in as {user.email}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/gate/1" className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Emergency</h2>
            <p className="text-gray-500 text-sm">Someone has just passed. Get immediate help and guidance.</p>
          </a>

          <a href="/gate/2" className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Plan for Myself</h2>
            <p className="text-gray-500 text-sm">Pre-arrange your own funeral and leave clear instructions.</p>
          </a>

          <a href="/gate/3" className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Plan for Family</h2>
            <p className="text-gray-500 text-sm">Arrange a plan for a parent or family member.</p>
          </a>
        </div>
      </div>
    </div>
  )
}
