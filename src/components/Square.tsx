import { Handle, Node, NodeProps, Position, useNodeId, useStore } from 'reactflow';
import { NodeResizer, NodeResizeControl } from '@reactflow/node-resizer';

export function Square({ selected }: NodeProps) {
  return (
    <>
      <div className="bg-violet-500 rounded min-w-[200px] min-h-[200px] w-full h-full group">
        <NodeResizer 
          minWidth={200} 
          minHeight={200} 
          isVisible={selected} 
          lineClassName="border-blue-400"
          handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
        />

        <Handle 
          id="top"
          type="source" 
          position={Position.Top} 
          className="-top-5 bg-transparent w-3 h-3 border-2 border-blue-400" 
        />
        <Handle 
          id="bottom"
          type="source" 
          position={Position.Bottom} 
          className="-bottom-5 bg-transparent w-3 h-3 border-2 border-blue-400" 
        />
        <Handle 
          id="left"
          type="source" 
          position={Position.Left} 
          className="-left-5 bg-transparent w-3 h-3 border-2 border-blue-400" 
        />
        <Handle 
          id="right"
          type="source" 
          position={Position.Right} 
          className="-right-5 bg-transparent w-3 h-3 border-2 border-blue-400" 
        />
      </div>
    </>
  )
}