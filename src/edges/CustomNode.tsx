import { memo } from 'react';
import { 
  Handle, 
  Position 
} from '@xyflow/react';

interface NodeProps {
  isConnectable: boolean;
}

export default memo(({ isConnectable }: NodeProps) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div>
        Custom Color Picker Node: ssdd
      </div>
      <input type="text" />
    </>
  );
})
