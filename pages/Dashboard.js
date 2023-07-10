/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import pesoBruto from '@/img/pesoBruto.jpeg'
import bgPesado from '../img/bgPesado.jpg'
import bgCaminhao from '../img/bgCaminhao.jpg'
import bgPesado3 from '../img/bgPesado3.jpeg'
import bgPesado2 from '../img/bgPesado2.jpeg'
import bgUtilitario from '../img/bgUtilitario.jpg'
import bgLeve from '../img/bgLeve.jpeg'

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-center">
        <Image width={400} height={500} src={pesoBruto} />
      </div>
      <div className="flex justify-center mt-10 text-5xl font-bold">
        <h1>Guincho Peso Bruto Auto Socorro 24H</h1>
      </div>
      <div className="flex justify-center text-2xl font-bold text-red-600">
        <p className="mt-2">Serviço de guincho para veículos leves e pesados</p>
      </div>
      <div className="md:grid md:grid-cols-3 justify-center gap-2 mt-10">
        <Image className="mb-2 w-96 h-56" src={bgPesado} />
        <Image className="mb-2 w-96 h-56" src={bgCaminhao} />
        <Image className="mb-2 w-96 h-56" src={bgPesado3} />
      </div>
      <div className="md:grid md:grid-cols-3 justify-center gap-2 mt-3">
        <Image className="mb-2 w-96 h-56" src={bgPesado2} />
        <Image className="mb-2 w-96 h-56" src={bgUtilitario} />
        <Image className="mb-2 w-96 h-56" src={bgLeve} />
      </div>
    </div>
  )
}
