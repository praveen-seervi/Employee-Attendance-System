import React from 'react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes look {
          0%, 100% { transform: translate(-50%, -50%); }
          25% { transform: translate(-30%, -50%); }
          75% { transform: translate(-70%, -50%); }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .pupil-animation {
          animation: look 4s ease-in-out infinite;
        }

        .monster-body {
          width: 200px;
          height: 280px;
          background: linear-gradient(135deg, #7ed56f 0%, #28b485 100%);
          border-radius: 50% 50% 45% 45%;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .eye {
          width: 120px;
          height: 120px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 60px;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: inset 0 -5px 15px rgba(0, 0, 0, 0.1);
        }

        .pupil {
          width: 50px;
          height: 50px;
          background: #2c3e50;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .pupil::after {
          content: '';
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 8px;
          left: 8px;
        }

        .horn {
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-bottom: 30px solid #5fa35b;
          position: absolute;
          top: -5px;
        }

        .horn-left {
          left: 30px;
          transform: rotate(-15deg);
        }

        .horn-right {
          right: 30px;
          transform: rotate(15deg);
        }

        .mouth {
          width: 60px;
          height: 30px;
          background: #2c3e50;
          border-radius: 0 0 60px 60px;
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
        }

        .tooth {
          width: 8px;
          height: 12px;
          background: white;
          position: absolute;
          top: 0;
        }

        .arm {
          width: 40px;
          height: 120px;
          background: linear-gradient(135deg, #7ed56f 0%, #28b485 100%);
          border-radius: 20px;
          position: absolute;
          bottom: 40px;
        }

        .arm-left {
          left: -30px;
          transform: rotate(-25deg);
        }

        .arm-right {
          right: -30px;
          transform: rotate(25deg);
        }

        .hand {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #7ed56f 0%, #28b485 100%);
          border-radius: 50%;
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .monster-body {
            width: 180px;
            height: 250px;
          }

          .eye {
            width: 105px;
            height: 105px;
            top: 55px;
          }

          .pupil {
            width: 45px;
            height: 45px;
          }

          .pupil::after {
            width: 18px;
            height: 18px;
          }

          .horn {
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 25px solid #5fa35b;
          }

          .mouth {
            width: 55px;
            height: 28px;
            bottom: 45px;
          }

          .arm {
            width: 35px;
            height: 100px;
          }

          .hand {
            width: 45px;
            height: 45px;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .monster-body {
            width: 140px;
            height: 200px;
          }

          .eye {
            width: 80px;
            height: 80px;
            top: 40px;
          }

          .pupil {
            width: 35px;
            height: 35px;
          }

          .pupil::after {
            width: 14px;
            height: 14px;
            top: 6px;
            left: 6px;
          }

          .horn {
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 20px solid #5fa35b;
            top: -3px;
          }

          .horn-left {
            left: 25px;
          }

          .horn-right {
            right: 25px;
          }

          .mouth {
            width: 45px;
            height: 22px;
            bottom: 35px;
          }

          .tooth {
            width: 6px;
            height: 10px;
          }

          .arm {
            width: 28px;
            height: 80px;
            bottom: 30px;
          }

          .arm-left {
            left: -22px;
          }

          .arm-right {
            right: -22px;
          }

          .hand {
            width: 35px;
            height: 35px;
            bottom: -12px;
          }
        }

        /* Extra small mobile */
        @media (max-width: 380px) {
          .monster-body {
            width: 120px;
            height: 170px;
          }

          .eye {
            width: 70px;
            height: 70px;
            top: 35px;
          }

          .pupil {
            width: 30px;
            height: 30px;
          }

          .mouth {
            width: 40px;
            height: 20px;
            bottom: 30px;
          }

          .arm {
            width: 24px;
            height: 70px;
          }
        }
      `}</style>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20 max-w-6xl w-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {/* Monster Character */}
        <div className="flex-shrink-0 float-animation order-1 lg:order-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] relative flex items-center justify-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="monster-body">
              {/* Horns */}
              <div className="horn horn-left"></div>
              <div className="horn horn-right"></div>

              {/* Eye */}
              <div className="eye">
                <div className="pupil pupil-animation">
                  {/* Shine effect created by ::after in CSS */}
                </div>
              </div>

              {/* Mouth */}
              <div className="mouth">
                <div className="tooth" style={{ left: '10px' }}></div>
                <div className="tooth" style={{ left: '22px' }}></div>
                <div className="tooth" style={{ left: '34px' }}></div>
                <div className="tooth" style={{ left: '46px' }}></div>
              </div>

              {/* Arms */}
              <div className="arm arm-left">
                <div className="hand"></div>
              </div>
              <div className="arm arm-right">
                <div className="hand"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center order-2 max-w-[500px]" style={{ textAlign: 'center', marginTop: 24 }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 sm:mb-5 tracking-tight leading-tight">
            OOPS! PAGE NOT FOUND.
          </h1>
          
          <button
            onClick={() => window.location.href = '/'}
            className="inline-block px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 bg-blue-500 text-white text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-xl shadow-lg active:translate-y-0"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
}
