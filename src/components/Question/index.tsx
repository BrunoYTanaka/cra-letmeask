import { ReactNode } from 'react'
import './styles.scss'
import clx from 'classnames'

type QuestionProps = {
  children?: ReactNode
  content: string
  author: {
    name: string
    avatar: string
  }
  isHighlighted?: boolean,
  isAnswered?: boolean
}
function Question({
  author,
  content,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <div className={
      clx('question',
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  )
}

export default Question
