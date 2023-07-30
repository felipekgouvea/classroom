import { DiscordLogo, Lightning } from 'phosphor-react'
import { Button } from './Button'
import { DefaultUi, Player, Youtube } from '@vime/react'

import '@vime/core/themes/default.css'

export const Video = () => {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="XNgXVY4GeB0" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold ">
              Aula 01 - Abertura do Evento Ignite Lab
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed text-justify">
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/felipekgouvea.png"
                alt=""
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Felipe Kinupes Gouvêa
                </strong>
                <span className="text-gray-200 text-sm block">
                  Diretor do CERG
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text-sm flex items-center gap-2 justify-center bg-green-500 rounded uppercase font-bold hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade no Discord
            </a>
            <a
              href=""
              className="p-4 text-sm flex items-center gap-2 justify-center border border-blue-500 text-blue-500 rounded uppercase font-bold transition-colors
                       hover:bg-blue-500 hover:text-gray-900"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <Button
            title="Material de apoio"
            desc="Acesse o material complementar para acelerar o seu desenvolvimento"
            icon="material"
          />
          <Button
            title="Wallpapers exclusivos"
            desc="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            icon="wallpapers"
          />
        </div>
      </div>
    </div>
  )
}
