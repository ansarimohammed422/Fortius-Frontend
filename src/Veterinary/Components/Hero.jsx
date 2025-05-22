import React, { useContext } from "react";
import { MyLinks } from "./Button";
import { AuthContext } from "../../Context/AuthContext";

const Hero = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <section className="w-screen min-h-screen  bg-[url('./assets/VetHero.jpg')] bg-center bg-no-repeat bg-cover">
        <div className=" relative flex flex-col min-h-screen px-6 py-8 pt-20 mx-auto w-full h-full backdrop-blur-xl bg-olive-500/30 ">
          <section className="flex items-center flex-1">
            <div className="flex flex-col w-full ">
              <div className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                <div className="flex justify-center">
                  <svg
                    version="1.1"
                    width="1.5221659in"
                    height="0.40575409in"
                    viewBox="0 0 109.59607 29.214309"
                    id="svg82"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5xl h-auto"
                  >
                    <defs id="defs82" />
                    <path
                      d="m 5.599543e-5,16.98392 c 0,1.1394 0.91100000457,2.0403 2.06279990457,2.0403 1.1515,0 2.0625,-0.9009 2.0625,-2.0403 v -5.299 h 7.2326001 c 1.0444,0 1.875,-0.8216 1.875,-1.8549004 0,-1.0333 -0.8306,-1.8546 -1.875,-1.8546 H 4.1253559 v -3.9479 h 8.4378001 c 1.0447,0 1.875,-0.8216 1.875,-1.8549 0,-1.0333 -0.8303,-1.85459999 -1.875,-1.85459999 H 2.0628559 C 0.911056,0.31801961 5.599543e-5,1.2190196 5.599543e-5,2.3583196 Z M 24.967556,19.18332 c 5.7858,0 9.9915,-4.3191 9.9915,-9.5917004 v -0.053 c 0,-5.2727 -4.152,-9.538699983697 -9.9382,-9.538699983697 -5.7858,0 -9.9912,4.318999983697 -9.9912,9.591699983697 v 0.053 c 0,5.2727004 4.1517,9.5387004 9.9379,9.5387004 z m 0.053,-3.7626 c -3.3214,0 -5.6787,-2.6494 -5.6787,-5.8291004 v -0.053 c 0,-3.1797 2.3036,-5.7762 5.6254,-5.7762 3.3217,0 5.6787,2.6495 5.6787,5.8292 v 0.053 c 0,3.1793004 -2.3036,5.7761004 -5.6254,5.7761004 z m 11.8954,1.5632 c 0,1.1394 0.911,2.0403 2.0628,2.0403 1.1515,0 2.0625,-0.9009 2.0625,-2.0403 v -4.0539 h 3.2947 l 4.0182,5.0342 c 0.4821,0.6095 1.0985,1.06 2.0359,1.06 0.991,0 1.9554,-0.7419 1.9554,-1.8813 0,-0.6358 -0.2679,-1.06 -0.6699,-1.5631 l -2.8664,-3.4448 c 2.2774,-0.9272 3.7504,-2.7288004 3.7504,-5.6434004 v -0.053 c 0,-1.7489 -0.5624,-3.206 -1.6068,-4.2393 -1.2326,-1.21909999 -3.0809,-1.88129999 -5.465,-1.88129999 h -6.509 c -1.1518,0 -2.0628,0.90099999 -2.0628,2.04029999 z m 4.1253,-7.6574004 v -5.3257 h 4.0983 c 2.0091,0 3.2413,0.901 3.2413,2.6499 v 0.053 c 0,1.5635 -1.1518,2.6232 -3.1609,2.6232 z m 17.8953,7.6574004 c 0,1.1394 0.911,2.0403 2.0629,2.0403 1.1518,0 2.0628,-0.9009 2.0628,-2.0403 V 4.0805196 h 3.9642 c 1.0447,0 1.902,-0.8479 1.902,-1.8812 0,-1.0334 -0.8573,-1.88129999 -1.902,-1.88129999 h -12.0541 c -1.0447,0 -1.902,0.84789999 -1.902,1.88129999 0,1.0333 0.8573,1.8812 1.902,1.8812 h 3.9642 z m 11.4667,0 c 0,1.1394 0.9107,2.0403 2.0629,2.0403 1.1518,0 2.0621,-0.9009 2.0621,-2.0403 V 2.1993196 c 0,-1.1394 -0.9103,-2.04029999 -2.0621,-2.04029999 -1.1522,0 -2.0629,0.90089999 -2.0629,2.04029999 z m 14.9222,2.1727 c 5.036,0 8.2236,-2.7555 8.2236,-8.3726 V 2.1993196 c 0,-1.1394 -0.911,-2.04029999 -2.0624,-2.04029999 -1.1519,0 -2.0629,0.90089999 -2.0629,2.04029999 V 10.94302 c 0,2.9409 -1.5264,4.4511 -4.0446,4.4511 -2.5181,0 -4.0449,-1.5632 -4.0449,-4.5838 V 2.1993196 c 0,-1.1394 -0.911,-2.04029999 -2.0628,-2.04029999 -1.1515,0 -2.0625,0.90089999 -2.0625,2.04029999 V 10.91632 c 0,5.4581 3.0805,8.2403 8.1165,8.2403 z m 17.386304,-0.026 c 4.045,0 6.8843,-2.0666 6.8843,-5.7498 v -0.053 c 0,-3.2323 -2.1428,-4.5838004 -5.9466,-5.5641004 -3.2413,-0.8212 -4.044904,-1.2187 -4.044904,-2.4377 v -0.053 c 0,-0.9007 0.830604,-1.6162 2.410704,-1.6162 1.286,0 2.5719,0.4505 3.9379,1.2454 0.3215,0.1854 0.6428,0.2914 1.0447,0.2914 1.0715,0 1.9288,-0.8213 1.9288,-1.8813 0,-0.7949 -0.4554,-1.351 -0.9107,-1.6161 -1.6875,-1.05999999 -3.67,-1.64289999 -5.947,-1.64289999 -3.830404,0 -6.562704,2.22569999 -6.562704,5.59079999 v 0.053 c 0,3.6828 2.4378,4.7161004 6.214504,5.6701004 3.1339,0.7949 3.777,1.3248 3.777,2.3581 v 0.053 c 0,1.0863 -1.0177,1.7489 -2.7052,1.7489 -1.8217,0 -3.375504,-0.6359 -4.795204,-1.6696 -0.2678,-0.1853 -0.6428,-0.3707 -1.1788,-0.3707 -1.0711,0 -1.9284,0.8212 -1.9284,1.8812 0,0.6359 0.3215,1.2187 0.7765,1.5368 2.0899,1.4838 4.581004,2.2257 7.045104,2.2257 z"
                      style={{ fill: "#092c5c", fillRule: "evenodd" }}
                      id="path41"
                    />
                    <text x="31.134619" y="29.106407" id="text42">
                      <tspan
                        fontFamily="'Arial Black'"
                        fontSize="8.5px"
                        fill="#7d8240"
                        id="tspan42"
                      >
                        VET CARE
                      </tspan>
                    </text>
                  </svg>
                </div>
              </div>

              <p className="max-w-3xl mx-auto mt-6  font-medium text-center text-gray-800 text-2xl">
                Faster | Stronger | Higher
              </p>
              {user && (
                <h1 className="text-5xl font-black text-blue-950 text-center m-3">
                  Welcome, {user?.first_name} {user?.last_name}
                </h1>
              )}
              <div className="flex flex-col items-center justify-center w-full mt-6 bg-olive-50 rounded-xl  max-w-sm mx-auto">
                <div className="w-full h-64 bg-[url('./assets/VetHeroCard.png')] bg-center bg-cover rounded-lg shadow-xl"></div>

                <div className="w-56 -mt-10 overflow-hidden  rounded-lg shadow-lg md:w-64 bg-olive-500">
                  <h3 className="py-2 font-bold tracking-wide text-xl text-center uppercase text-olive-900">
                    Pathology
                  </h3>

                  <div className="flex items-center justify-between px-3 py-2 shadow-2xl  bg-olive-900 text-teal-400 ">
                    <span className="font-bold text-lg  text-olive-200">
                      Appointment
                    </span>

                    <MyLinks
                      path="/Appointment"
                      LName="Book Now"
                      customClass="bg-olive-200  !text-blue-950 !text-base p-2 rounded-md   transform hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="mt-8 text-center text-xl font-normal text-blue-950  w-auto  ">
                  Fortius Diagnostic Center is dedicated to providing accurate
                  and timely diagnostic services with a commitment to excellence
                  in patient care. We utilize state-of-the-art technology to
                  ensure precise results, helping our patients take informed
                  steps towards better health.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Hero;
