import React from 'react'

export default function Candidate(props) {
  const candidate = props.user
  return (
    <div className= "candidate">
      {candidate.id}
    </div>
  )
}
