import dbConnect from "./utils/dbConnect";
import ProductData from "./model/Product";

export default async function Home() {
  "use server"
  dbConnect()
  const products = await ProductData.find({})
  const latestProducts = products.slice(-3)

  return (
    <main>
      <div className="row d-flex justify-content-center">
        <div className="text-center col col-md-6 d-flex justify-content-center align-items-center">
          <p>
          <span className="fs-3">Experience Our New Product</span>
          <hr />
          Introducing the iWatch Model X3, the latest innovation in smartwatch
          technology. Equipped with a built-in blood pressure monitor, this
          cutting-edge timepiece empowers you to monitor your health on the go.
          Stay connected and stay healthy with iWatch Model X3.
          </p>
        </div>
        <img src="https://i.postimg.cc/1Xv0nKNR/product1.jpg" alt="" className="col col-md-6" style={{ width: '40%'}}/>
      </div>
      {/* ABOUT */}
      <div className="row d-flex justify-content-center m-5">
        <img src="https://i.postimg.cc/MHmPsRMg/product5.jpg" alt="" className="col col-md-6" style={{ width: '40%', height:'70vh', objectFit:'cover'}}/>
        <div className="container col col-md-6 d-flex justify-content-center align-items-center">
          <div>
          <p className="fs-4">ABOUT THE PRODUCT</p>
          <hr />
          <p className="text-justify">
            Introducing the all-new SmartTime X3, the ultimate smart watch designed to elevate your lifestyle and redefine the way you interact with technology. Packed with cutting-edge features and sleek aesthetics, this next-generation wearable is here to revolutionize your daily routine. Stay connected and organized like never before with the SmartTime X3. Its vibrant, high-resolution display adapts to your surroundings, ensuring crystal-clear visibility in any light. From reading messages to tracking your fitness goals, the intuitive touchscreen makes navigation a breeze. Powered by a state-of-the-art AI assistant, the SmartTime X3 anticipates your needs and delivers personalized suggestions throughout the day. Whether it's suggesting the best route to beat traffic or reminding you of an important meeting, your smart watch is your ever-reliable  companion.
          </p>
          </div>
        </div>
      </div>
      <div className="features bg-dark text-light p-3">
        <h3 className="text-center">FEATURES</h3>
        <div className="row text-center my-3">
          <div className="col col-md-3">
            <i className="material-icons">explore</i>
            <h4 className="">Gyro and Accelerometer</h4>
            <p className="text-justified">
              Track movement, activity levels, and even sleep patterns. Monitor
              your health and fitness levels.Also use it for navigation and
              location services.
            </p>
          </div>
          <div className="col col-md-3">
            <i className="material-icons">favorite_border</i>
            <h4 className="">Heart Monitor</h4>
            <p>
              Monitor heart rate and track progress over time. Set goals for
              improving heart health. SOS feature that can be activated in case
              of emergency.
            </p>
          </div>
          <div className="col col-md-3">
            <i className="material-icons">record_voice_over</i>
            <h4 className="">Voice Dial/Commands</h4>
            <p>
              The voice command feature allows you to make calls, send messages,
              set reminders, play music, and even control your smart home
              devices, all with simple voice commands.
            </p>
          </div>
          <div className="col col-md-3">
            <i className="material-icons">music_video</i>
            <h4 className="">Mp3 Player</h4>
            <p>
              The MP3 player feature allows you to store and play your own music
              files, giving you the freedom to listen to your music collection
              without the need for a separate device.
            </p>
          </div>
        </div>
      </div>

      {/* Latest Products */}
      <div className="latest-product row m-5 container">
        <h3 className="text-center">Latest Products</h3>
        <hr />
        {latestProducts.map((element)=>{
          return(
            <div key={element._id} className="col col-md-4 flex-col text-center">
              <img src={element.image} alt="" />
              <p>{element.name}</p>
            </div>
          )
        })}
      </div>
    </main>
  );
}
