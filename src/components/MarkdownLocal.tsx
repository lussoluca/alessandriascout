import { useRemarkSync } from 'react-remark'

const MarkdownLocal = ({ content }) => {
  return useRemarkSync(content)
}

export default MarkdownLocal
