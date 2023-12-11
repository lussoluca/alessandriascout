import { parseISO, format } from 'date-fns'
import { it } from 'date-fns/locale'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, 'd LLLL yyyy', { locale: it, weekStartsOn: 1 })}
    </time>
  )
}

export default DateFormatter
