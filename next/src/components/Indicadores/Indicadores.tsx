import { AnimatedBox } from "../AnimatedBox";

function Indicador({ title, value, description }: { title: string, value: string, description: string }) {
    return (
        <AnimatedBox>
            <h1 className="text-8xl text-font-grey-500 font-slim">{value}</h1>
            <p className="text-black text-base font-slim w-1/2">{description}</p>
        </AnimatedBox>
    )
}

function Indicadores() {
    return (
        <div className="grid grid-cols-5 px-36">
            <Indicador title="Años de experiencia" value="50" description="Años de experiencia" />
            <Indicador title="Países" value="16" description="Países" />
            <Indicador title="Millones de m2 diseñados" value="4" description="Millones de m2 diseñados" />
            <Indicador title="Premios" value="11" description="Premios" />
            <Indicador title="Proyectos en México y LATAM" value="100" description="Proyectos en México y LATAM" />
        </div>
    )
}

export default Indicadores;