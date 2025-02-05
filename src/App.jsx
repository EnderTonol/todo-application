import { Button, Input,Card,CardBody,Divider,Checkbox } from '@heroui/react';
import { useDispatch,useSelector } from 'react-redux';
import { insertTodo,deleteTodo,editTodo,toggleDone } from './features/todoSlicer';
import { useState } from 'react';
import { motion } from 'framer-motion';
function App() {
  
  const State = useSelector((state)=> state.Todos);
  const [Text,setText] = useState("");
  const dispatch = useDispatch();
  return (
    <>
    <div className='w-full h-full p-4'>
    <Input type='text' className='mb-2 w-52' onChange={(e)=>setText(e.target.value)} />
    <Button onPress={()=> dispatch(insertTodo(Text))}>Insert</Button>
    <Card>
      <CardBody className='flex flex-col gap-2 p-2'>
      {
        State.map((itm,idx)=>(
          <>
          <motion.div className='flex flex-row w-full gap-2' initial={{x:-100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ duration: 0.2 }} >
          <Checkbox onChange={()=> dispatch(toggleDone(itm.id))} lineThrough>{itm.text}</Checkbox>
            <p className='grow'> </p>
            <Button color='primary' variant='flat' onPress={()=> dispatch(editTodo(idx))}>Edit</Button>
            <Button color='danger' variant='flat' onPress={()=> dispatch(deleteTodo(idx))}>Delete</Button>
          </motion.div>
          </>
        ))
      }
      </CardBody>
    </Card>
    </div>
    </>
  )
}

export default App
