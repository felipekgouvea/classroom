import { CaretRight, FileArrowDown, ImageSquare } from 'phosphor-react'

interface ButtonProps {
  title: string
  desc: string
  icon: string
}

export const Button = (props: ButtonProps) => {
  return (
    <a
      href=""
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
    >
      <div className="bg-green-700 h-full p-6 flex items-center">
        {props.icon === 'material' ? (
          <FileArrowDown size={40} />
        ) : (
          <ImageSquare size={40} />
        )}
      </div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{props.title}</strong>
        <p className="text-sm text-gray-200 mt-2">{props.desc}</p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  )
}
