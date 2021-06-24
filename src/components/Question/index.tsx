import { ReactNode } from 'react'
import './styles.scss'

type QuestionProps = {
  children?: ReactNode
  content: string
  author: {
    name: string
    avatar: string
  }
}

function Question({ author, content,children }: QuestionProps) {
  return (
    <div className="question">
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
