// src/components/challenge/ChallengeTimer.js
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function ChallengeTimer({ targetTime }) {
  const [timeLeft, setTimeLeft] = useState(calculateTime());

  function calculateTime() {
    const diff = new Date(targetTime) - new Date();
    return diff > 0 ? Math.floor(diff / 1000) : 0;
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return <Text>{minutes}m {seconds}s</Text>;
}
