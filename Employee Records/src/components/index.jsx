/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
export const LandingPage = () => {
  const { page } = useParams();
  if (page) {
    return <Navigate to={`/${page}`} />;
  } else {
    return <Navigate to={`/1`} />;
  }
};
