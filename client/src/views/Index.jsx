import { useState } from "react";

const Index = () => {
  const [alternate, setAlternate] = useState(true);

  return (
    <div className="container">
      <main>
        <section>
          <div
            className={alternate ? "selected" : "not-selected"}
            onClick={() => setAlternate(true)}
          >
            Fechas
          </div>
        </section>
        <section className="fechas">
          <div className="fechas-header">
            <h2 className="fecha">Clausura - Fecha 1</h2>
          </div>
          <div className="fechas-body">
            <p>Sábado 19 de agosto</p>
            <div className="section-masc">
              <p className="masculino">Masculino</p>
              <hr />
              <div className="vs">
                <p className="text-left">
                  Boca
                  <img
                    src="https://i.ibb.co/Jj7kWs1/boca-men.png"
                    alt="boca-men"
                    border="0"
                    className="img-left"
                  />
                </p>{" "}
                <span>18:00</span>{" "}
                <p>
                  <img
                    src="https://i.ibb.co/x79Ycdx/juve-men.png"
                    alt="juve-men"
                    border="0"
                    className="img-right"
                  />
                  Juventus
                </p>
              </div>
              <div className="vs">
                <p className="text-left">
                  Liverpool
                  <img
                    src="https://i.ibb.co/hMJ5jck/liverpool-men.png"
                    alt="liverpool-men"
                    border="0"
                    className="img-left"
                  />
                </p>{" "}
                <span>19:00</span>
                <p>
                  <img
                    src="https://i.ibb.co/mc4Tsh1/chelsea-men.png"
                    alt="chelsea-men"
                    border="0"
                    className="img-right"
                  />
                  Chelsea
                </p>
              </div>
              <div className="vs">
                <p className="text-left">
                  Atlanta
                  <img
                    src="https://i.ibb.co/KwWXC2t/Atlanta-men.png"
                    alt=""
                    className="img-left"
                  />
                </p>{" "}
                <span>20:00</span>{" "}
                <p className="text-right">
                  <img
                    src="https://i.ibb.co/3WJ1qnB/city-men.png"
                    alt="city-men"
                    border="0"
                    className="img-right"
                  />
                  Man City
                </p>
              </div>
              <div className="vs">
                <p className="text-left">
                  Independiente
                  <img
                    src="https://i.ibb.co/pJNZksN/Indep-men.png"
                    alt="Indep-men"
                    border="0"
                    className="img-left"
                  />
                </p>{" "}
                <span>21:00</span>
                <p>
                  <img
                    src="https://i.ibb.co/c8Dx9QF/corintians-men.png"
                    alt="corintians-men"
                    border="0"
                    className="img-right"
                  />
                  Corinthians
                </p>
              </div>
              <div className="vs">
                <p className="text-left">
                  Atl. Nacional{" "}
                  <img
                    className="img-left"
                    src="https://i.ibb.co/ZGZHT40/a-nacional-men.png"
                    alt=""
                  />
                </p>{" "}
                <span>21:30</span>{" "}
                <p>
                  <img
                    src="https://i.ibb.co/R9WF6wL/roma-men.png"
                    alt="roma-men"
                    border="0"
                    className="img-right"
                  />
                  Roma
                </p>
              </div>
              <div className="vs">
                <p className="text-left">
                  Peñarol
                  <img
                    src="https://i.ibb.co/LxGFGvg/pe-orol-men.png"
                    alt="pe-orol-men"
                    border="0"
                    className="img-left"
                  />
                </p>
                <span>22:00</span>
                <p>
                  <img
                    src="https://i.ibb.co/n1GMLtq/borussia-men.png"
                    alt="borussia-men"
                    border="0"
                    className="img-right"
                  />
                  Borussia
                </p>
              </div>
            </div>
            <div className="section-fem">
              <p className="femenino">Femenino</p>
              <hr />
              <div className="vs">
                <p className="text-left">
                  Liverpool
                  <img
                    src="https://i.ibb.co/hMJ5jck/liverpool-men.png"
                    alt="liverpool-men"
                    border="0"
                    className="img-left"
                  />
                </p>
                <span>18:30</span>
                <p>
                  <img
                    src="https://i.ibb.co/2dtQPdT/atlanta-fem.png"
                    alt=""
                    className="img-right"
                  />
                  Atlanta
                </p>
              </div>
              <div className="vs">
                <p className="text-left">
                  Borussia
                  <img
                    src="https://i.ibb.co/n1GMLtq/borussia-men.png"
                    alt="borussia-men"
                    border="0"
                    className="img-left"
                  />
                </p>{" "}
                <span>19:30</span>
                <p>
                  <img
                    src="https://i.ibb.co/pJNZksN/Indep-men.png"
                    alt="Indep-men"
                    border="0"
                    className="img-right"
                  />
                  Independiente
                </p>
              </div>
              <div className="vs">
                <p className="text-left">
                  Man City
                  <img
                    src="https://i.ibb.co/LJQXmhW/City-fem.png"
                    alt="city-men"
                    border="0"
                    className="img-left"
                  />
                </p>{" "}
                <span>20:30</span>{" "}
                <p>
                  <img
                    src="https://i.ibb.co/ZGZHT40/a-nacional-men.png"
                    alt=""
                    className="img-right"
                  />
                  Atl. Nacional
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
