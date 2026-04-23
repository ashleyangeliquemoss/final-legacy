'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const runtime = 'edge'

export default function Gate1LocationPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    location_of_death: '',
    death_type: '',
    doctor_or_hospital: '',
    urgency_notes: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    sessionStorage.setItem('gate1_location', JSON.stringify(form))
    router.push('/gate/1/arrangements')
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f6f1' }}>

      {/* Top nav */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e0d8', padding: '0 24px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
        <button
          onClick={() => router.push('/gate/1/deceased')}
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
            <div key={s} style={{ flex: 1, height: '4px', borderRadius: '2px', backgroundColor: s <= 3 ? '#4a9068' : '#e5e0d8' }} />
          ))}
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4a9068', margin: '0 0 8px 0' }}>Step 3 of 5</h3>
          <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#1c1c1c', margin: '0 0 8px 0' }}>Location and circumstances</h1>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Help us understand where and how the passing occurred so we can coordinate accordingly.</p>
        </div>

        <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: '32px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>Location of death / body</label>
              <input
                type="text"
                name="location_of_death"
                value={form.location_of_death}
                onChange={handleChange}
                required
                placeholder="e.g. SGH Ward 5, or 123 Tampines Street"
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>Type of death</label>
              <select
                name="death_type"
                value={form.death_type}
                onChange={handleChange}
                required
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none', backgroundColor: '#ffffff' }}
              >
                <option value="">Select type</option>
                <option value="hospital">In hospital</option>
                <option value="home_natural">At home — natural causes</option>
                <option value="home_sudden">At home — sudden or unexpected</option>
                <option value="accident">Accident</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>Doctor or hospital name <span style={{ color: '#6b7280', fontWeight: '400' }}>(if applicable)</span></label>
              <input
                type="text"
                name="doctor_or_hospital"
                value={form.doctor_or_hospital}
                onChange={handleChange}
                placeholder="e.g. Dr. Tan, Singapore General Hospital"
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#1c1c1c', marginBottom: '6px' }}>Urgency notes or special instructions <span style={{ color: '#6b7280', fontWeight: '400' }}>(optional)</span></label>
              <textarea
                name="urgency_notes"
                value={form.urgency_notes}
                onChange={handleChange}
                rows={4}
                placeholder="Anything else we should know right now..."
                style={{ width: '100%', border: '1px solid #e5e0d8', borderRadius: '6px', padding: '10px 12px', fontSize: '14px', color: '#1c1c1c', outline: 'none', resize: 'vertical' }}
              />
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
