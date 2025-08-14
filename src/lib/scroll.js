export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 70
  window.scrollTo({ top: y, behavior: 'smooth' })
}
