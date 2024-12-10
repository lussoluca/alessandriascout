import Container from '@/components/Container'

function Title({ title, subtitle = '' }) {
  const hasSubtitle = subtitle !== ''

  const renderSubtitle = () => {
    if (hasSubtitle) {
      return <p className=" mt-6 text-base text-ocean-blue">{subtitle}</p>
    }
  }

  return (
    <Container className="mb-10">
      <div className=" max-w-2xl">
        <h1 className="text-4xl font-scout tracking-tight text-scouting-purple sm:text-5xl">
          {title}
        </h1>
        {renderSubtitle()}
      </div>
    </Container>
  )
}

export default Title
