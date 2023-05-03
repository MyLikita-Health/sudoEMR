import React, { useState, useEffect } from 'react';
import { LoadingSM, LoadingXsm } from '../loading';
import { iconButtonStyle } from './styles-helper';

export const CustomButton = ({
  text = '',
  className = '',
  icon = f => f,
  loading = false,
  onClick = f => f,
}) => {
  const [isLoading, setLoading] = useState(loading);
  useEffect(() => setLoading(loading));
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      style={iconButtonStyle}
    >
      {isLoading ? (
        className.includes('btn-sm') ? (
          <LoadingXsm />
        ) : (
          <LoadingSM />
        )
      ) : (
        <>
          {icon()}
          {text}
        </>
      )}
    </button>
  );
};
