'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const runtime = 'edge'

export default function Gate1ReporterPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    full_name: '',
    mobile: '',
    email: '',
    relationship: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    sessionStorage.setItem('gate1_reporter', JSON.stringify(form))
    router.push('/gate/1/deceased')
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f6f1' }}>

      {/* Top nav */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e0d8', padding: '0 24px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
        <button
          onClick={() => router.push('/gate/1')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '6px 14px', fontSize: '13px', fontWeight: '500', color: '#1c1c1c', cursor: 'pointer' }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
        <span style={{ fontSize: '15px', fontWeight: '700', color: '#4a9068' }}>Final Legacy</span>
        <div style={{ width: '80px' }} />
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 16px' }}>

        {/* Progress */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '32px' }}>
          {[1,2,3,4,5].map((s) => (
            <div key={s} style={{ flex: 1, height: '4px', borderRadius: '2px', backgroundColor: s === 1 ? '#4a9068' : '#e5e0d8' }} />
          ))}
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4a9068', margin: '0 0 8px 0' }}>Step 1 of 5</h3>
          <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#1c1c1c', margin: '0 0 8px 0' }}>Your details</h1>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Tell us who you are and how to reach you.</p>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: '32px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>Full name</label>
              <input
                type="text"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>Mobile number</label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>Email address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>Your relationship to the deceased</label>
              <select
                name="relationship"
                value={form.relationship}
                onChange={handleChange}
                required
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none', backgroundColor: '#ffffff' }}
              >
                <option value="">Select relationship</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="grandchild">Grandchild</option>
                <option value="relative">Other relative</option>
                <option value="friend">Friend</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              style={{ width: '100%', backgroundColor: '#4a9068', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', marginTop: '8px' }}
            >
              Continue
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}
