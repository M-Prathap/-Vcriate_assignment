import React from 'react';
import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import './FlowEditor.css'; 

const FlowEditor = ({ nodes, setNodes, edges, setEdges }) => {
  const onConnect = (connection) => {
    setEdges((eds) => addEdge(connection, eds));
  };

  const onNodesChange = (changes) => {
    setNodes((nds) => nds.map(node => {
      const change = changes.find(c => c.id === node.id);
      return change ? { ...node, ...change } : node;
    }));
  };

  const onEdgesChange = (changes) => {
    setEdges((eds) => eds.filter(edge => !changes.find(c => c.id === edge.id && c.type === 'remove')));
  };

  return (
    <div className="flowEditor">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default FlowEditor;
