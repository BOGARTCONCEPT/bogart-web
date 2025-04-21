"use client";

import ArrowScrollDownComponent from "../components/ArrowScrollDownComponent";
import NavbarComponent from "../components/NavbarComponent";

export default function ScrollAnimation() {
  return (
    <>
    
      <div className="hidden sm:block">
        <div className="h-screen font-gotham-bold overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <section className="h-screen snap-start bg-zinc-900 ">
          <NavbarComponent isFixed={true}/>  
            <div className="  w-full h-full flex flex-col items-center min-h-screen ">
              <div className="flex flex-col sm:flex-row">
                <div className="flex flex-col w-full h-64 sm:min-h-screen justify-center px-2 ">
                  <span className=" text-2xl sm:text-4xl font-bold text-right ">
                    Animaciones 3D
                  </span>
                  <div className="w-full flex justify-end">
                    <span className="sm:text-lg font-bold w-3/4 pt-4 sm:pt-6  text-right">
                      Creamos pequeñas historias que metaforizan el mensaje de Bogart. Un universo creativo inventado por nosotros para inspirar desde lo visual y lo simbólico.
                    </span>
                  </div>
                </div>
                <div className="w-full min-h-screen items-center flex justify-start px-6">
                  <div className="py-8">
                      <img              
                        src="/imgs/VERTICAL.png"
                        alt="3D Animation"
                        className="w-[700px] h-[850px] object-cover rounded-lg"
                        />
                    </div>
                </div>
              </div>              
              <div className="relative bottom-10 left-5">
                <ArrowScrollDownComponent/>
              </div>
            </div>
          </section>
          <section className="h-screen snap-start bg-zinc-900">
            <div className="w-full flex flex-col sm:flex-row items-center min-h-screen">
              <div className="w-full items-center flex justify-end px-6">
                <div>
                    <img                                
                      src="/imgs/silla.jpeg"
                      alt="3D Animation"
                      className="w-[700px] h-auto object-cover rounded-lg"
                    />
                  </div>
              </div>
              <div className="flex flex-col w-full min-h-screen justify-center px-2">
                <span className="text-4xl font-gotham-bold text-left">
                  Luz naranja
                </span>
                <span className="text-lg font-light w-3/4 pt-6  text-left">
                  La luz que nos une desde el descubrimiento del fuego. Nos hace sentir en casa, cómodos, en un ambiente distendido e introspectivo. Es nuestra forma de crear calidez emocional.
                </span>
              </div>      
            </div>
            <ArrowScrollDownComponent />
          </section>
          <section className="min-h-screen snap-start bg-zinc-900">
          <div className="w-full flex flex-col sm:flex-row items-center min-h-screen">
              <div className="flex flex-col w-full min-h-screen justify-center px-2">
                <span className="text-4xl font-gotham-bold text-right">
                  ⁠Atmósfera Bogart
                </span>
                <div className="w-full flex justify-end">
                  <span className="text-lg font-light w-3/4 pt-6 text-right">
                    Diseñamos espacios con elementos orgánicos e inspiración en otras culturas. Cada detalle invita a vivir la experiencia desde dentro, como si formara parte de un mundo paralelo.
                  </span>
                </div>
              </div>  
              <div className="w-full min-h-screen items-center flex justify-start px-6">
                <div>
                    <img              
                      src="/imgs/pyramid.jpeg"
                      alt="3D Animation"
                      className="w-[700px] h-auto object-cover rounded-lg"
                    />
                  </div>
              </div>             
            </div>
          </section>
          <section className="h-screen snap-start bg-zinc-900">
            <div className="w-full flex flex-col sm:flex-row items-center min-h-screen">
              <div className="w-full min-h-screen items-center flex justify-end px-6">
                <div>
                    <img              
                      src="/imgs/jumping_guy.jpeg"
                      alt="3D Animation"
                      className="w-[700px] h-auto object-cover rounded-lg"
                    />
                  </div>
              </div>
              <div className="flex flex-col w-full min-h-screen justify-center px-2">
                <span className="text-4xl font-gotham-bold text-left">
                  ⁠Aura compartida
                </span>
                <span className="text-lg font-light w-3/4 pt-6  text-left">
                  Bogart es un universo que busca mantener a su comunidad inspirada. Cada post lanza un mensaje que conecta, motiva y recuerda que los sueños están al alcance.
                </span>
              </div>      
            </div>
          </section>
          <section className="h-screen snap-start bg-zinc-900">
          <div className="w-full flex flex-col sm:flex-row items-center min-h-screen ">

              <div className="flex flex-col w-full min-h-screen justify-center px-2">
                <span className="text-4xl font-gotham-bold text-right">
                ⁠Espíritus libres
                </span>
                <div className="w-full flex justify-end">
                  <span className="text-lg font-light w-3/4 pt-6 text-right">
                  Ambientes íntimos donde cada persona tiene su espacio. Zonas para bailar, charlar o simplemente dejarse llevar por la música. Todo pensado para que la experiencia sea plena y personal.
                  </span>
                </div>
              </div>  
              <div className="w-full min-h-screen items-center flex justify-start px-6">
                <div className="py-8">
                    <img              
                      src="/imgs/fiesta_hd.jpeg"
                      alt="3D Animation"
                      className="w-[700px] h-[850px] object-cover rounded-lg"
                    />
                  </div>
              </div>             
            </div>
          </section>
        </div>
      </div>
      {/* Mobile */}
      <div className="block sm:hidden">
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        
        {/* SECTION 1 */}
        <section className="h-screen snap-start relative bg-zinc-900">
          <div className="relative z-20">
            <NavbarComponent />
          </div>

          <img
            src="/imgs/VERTICAL.png"
            alt="3D Animation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-end justify-start p-6 pt-12 text-white font-gotham-bold">
            <h1 className="text-3xl mb-4 text-right">Animaciones 3D</h1>
            <p className="text-right text-sm w-3/4">
              Creamos pequeñas historias que metaforizan el mensaje de Bogart. Un universo creativo inventado por nosotros para inspirar desde lo visual y lo simbólico.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="h-screen snap-start relative bg-zinc-900">
          <img
            src="/imgs/silla.jpeg"
            alt="3D Animation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-start justify-start p-6 pt-12 text-white font-gotham-bold">
            <h1 className="text-3xl mb-4 text-left">Luz naranja</h1>
            <p className="text-left text-sm w-3/4">
              La luz que nos une desde el descubrimiento del fuego. Nos hace sentir en casa, cómodos, en un ambiente distendido e introspectivo. Es nuestra forma de crear calidez emocional.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="h-screen snap-start relative bg-zinc-900">
          <img
            src="/imgs/pyramid.jpeg"
            alt="3D Animation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-end justify-start p-6 pt-12 text-white font-gotham-bold">
            <h1 className="text-3xl mb-4 text-right">⁠Atmósfera Bogart</h1>
            <p className="text-right text-sm w-3/4">
              Diseñamos espacios con elementos orgánicos e inspiración en otras culturas. Cada detalle invita a vivir la experiencia desde dentro, como si formara parte de un mundo paralelo.
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="h-screen snap-start relative bg-zinc-900">
          <img
            src="/imgs/jumping_guy.jpeg"
            alt="3D Animation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-start justify-start p-6 pt-12 text-white font-gotham-bold">
            <h1 className="text-3xl mb-4 text-left">⁠Aura compartida</h1>
            <p className="text-left text-sm w-3/4">
              Bogart es un universo que busca mantener a su comunidad inspirada. Cada post lanza un mensaje que conecta, motiva y recuerda que los sueños están al alcance.
            </p>
          </div>
        </section>

        {/* SECTION 5 */}
        <section className="h-screen snap-start relative bg-zinc-900">
          <img
            src="/imgs/fiesta_hd.jpeg"
            alt="3D Animation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-end justify-start p-6 pt-12 text-white font-gotham-bold">
            <h1 className="text-3xl mb-4 text-right">⁠Espíritus libres</h1>
            <p className="text-right text-sm w-3/4">
              Ambientes íntimos donde cada persona tiene su espacio. Zonas para bailar, charlar o simplemente dejarse llevar por la música. Todo pensado para que la experiencia sea plena y personal.
            </p>
          </div>
        </section>

      </div>
    </div>
    </>
  );
}
