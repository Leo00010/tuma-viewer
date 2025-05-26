import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import '/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function GuitarraModel() {
  const { scene } = useGLTF(process.env.PUBLIC_URL + '/models/guitarra_draco.glb', true);
  const ref = useRef();
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.002;
  });
  return <primitive object={scene} ref={ref} scale={1.25} position={[1, -1, 0]} />;
}

function App() {
  useEffect(() => {
    const srScript = document.createElement('script');
    srScript.src = 'https://unpkg.com/scrollreveal';
    srScript.onload = () => {
      window.ScrollReveal().reveal('[data-sr]', {
        duration: 1000,
        distance: '50px',
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: false,
      });
    };
    document.body.appendChild(srScript);
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
         <img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="Logo" style={{ height: '55px', marginLeft: '20px', marginRight: '-20px', float: 'left', borderRadius: '50%',objectFit: 'cover' }} />
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#aboutUs" style={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#model" style={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>Instruments</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacts" style={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>Contacts</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero">
    <video
  autoPlay
  muted
  loop
  playsInline
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
>
  <source
    src="https://res.cloudinary.com/dqkwbunbd/video/upload/q_auto,f_auto/v1748284856/o7ty8rmsypcvnfa45lt8.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
        <div className="hero-content">
          <h1>TUMa - Tuna Universitária da Madeira</h1>
          <p>Since 1998 promoting the spirit and academic life through music</p>
          <a href="#aboutUs" className="btn btn-primary mt-4" style={{ background: '#a52a2a' }}>About Us</a>
        </div>
      </section>

      <section id="aboutUs" className="text-center section">
        <div className="container">
          <h3 className="mb-5">About Us</h3>
          <p>TUMa - Tuna Masculina da Universidade da Madeira began its activities in September 1995, having been formed, however, in April 1994 as a mixed tuna. On March 13, 1998, the Association called Tuna Universitária da Madeira (TUMa) was established.</p>
          <p>TUMa's main objectives are to promote the spirit and academic life both in the university environment and in the socio-cultural life where it operates, to promote exchanges with other national and foreign university tunas and to take the name of the University of Madeira and the Region to various corners of Portugal and abroad. TUMa has already had the opportunity to visit: France, Spain, Austria, Thailand, China, Macau, Hong Kong, South Africa, Venezuela, Canada, Chile and Brazil (in Brazil we only play at São Paulo airport), as well as all of Portugal.</p>
          <p>One of the strategies adopted by TUMa to achieve its goals is the annual organization of the Meeting of University Tunas of the City of Funchal, which has been held since 1995. Its high point is on the first Saturday of December, at Praça do Município, with performances by the host and guest tuna. During the meeting, socio-cultural activities are also organized for visitors.</p>
        </div>
      </section>

      <section id="model" className="section bg-dark text-white">
        <div className="container-fluid px-5">
          <h2 className="mb-5 text-center">Instruments</h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="model-viewer-wrapper w-100" style={{ background: 'transparent', height: '500px' }}>
                <Canvas
                  gl={{ alpha: true }}
                  style={{ background: 'transparent', height: '100%' }}
                  camera={{ position: [0, 0, 10], near: 0.01, far: 100 }}
                >
                  <ambientLight intensity={6} />
                  <directionalLight position={[5, 5, 5]} intensity={2} />
                  <Suspense fallback={null}>
                    <GuitarraModel />
                    <OrbitControls enableZoom={true} enablePan={true} autoRotate autoRotateSpeed={0.5} />
                  </Suspense>
                </Canvas>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="text-white text-center px-3" style={{ fontSize: '1.2rem' }}>
                In our group we use several instruments, but the ones that stand out the most are the stringed instruments. Among them are the guitar, shown in the figure to the side; cavaquinho; braguinha, a traditional Madeiran instrument; and the rajão, also a traditional Madeiran instrument. The instrument symbolizes our passion for academic culture and international connection through music.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="text-center section">
        <div className="container">
          <h3 className="mb-5">Contacts</h3>
          <p><i className="fab fa-facebook me-2"></i> Tuna Universitária da Madeira</p>
          <p><i className="fab fa-spotify me-2"></i> Tuna Universitária da Madeira</p>
          <p><i className="fab fa-youtube me-2"></i> Tuna Universitária da Madeira</p>
          <p><i className="fas fa-envelope me-2"></i> tumamadeira@gmail.com</p>
          <p><i className="fab fa-instagram me-2"></i> tumamadeira</p>
        </div>
      </section>

      <footer className="text-center footer">
        <p>&copy; 2025 TUMa - Tuna Universitária da Madeira. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
