import { Button, Input,Card,CardBody,Checkbox,Alert,ScrollShadow, CardHeader, Chip, Divider, Link } from '@heroui/react';
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
    <div className='flex flex-col items-center justify-center h-full gap-3 p-4 '>
    <p className='font-mono text-2xl font-bold'>Simple Todo</p>
    <div className='flex flex-row gap-2'>
    <Input type='text' value={Text} className='mb-2 w-52' onChange={(e)=>setText(e.target.value)} />
    <Button color='primary' onPress={()=>{ dispatch(insertTodo(Text)); setText("")}}>Insert</Button>
    </div>
{ (State.length > 0)? (
    <Card className='mt-4 min-w-[300px]'>
      <CardBody className='flex flex-col gap-2 p-2'>
      <ScrollShadow className='h-[400px] flex flex-col gap-2 p-2'>
      {
        State.map((itm,idx)=>(
          <>
          <motion.div className='flex flex-row w-full gap-2' initial={{x:-100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ duration: 0.2 }} key={idx}>
          <Checkbox onChange={()=> dispatch(toggleDone(itm.id))} lineThrough>{itm.text}</Checkbox>
            <p className='grow'> </p>
            <Button color='warning' onPress={()=> dispatch(editTodo(idx))}>Edit</Button>
            <Button color='danger'  onPress={()=> dispatch(deleteTodo(idx))}>Delete</Button>
          </motion.div>
          </>
        ))
      }
      </ScrollShadow>
      </CardBody>
    </Card>) : 
    (<Alert className='w-[300px]' color='warning' variant='flat' title="No Item Yet!"/>)
}   
    <Card className='w-[300px]'>
      <CardHeader className='flex flex-row gap-2 '>
         Simple Todo<p className='grow'></p> <Chip color='warning'>Web Application</Chip>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className='text-sm'>This Project is fully OpenSource. Developed With ReactJS Web FrameWork. <Link href='https://github.com/EnderTonol/'>GitHub</Link></p>
      </CardBody>
    </Card>
    </div>
    </>
  )
}

export default App
