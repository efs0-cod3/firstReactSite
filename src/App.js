import qrCode from './assets/image-qr-code.png'


function App() {
  return ( 
    <div>
      <main>
        <div className="card">
          <img className='qrImg' src= {qrCode} alt='qr-code'/>
          <div className="container">
            <h1>
            Improve your front - end skills by building projects
            </h1>
            <p>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level 
            </p>
          </div>
      </div>
    </main>

      <div className= "attribution">
        <p>
          Challenge by <a href = "https://www.frontendmentor.io?ref=challenge" >
          Frontend Mentor 
          </a>. 
        </p>
        <p>Coded by Erick 'efs0-cod3' Felix.</p>
      </div>
    </div>
  );
}

export default App;