import { useState } from 'react'
import { supabase } from '@/lib/initSupabase'

export default function Confirm() {
  return (
    <div>
      <h1>Confirm your email</h1>
      Confirm your email address by clicking the link in the email.
    </div>
  )
}
