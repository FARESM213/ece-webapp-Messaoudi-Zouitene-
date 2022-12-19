import { useEffect, useState } from 'react'
import {getServiceSupabase} from '../../supabase'
import UserContext from '../../components/UserContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const supabase=getServiceSupabase();

export const getServerSideProps = async ({params}) => {

const {data : equipe,erreur}= await supabase.from('equipe').select('*').eq('id',params.id).single()
return {
    props :
    {
      equipe
    }
}
}

export default function Profile({ equipe }) {
  const { user, logout, loading } = useContext(UserContext)
  const [data, setData] = useState()
  const router = useRouter()

    useEffect(() => {
        async function loadData() {
          setData(equipe)
        }
        loadData()
      })

      async function Delete(id) {
              
          const { error } = await supabase.from('equipe').delete().eq('id', id)

          alert('Equipe supprimé')
          router.push('/equipe')

      }


      async function Update(id) {

  
        const equipe =document.getElementById("equipe").value;
        const compo = document.getElementById("Composition").value;
        const Entraineur = document.getElementById("Entraineur").value;

        const updates = 
        {
                "nom": ""+equipe,
                "coach": ""+Entraineur
        }
      const { error } = await supabase.from('equipe').update({nom:""+equipe, coach: ""+Entraineur}).eq('id', id)   
      router.push('/equipe')
    }

    
      if(user==null)
      {
        return ( 
          <div>
            Nom : {equipe.nom}
            Entraineur : {equipe.coach}
          </div>
      )
      }
      else
      {

        if(user.id==equipe.user_id)
        {
            return (

          <div>
          <div className={styles.inputgroupA}>
              <label>Nom de l'équipe</label>
              <input type="text" id="equipe" name="equipe" defaultValue={equipe.nom|| ''}/> <br/>
            
          </div>

          
          <div className={styles.inputgroupA}>
              <label>Composition</label>
              <input type="text" id="Composition" name="Composition"  defaultValue={equipe.nom|| ''}/> <br/>
            
          
          
          </div>
          
          <div className={styles.inputgroupA}>
              <label>Entraineur</label>
              <input type="text" id="Entraineur" name="Entraineur"  defaultValue={equipe.coach|| ''} /> <br/>
          
          
          </div>
          
          <div className={styles.inputgroupA}>
              <label>Dernière victoire</label>
              <input type="text" id="victoire" name="victoire"  defaultValue={equipe.coach|| ''} /> <br/>
            
          
          </div>
          
          <div className={styles.inputgroupA}>
          <label>Continent</label>
                <select name="categorie" className={styles.liste}>
          
                    <option value="amerique" >Amérique</option>
                    <option value="Europe">Europe</option>
                    <option value="Asie">Asie</option>
                    <option value="Afrique">Afrique</option>
          
                </select>
                </div>
          
            
                <br/> <br/>                 
                  <button onClick={async()=>Update(equipe.id)}> Modifier </button>

                  <br/>
                  <button onClick={async()=>Delete(equipe.id)} > Supprimer </button>
              
          </div>
  
            )
        }
        else
        {
          return (
                
            <div>
              Nom : {equipe.nom}
              Entraineur : {equipe.coach}



              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<section class="content-item" id="comments">
    <div class="container">   
    	<div class="row">
            <div class="col-sm-8">   
                <form>
                	<h3 class="pull-left">New Comment</h3>
                	<button type="submit" class="btn btn-normal pull-right">Submit</button>
                    <fieldset>
                        <div class="row">
                            <div class="col-sm-3 col-lg-2 hidden-xs">
                            	<img class="img-responsive" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                            </div>
                            <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                                <textarea class="form-control" id="message" placeholder="Your message" required=""></textarea>
                            </div>
                        </div>  	
                    </fieldset>
                </form>
             
                <div class="media">
                    <a class="pull-left" href="#"><img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/></a>
                    <div class="media-body">
                        <h4 class="media-heading">John Doe</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <li><i class="fa fa-calendar"></i>27/02/2014</li>
                            <li><i class="fa fa-thumbs-up"></i>13</li>
                        </ul>
                        <ul class="list-unstyled list-inline media-detail pull-right">
                            <li class=""><a href="">Like</a></li>
                            <li class=""><a href="">Reply</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="media">
                    <a class="pull-left" href="#"><img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""/></a>
                    <div class="media-body">
                        <h4 class="media-heading">John Doe</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <li><i class="fa fa-calendar"></i>27/02/2014</li>
                            <li><i class="fa fa-thumbs-up"></i>13</li>
                        </ul>
                        <ul class="list-unstyled list-inline media-detail pull-right">
                            <li class=""><a href="">Like</a></li>
                            <li class=""><a href="">Reply</a></li>
                        </ul>
                    </div>
                </div>
                

                <div class="media">
                    <a class="pull-left" href="#"><img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/></a>
                    <div class="media-body">
                        <h4 class="media-heading">John Doe</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <li><i class="fa fa-calendar"></i>27/02/2014</li>
                            <li><i class="fa fa-thumbs-up"></i>13</li>
                        </ul>
                        <ul class="list-unstyled list-inline media-detail pull-right">
                            <li class=""><a href="">Like</a></li>
                            <li class=""><a href="">Reply</a></li>
                        </ul>
                    </div>
                </div>
             
                <div class="media">
                    <a class="pull-left" href="#"><img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt=""/></a>
                    <div class="media-body">
                        <h4 class="media-heading">John Doe</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <li><i class="fa fa-calendar"></i>27/02/2014</li>
                            <li><i class="fa fa-thumbs-up"></i>13</li>
                        </ul>
                        <ul class="list-unstyled list-inline media-detail pull-right">
                            <li class=""><a href="">Like</a></li>
                            <li class=""><a href="">Reply</a></li>
                        </ul>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</section>

              
            </div>
        )
          
        }
        
      }

}
