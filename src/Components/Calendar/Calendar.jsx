import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export default function DefaultTimeline() {
  return (
    <div className="w-full md:w-[32rem]">
      <h2 className="m-10 text-4xl font-bold">
        Etapas
      </h2>
      <Timeline className="m-10">
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Deseabilidad
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" color="gary" className="font-normal text-gray-600">
              Los emprendedores evaluarán si su proyecto es deseable para el mercado. Veremos qué tan deseable es según la cantidad de likes que consigan en la plataforma.
              Los ganadores de la primera fase serán los 20 proyectos más atractivos, de acuerdo con los likes que obtuvieron y la consideración de los jueces.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Factibilidad
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" color="gary" className="font-normal text-gray-600">
              En esta fase se medirá que la operación del proyecto sea realista; que la operación se pueda lograr.
              Se elegirán 10 proyectos para la semifinal.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Viabilidad
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" color="gary" className="font-normal text-gray-600">
              En esta fase se medirá que el proyecto se sostenga en fondos propios. Se revisarán temas como punto de equilibrio, corrida financiera, análisis de costos, inversión, proyecciones y utilidad.
              Se elegirán 5 proyectos para la fase final de premiación.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Pitch
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" color="gary" className="font-normal text-gray-600">
              El último día se realiza una sesión donde los 5 proyectos seleccionados para presentar harán su pitch de venta a los panelistas elegidos.
              El grupo de panelistas elegirá qué proyectos cumplen con los tres pilares:
              <ul>
                <li>Deseabilidad</li>
                <li>Factibilidad</li>
                <li>Viabilidad</li>
              </ul>
              De aquí se elegirán a los tres primeros lugares como ganadores.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}