import Container from '@/components/Container'

function Title({ title, subtitle = '' }) {
  const hasSubtitle = subtitle !== ''

  const renderSubtitle = () => {
    if (hasSubtitle) {
      return <p className="text-ocean-blue mt-6 text-base">{subtitle}</p>
    }
  }

  return (
    <Container className="mb-10">
      <div className="max-w-2xl">
        <h1 className="font-scout text-scouting-purple text-4xl tracking-tight sm:text-5xl">
          {title}
        </h1>
        {renderSubtitle()}
      </div>
    </Container>
  )
}

export default Title
