import React from 'react'

export default function Imges({theObject}) {
  return (
    <img src={theObject.logo} alt={theObject.name} style={{maxHeight:'50px',maxWidth:'50px'}} />
    )
}
