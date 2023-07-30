import { CheckCircle, Lock } from 'phosphor-react'
import { LessonType } from './types/LessonType'
import { isPast, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface LessonProps {
  lesson: LessonType
}

export const Lesson = ({ lesson }: LessonProps) => {
  const isLessonAvailable = isPast(lesson.availableAt)
  const availableDateFormatted = format(
    lesson.availableAt,
    "EEEE ' •' d 'de' MMMM' •' H'h'm",
    { locale: ptBR },
  )

  return (
    <a href="#">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex gap-2 items-center">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex gap-2 items-center">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {lesson.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{lesson.title}</strong>
      </div>
    </a>
  )
}
