"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // ロード進行をシミュレート
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // ロード完了後、少し待ってから非表示にする
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 8 + 2; // 2-10%ずつ進む（よりゆっくり）
      });
    }, 400); // 400ms間隔（よりゆっくり）

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

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