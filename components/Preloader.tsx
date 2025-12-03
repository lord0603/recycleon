'use client';

import { useEffect, useState } from 'react';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#1A2436] flex items-center justify-center transition-opacity duration-500">
      <div className="relative">
        <div className="robot-container">
          <div className="robot-head">
            <div className="robot-antenna" />
            <div className="robot-eyes">
              <div className="robot-eye left" />
              <div className="robot-eye right" />
            </div>
          </div>
          <div className="robot-body">
            <div className="robot-panel" />
          </div>
          <div className="robot-arms">
            <div className="robot-arm left" />
            <div className="robot-arm right" />
          </div>
        </div>

        <p className="mt-8 text-center text-[#B4BED8] uppercase tracking-wider text-xs font-mono animate-pulse">
          INITIALIZING SYSTEM
        </p>
      </div>

      <style jsx>{`
        .robot-container {
          width: 120px;
          height: 140px;
          position: relative;
          animation: robotFloat 2s ease-in-out infinite;
        }

        @keyframes robotFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .robot-head {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #8C96B4 0%, #6A708A 100%);
          border-radius: 12px;
          position: relative;
          margin: 0 auto 10px;
          box-shadow: 0 4px 20px rgba(140, 150, 180, 0.3);
        }

        .robot-antenna {
          width: 3px;
          height: 15px;
          background: #6A708A;
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .robot-antenna::after {
          content: '';
          width: 8px;
          height: 8px;
          background: #92A3CB;
          border-radius: 50%;
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          animation: antennaBlink 1s ease-in-out infinite;
        }

        @keyframes antennaBlink {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px #92A3CB; }
          50% { opacity: 0.3; box-shadow: 0 0 5px #92A3CB; }
        }

        .robot-eyes {
          display: flex;
          justify-content: space-around;
          padding: 20px 12px 0;
        }

        .robot-eye {
          width: 12px;
          height: 12px;
          background: #1A2436;
          border-radius: 50%;
          animation: eyeBlink 3s ease-in-out infinite;
        }

        @keyframes eyeBlink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }

        .robot-body {
          width: 80px;
          height: 50px;
          background: linear-gradient(135deg, #6F7595 0%, #525A77 100%);
          border-radius: 8px;
          margin: 0 auto;
          position: relative;
          box-shadow: 0 4px 20px rgba(111, 117, 149, 0.3);
        }

        .robot-panel {
          width: 40px;
          height: 25px;
          background: #444B63;
          border-radius: 4px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .robot-panel::before,
        .robot-panel::after {
          content: '';
          width: 8px;
          height: 2px;
          background: #92A3CB;
          position: absolute;
          left: 8px;
          animation: panelLight 1.5s ease-in-out infinite;
        }

        .robot-panel::before {
          top: 8px;
        }

        .robot-panel::after {
          top: 15px;
          animation-delay: 0.3s;
        }

        @keyframes panelLight {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; box-shadow: 0 0 8px #92A3CB; }
        }

        .robot-arms {
          display: flex;
          justify-content: space-between;
          width: 120px;
          position: absolute;
          top: 70px;
          left: 0;
        }

        .robot-arm {
          width: 15px;
          height: 40px;
          background: linear-gradient(180deg, #6A708A 0%, #525A77 100%);
          border-radius: 8px;
          animation: armWave 1.5s ease-in-out infinite;
        }

        .robot-arm.left {
          transform-origin: top center;
        }

        .robot-arm.right {
          transform-origin: top center;
          animation-delay: 0.75s;
        }

        @keyframes armWave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }
      `}</style>
    </div>
  );
}
