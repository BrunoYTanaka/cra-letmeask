import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import RoomCode from '../../components/RoomCode'
import Button from '../../components/Button'
import Question from '../../components/Question'
import logoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'


import './styles.scss'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'
import { useRoom } from '../../hooks/useRoom'


type RoomParams = {
  id: string
}

export function AdminRoom() {
  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const roomId = params.id
  const { title, questions } = useRoom(roomId)

  const handleDeleteQuestion =async (questionId: string) => {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      const questionRef = await database.ref(`rooms/${roomId}/questions/${questionId}`).remove() 

    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar Sala </Button>
          </div>
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>Sala  {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>
        <div className="question-list">
          {questions.map(question => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            >
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </button>
            </Question>
          ))}
        </div>
      </main>
    </div>
  )
}

