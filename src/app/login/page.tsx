'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export const runtime = 'edge'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{backgroundColor: '#f8f6f1'}}>
      <div className="max-w-md w-full rounded-lg shadow-sm p-8" style={{backgroundColor: '#ffffff'}}>
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-1" style={{color: '#1c1c1c'}}>Welcome back</h1>
          <p className="text-sm" style={{color: '#6b7280'}}>Sign in to your Final Legacy account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1.5" style={{color: '#1c1c1c'}}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
              style={{border: '1px solid #e5e0d8', color: '#1c1c1c', backgroundColor: '#ffffff'}}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5" style={{color: '#1c1c1c'}}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
              style={{border: '1px solid #e5e0d8', color: '#1c1c1c', backgroundColor: '#ffffff'}}
            />
          </div>

          {error && <p className="text-sm" style={{color: '#c0392b'}}>{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md py-2.5 text-sm font-medium transition-colors disabled:opacity-50"
            style={{backgroundColor: '#4a9068', color: '#f8f6f1'}}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p className="mt-6 text-sm text-center" style={{color: '#6b7280'}}>
          Don't have an account?{' '}
          <a href="/signup" className="font-medium hover:underline" style={{color: '#4a9068'}}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
