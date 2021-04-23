function Event({description, children}) {
  return (
    <div className="icon">
      <div className="event-card">{description}</div>
      {children}
    </div>
  )
}

export {Event}
