/* eslint-disable jsx-a11y/alt-text */
import Layout from '../components/Layout'
import Image from 'next/image'
import paneSeca from '../icons/paneSeca.svg'
import truck from '../icons/truck.svg'
import pneuSvg from '../icons/pneuSvg.svg'
import battery from '../icons/battery.svg'

export default function Services() {
  return (
    <Layout>
      <>
        <div className="flex justify-center mt-10 text-5xl font-bold text-red-600">
          <h1 className="flex justify-center">SERVIÇOS 24 HORAS</h1>
        </div>

        <div className="md:flex flex-col-4 justify-around gap-2 mt-28">
          <div className="flex flex-col mb-10">
            <Image className="mb-2 w-26 h-20 " src={paneSeca} />
            <h1 className="text-2xl font-bold flex justify-center">
              PANE SECA
            </h1>
          </div>

          <div className="flex flex-col mb-10">
            <Image className="mb-2 w-26 h-20 " src={truck} />
            <h1 className="text-2xl font-bold flex justify-center ">GUINCHO</h1>
          </div>

          <div className="flex flex-col mb-10">
            <Image className="mb-2 w-26 h-20 " src={pneuSvg} />
            <h1 className="text-2xl font-bold flex justify-center">
              TROCA DE PNEU
            </h1>
          </div>

          <div className="flex flex-col mb-10">
            <Image className="mb-2 w-26 h-20 " src={battery} />
            <h1 className="text-2xl font-bold flex justify-center">
              CARGA DE BATERIA
            </h1>
          </div>
        </div>
      </>
    </Layout>
  )
}
