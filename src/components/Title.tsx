import Container from '@/components/Container'

function Title({ title, subtitle = '' }) {
  const hasSubtitle = subtitle !== ''

  const renderSubtitle = () => {
    if (hasSubtitle) {
      return <p className=" mt-6 text-base text-zinc-600">{subtitle}</p>
    }
  }

  return (
    <Container className="mb-20">
      <div className=" max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
          {title}
        </h1>
        {renderSubtitle()}
      </div>
    </Container>
  )
}

export default Title
