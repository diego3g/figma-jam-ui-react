import { EdgeProps, getSmoothStepPath } from "reactflow";

export function DefaultEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <path
      id={id}
      style={style}
      className="stroke-2 fill-none stroke-zinc-300"
      d={edgePath}
      markerEnd={markerEnd}
    />
  );
}