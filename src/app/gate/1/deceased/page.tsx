'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const runtime = 'edge'

export default function Gate1DeceasedPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    full_name: '',
    nric: '',
    date_of_birth: '',
    nationality: '',
    religion: '',
    cremation_or_burial: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    sessionStorage.setItem('gate1_deceased', JSON.stringify(form))
    router.push('/gate/1/location')
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f6f1' }}>

      {/* Top nav */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e0d8', padding: '0 24px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
        <button
          onClick={() => router.push('/gate/1/reporter')}
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
            <div key={s} style={{ flex: 1, height: '4px', borderRadius: '2px', backgroundColor: s <= 2 ? '#4a9068' : '#e5e0d8' }} />
          ))}
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4a9068', margin: '0 0 8px 0' }}>Step 2 of 5</h3>
          <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#1c1c1c', margin: '0 0 8px 0' }}>About the deceased</h1>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Share what you know. You can leave fields blank if you don't have the information right now.</p>
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
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>NRIC / ID number <span style={{ color: '#6b7280', fontWeight: '400' }}>(if available)</span></label>
              <input
                type="text"
                name="nric"
                value={form.nric}
                onChange={handleChange}
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>Date of birth <span style={{ color: '#6b7280', fontWeight: '400' }}>(if known)</span></label>
              <input
                type="date"
                name="date_of_birth"
                value={form.date_of_birth}
                onChange={handleChange}
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>Nationality</label>
              <input
                type="text"
                name="nationality"
                value={form.nationality}
                onChange={handleChange}
                placeholder="e.g. Singaporean"
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>Religion / ritual preference</label>
              <select
                name="religion"
                value={form.religion}
                onChange={handleChange}
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none', backgroundColor: '#ffffff' }}
              >
                <option value="">Select religion</option>
                <option value="buddhist">Buddhist</option>
                <option value="taoist">Taoist</option>
                <option value="christian">Christian</option>
                <option value="catholic">Catholic</option>
                <option value="muslim">Muslim</option>
                <option value="hindu">Hindu</option>
                <option value="secular">Secular / No religion</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>Cremation or burial</label>
              <select
                name="cremation_or_burial"
                value={form.cremation_or_burial}
                onChange={handleChange}
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none', backgroundColor: '#ffffff' }}
              >
                <option value="">Select preference</option>
                <option value="cremation">Cremation</option>
                <option value="burial">Burial</option>
                <option value="unknown">Not sure yet</option>
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
