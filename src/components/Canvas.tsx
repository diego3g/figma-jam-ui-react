import { useCallback } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { Square as SquareIcon } from 'phosphor-react'
import { zinc } from 'tailwindcss/colors'

import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  ConnectionMode,
  Connection,
} from 'reactflow';

import 'reactflow/dist/style.css';
import '@reactflow/node-resizer/dist/style.css';
import { Square } from './Square';
import { DefaultEdge } from './DefaultEdge';

interface InitialNode extends Node {
  type: keyof typeof NODE_TYPES
}

const initialNodes: InitialNode[] = [
  { 
    id: '1', 
    position: { x: 200, y: 400 }, 
    data: {},
    type: 'square',
  },
  { 
    id: '2', 
    position: { x: 600, y: 400 }, 
    data: {},
    type: 'square',
  },
];

const initialEdges: Edge[] = [
  // { 
  //   id: 'e1-2', 
  //   source: '1', 
  //   target: '2', 
  //   label: 'connect to' 
  // }
];

const NODE_TYPES = {
  square: Square,
}

const EDGE_TYPES = {
  default: DefaultEdge,
}

export function Canvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Connection) => {
    return setEdges((eds) => addEdge(params, eds))
  }, [setEdges]);

  function handleAddSquareNode() {
    setNodes((nodes) => {
      return [...nodes, {
        id: crypto.randomUUID(),
        position: {
          x: 750,
          y: 350,
        },
        data: {},
        type: 'square',
      }]
    })
  }

  return (
    <>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default'
        }}
      >
        <Controls /> 
        <Background gap={12} size={2} color={zinc['200']} />
      </ReactFlow>

      <Toolbar.Root className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden">
        <Toolbar.Button onClick={handleAddSquareNode} className="text-zinc-400">
          <div className="w-32 h-32 bg-violet-500 mt-6 rounded hover:-translate-y-2 transition-transform"></div>
        </Toolbar.Button>
      </Toolbar.Root>
    </>
  );
}