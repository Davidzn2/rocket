import { Carousel, Typography, Button } from "@material-tailwind/react";
import Back1 from '../../static/fondos/back1.jpg'
import Back2 from '../../static/fondos/back2.jpg'
import Back3 from '../../static/fondos/back3.jpg'
import Back4 from '../../static/fondos/back4.jpg'
import Back5 from '../../static/fondos/back5.jpg'
import Back6 from '../../static/fondos/back6.jpg'

import { Link } from 'react-router-dom'

export default function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src={Back1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Emprender es el primer paso hacia el logro de tus sueños. ¡No esperes más!
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to="/inscribete">
                <Button size="lg" color="white">
                  Inscribete ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={Back2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              El único limitante para tus ideas eres tú mismo. ¡Confía en ti y ve tras ellas!
            </Typography>
            <div className="flex gap-2">
              <Link to="/inscribete">
                <Button size="lg" color="white">
                  Inscribete ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={Back3}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              ¡Confía en tu potencial y ve tras tus metas!
            </Typography>
            <div className="flex gap-2">
              <Link to="/inscribete">
                <Button size="lg" color="white">
                  Inscribete ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={Back4}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              ¡Si tienes una idea, tienes el poder de cambiar el mundo!
            </Typography>
            <div className="flex gap-2">
              <Link to="/inscribete">
                <Button size="lg" color="white">
                  Inscribete ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}