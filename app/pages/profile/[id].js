import Footer from '../../content/footer.js'
import Header from '../../content/header'

export const getStaticPaths = async ()=>{
    const res= await fetch('http://localhost:8000/use')
    const data= await res.json();
    const paths=data.map(user=>{
        return {
            params : {id:user.id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps=async(context)=>{
    const id=context.params.id;
    console.log('http://localhost:8000/use/'+id);
    const res= await fetch('http://localhost:8000/use/'+id)
    const data =await res.json(); 
    return {     
        props:{user:data}
    }
}

const Details = ({user})=>{
    return (
        <div>
            <h1> Details page</h1>

            <div >
              <div key={user.id} >           
                           <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                               <div class="flex flex-col justify-between p-4 leading-normal">
                                   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name} </h5>
                                           <ul class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                <li>USERNAME : {user.username} </li>
                                                <li>Email : {user.email} </li>
                                                <li>ID : {user.id}</li>
                                           </ul>
                                    
                               </div>
                           </a>
                </div>
          </div>

        </div>

    );
}

export default Details;