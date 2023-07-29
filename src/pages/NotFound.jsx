import { useEffect } from 'react'
import {TbError404} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 2000);
    })
  return (
    <section className='flex flex-col justify-center items-center h-[40rem]'>
            <TbError404 size={250} className='text-purple-400'/>
            <h1 className='font-bold text-lg'>Looks like this page does not exist...</h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti enim laudantium, voluptatem nam recusandae adipisci obcaecati veniam rerum incidunt totam nesciunt quis, quibusdam numquam quaerat nisi eum perspiciatis velit. Architecto fugiat reprehenderit veniam reiciendis perspiciatis maiores praesentium tempore nisi a nam quia ipsa eius, tempora laboriosam sed consequuntur voluptatum eaque sequi repellat! Tempore quis soluta adipisci. Ipsam, deserunt id corrupti ratione commodi harum sunt ex voluptatum eaque odio sed maxime architecto tempora non est aut? Neque in quas eligendi error, vero esse libero autem culpa, aperiam, deleniti molestias sunt ex!
    </section>
  )
}

export default NotFound