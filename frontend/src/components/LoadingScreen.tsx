"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  progress: number;
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (progress >= 100) {
      // ロード完了後、少し待ってから非表示にする
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="relative fade-in">
        {/* ロゴ */}
        <div className="loading-logo-container">
          <Image
            src="/assets/general/logo-w.png"
            alt="ロボコンプロジェクトロゴ"
            fill
            className="object-contain"
            priority
            style={{
              filter: `brightness(${1 - (progress / 100) * 0.8}) contrast(${1 + (progress / 100) * 0.5})`
            }}
          />
        </div>
        
        {/* プログレスバー */}
        <div className="loading-progress-bar">
          <div 
            className="loading-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* プログレステキスト */}
        <div className="loading-text">
          <p>
            ロード中... {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
} 