import React from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import * as S from './styles';

const renderer = ({ formatted }: CountdownRenderProps) => {
  return (
    <S.Countdown>
      <S.CountdownItem>
        <S.CountdownValue>{formatted.hours}</S.CountdownValue>
        <S.CountdownLabel>HH</S.CountdownLabel>
      </S.CountdownItem>
      <S.CountdownItem>
        <S.CountdownValue>{formatted.minutes}</S.CountdownValue>
        <S.CountdownLabel>MM</S.CountdownLabel>
      </S.CountdownItem>
      <S.CountdownItem>
        <S.CountdownValue>{formatted.seconds}</S.CountdownValue>
        <S.CountdownLabel>SS</S.CountdownLabel>
      </S.CountdownItem>
    </S.Countdown>
  );
};

const BidCountdown = () => {
  return (
    <div>
      <Countdown date={Date.now() + 5000000} renderer={renderer} />
    </div>
  );
};

export default BidCountdown;
