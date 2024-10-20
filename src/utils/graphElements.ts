import React from "react";

export const createNode = (
  id: string,
  label: React.ReactNode,
  position: { x: number; y: number }
) => ({
  id,
  position,
  data: { label },
  type: "default",
});

export const createEdge = (id: string, source: string, target: string) => ({
  id,
  source,
  target,
});
